<?php

namespace App\Helpers;

use \DomDocument;
use \DomXPath;

use App\Models\RawSiteObjects;
use App\Models\ParsedSiteObjects;
use App\Models\ParsingErrors;

class Parser
{
    //----------------------------------------------------------------------------
    // Public functions - sorted alphabetically
    //----------------------------------------------------------------------------

    /*
    * Parse
    *
    * Parse the current pages
    */
    public function parse($restaurant)
    {
        // Download the yellow page and menu page
        list($yellowPage, $menuPage) = $this->downloadRestaurantPages($restaurant);
        // Parse the DOMs to return a viable site object
        $parsed = $this->parseRestaurantPages($yellowPage['XPath'], $menuPage['XPath'], $restaurant);
        // If there weren't any errors, move the parsed site object to the ParsedSiteObjects db
        if($parsed) {
            return $this->moveParsed($parsed);
        }
        else {
            return false;
        }
    }

    /*
    * Seed
    *
    * Build the seed from the site object
    */
    public function seed($restaurant)
    {
        dd($restaurant);
    }

    //----------------------------------------------------------------------------
    // Private functions - sorted alphabetically
    //----------------------------------------------------------------------------

    /*
    * cURL
    *
    * This is where any necessary cURL requests are generated and the corresponding
    * page returned. 
    */

    private function cURL($URL)
    {
        $curl = curl_init($URL);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_CONNECTTIMEOUT , 20);
        $html = curl_exec($curl);
        curl_close($curl);

        if($html)
        {
            return $html;
        }
    }

    /*
    * Convert To Site Object
    *
    * Here is where we convert the parsed data into a useable site object
    */

    private function convertToSiteObject($currentPath, $parsedData, $restaurant)
    {   
        // Return the data
        return $parsedData;
    }

    /*
    * Download Menu Page
    *
    * We need to download the menu page for each restaurant we're building a 
    * site object for
    */

    private function downloadMenuPage($restaurant)
    {

        // Generate the URL for the menu page
        $menuPageURL = $this->getMenuPageURL($restaurant);

        // Download the menu page and load its DOM Document into an XPath object
        $menuPageDOMDocument = $this->getXPath($menuPageURL, 'external');

        // Return the page
        return $menuPageDOMDocument;
    }

    /*
    * Download Restaurant Pages
    *
    * We need to download the yellow page and it's accompanying menu page for each
    * restaurant we're building a site object for
    */

    private function downloadRestaurantPages($restaurant)
    {
        // Download the yellow page
        $restaurantPages[0] = $this->downloadYellowPage($restaurant);

        // Download the menu page
        $restaurantPages[1] = $this->downloadMenuPage($restaurant);    

        // Return both
        return $restaurantPages;
    }

    /*
    * Download Yellow Page
    *
    * We need to download the yellow page for each restaurant we're building a 
    * site object for
    */

    private function downloadYellowPage($restaurant)
    {
        // Generate the URL for the yellow page
        $yellowPageURL = $this->getYellowPageURL($restaurant);

        // Download the yellow page and load its DOM Document into an XPath object
        $yellowPageDOMDocument = $this->getXPath($yellowPageURL, 'external');

        // Return the page
        return $yellowPageDOMDocument;
    }

    /*
    * Error
    *
    * Respond to a parsing attempt resulting in an error
    */

    private function error($raw)
    {
        // Add the raw to the error database
        $error = new ParsingErrors;
        $error->ypID = $raw->ypID;
        $error->save();
        // And delete it from the original database
        $raw->delete();
    }

    /*
    * Get DOM Document
    *
    * This function is used in several places to gather a DOM Document from a 
    * given URL. If we're making a call to an external URL, it automatically
    * generates a cURL request
    */

    private function getDOMDocument($URL, $localOrExternal)
    {
        // If the file is local, it skips the cURL request
        if($localOrExternal == 'local')
        {
            $DOMDocument = new DomDocument();
            @$DOMDocument->loadHTMLFile($URL);
            return $DOMDocument;
        }
        // If not, it automatically generates one
        elseif($localOrExternal == 'external')
        {
            $html = $this->cURL($URL);
            $DOMDocument = new DomDocument();
            @$DOMDocument->loadHTML($html);
            return $DOMDocument;
        }
    }

    /* Get Menu Page URL
    *
    * Build the URL for the restaurant's menu page
    */

    private function getMenuPageURL($restaurant)
    {
        // Convert city and state to the needed form for the URL
        $cityState = str_replace(' ', '-', strtolower($restaurant->city)).'-'.strtolower($restaurant->state);

        // Convert name and ypID to the needed form for the URL
        $name = str_replace(' ', '-', strtolower($restaurant->name));
        $nameYpID = $name.'-'.$restaurant->ypID;

        // Generate the URL
        $menuPageURL = 'http://www.yellowpages.com/'.$cityState.'/mip/'.$nameYpID.'/menu';

        // Return the URL
        return $menuPageURL;
    }

    /*
    * Get Yellow Page URL
    *
    * Build the URL for the restaurant's yellow page
    */

    private function getYellowPageURL($restaurant)
    {
        // Generate the URL
        $yellowPageURL = 'http://www.yellowpages.com'.$restaurant->yellowpage;

        // Return the URL
        return $yellowPageURL;
    }

    /*
    * Get XPath
    *
    * Take a given URL and return an XPath Object. This function is chained to 
    * the getDOMDocument and cURL functions, so that we can call this function
    * and have the entire process run by default.
    */

    private function getXPath($URL, $localOrExternal)
    {
        // Get the DOM Document
        $DOMDocument = $this->getDOMDocument($URL, $localOrExternal);

        // Load it as an XPath object
        $xpath = new DomXPath($DOMDocument);

        // Build the return variable
        $page['DOMDocument'] = $DOMDocument;
        $page['XPath'] = $xpath;

        // Return the newly formed XPath object
        return $page;
    }

    /*
    * Move Parsed
    *
    * Take a succesfully parsed raw site object and move it to the parsed site
    * object db
    */

    private function moveParsed($parsed)
    {
        // Initialize variable
        $move = new ParsedSiteObjects;
        // Transfer each property over
        $move->name = $parsed['name'];
        $move->categories = $parsed['categories'];
        $move->street = $parsed['street'];
        $move->city = $parsed['city'];
        $move->state = $parsed['state'];
        $move->zip = $parsed['zip'];
        $move->website = $parsed['website'];
        $move->email = $parsed['email'];
        $move->phone = $parsed['phone'];
        $move->hours = $parsed['hours'];
        $move->menu = $parsed['menu'];

        // Save the move and return status
        if($move->save())
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    /*
    * Parse Categories
    *
    * Parse the categories from the yellow page
    */

    private function parseCategories($yellowPage, $restaurant)
    {
        // Establish parameters for XPath query
        $categoriesQuery = "//dd[@class='categories']/span";

        // Execute XPath query
        $categoriesXPathResults = $this->XPathQuery($yellowPage, $categoriesQuery);

        // Get the number of categories returned
        $categoriesCount = $categoriesXPathResults->length;

        // Return a default value if no categories are returned
        if($categoriesCount < 1)
        {
            $categories = [];
        }
        // Otherwise, process each result
        else
        {
            // Initialize variable
            $categories = [];

            // Process results
            foreach($categoriesXPathResults as $categoriesXPathResult)
            {
                $categories[] = str_replace(", ", "", $categoriesXPathResult->nodeValue);
            }
        }
        
        // Return result
        return $categories;
    }

    /*
    * Parse City
    *
    * Parse the street address from the yellow page
    */

    private function parseCity($yellowPage, $restaurant)
    {
        // Establish parameters for XPath query
        $cityQuery = "//p[@class='city-state']";

        // Execute XPath query
        $cityXPathResults = $this->XPathQuery($yellowPage, $cityQuery);

        // Get the number of cities returned
        $cityCount = $cityXPathResults->length;

        // Return a default value if no cities are returned
        if($cityCount < 1)
        {
            $city = false;
        }
        // Otherwise, process each result
        else
        {
            // Process results
            foreach($cityXPathResults as $cityXPathResult)
            {
                $cityArray = explode(", ", $cityXPathResult->nodeValue);
                $city = $cityArray[0];
            }
        }

        // Return result
        return $city;
    }

    /*
    * Parse Email
    *
    * Specific settings for parsing the email address from the yellow page
    */

    private function parseEmail($yellowPage, $restaurant)
    {
        // Establish parameters for XPath query
        $emailQuery = "//a[starts-with(@href, 'mailto')]";

        // Execute XPath query
        $emailXPathResults = $this->XPathQuery($yellowPage, $emailQuery);

        // Get the number of email addresses returned
        $emailCount = $emailXPathResults->length;

        // Return a default value if an email isn't returned
        if($emailCount < 1)
        {
            $email = false;
        }
        // Otherwise, process each result
        else
        {
            // Initialize variable
            $email = [];

            // Process results
            foreach($emailXPathResults as $emailXPathResult)
            {
                $email[] = $this->parseEmailFormat($emailXPathResult);
            }
        }
        
        // Return result
        return $email;
    }

    /*
    * Parse Email Format
    *
    * Convert the XPath results from the email search to the format we want for 
    * the site object
    */

    private function parseEmailFormat($emailXPathResult)
    {
        // Grab the raw email (still includes 'mailto:')
        $rawEmail = $emailXPathResult->getAttribute('href');

        // Remove the extra stuff
        $email = substr($rawEmail, (strpos($rawEmail, ':')) + 1);

        // Return the email
        return $email;
    }

    /*
    * Parse Hours
    *
    * Specific settings for parsing the hours from the yellow page
    */

    private function parseHours($yellowPage, $restaurant)
    {

        // Establish parameters for XPath query
        $hoursQuery = "//time";

        // Execute XPath query
        $hoursXPathResults = $this->XPathQuery($yellowPage, $hoursQuery);

        // Get the number of results returned
        $hoursCount = $hoursXPathResults->length;

        // Throw an error if a result isn't returned
        if($hoursCount < 1)
        {
            $hours = false;
        }
        // Otherwise, process each result
        else
        {
            // Initialize variable
            $datetimes = [];

            // Process results
            foreach($hoursXPathResults as $hoursXPathResult)
            {
                $datetimes[] = $this->parseHoursFormat($hoursXPathResult);
            }

            // Because we return an array for each datetime, instead of each day, we need to convert
            // it to a useable format
            foreach($datetimes as $datetime)
            {
                foreach($datetime as $day=>$time)
                {
                    $hours[$day] = $time;
                }
            }
        }
        
        // Return result
        return $hours;
    }

    /*
    * Parse Hours Format
    *
    * Convert the XPath results from the hours search to the format we want for 
    * the site object
    */

    private function parseHoursFormat($hoursXPathResult)
    {
        // Get the raw datetime - this also checks to make sure it exists, sometimes the query returns funky results
        $rawDatetime = (null !== $hoursXPathResult->getAttribute('datetime')) ? $hoursXPathResult->getAttribute('datetime') : false;

        // Check to make sure we actually have the hours data
        if(!$rawDatetime)
        {
            return false;
        }
        // If we do, proceed to formatting
        else
        {
            // Seperate the raw datetime into the days and hours
            $explodeRawDatetime = explode(' ', $rawDatetime);

            if(isset($explodeRawDatetime[0]) && isset($explodeRawDatetime[1]))
            {
                // Send each off for formatting
                $rawDays = $this->parseHoursFormatDays($explodeRawDatetime[0]);
                $rawHours = $this->parseHoursFormatHours($explodeRawDatetime[1]);
            }
            else
            {
                $hours = false;
            }

            // Format the returned result
            foreach($rawDays as $day)
            {
                $hours[$day] = $rawHours;
            }
        }

        return $hours;
    }

    /*
    * Parse Hours Format Days
    *
    * Convert the raw datetime information we have about the days open into formatted
    * data for the site object
    */

    private function parseHoursFormatDays($rawDays)
    {
        // We need to know the order of the days for situations where a datetime covers multiple days
        $daysOrder = [
                'Mo',
                'Tu',
                'We',
                'Th',
                'Fr',
                'Sa',
                'Su'
            ];

        // Then we'll explode our raw days to get the first and last day (or just individual day)
        $explodeDays = explode('-', $rawDays);

        // If there's only one day for this result, just go ahead and add it to the return array straight away.
        if(count($explodeDays) === 1)
        {
            $convertedDays[] = $explodeDays[0];
        }
        // If not, we'll need to loop through our array to assign the days individually
        else
        {
            // Get position in array of first day
            $firstDay = $explodeDays[0];
            $firstDayPosition = array_search($firstDay, $daysOrder);

            // Get position in array of last day
            $lastDay = $explodeDays[1];
            $lastDayPosition = array_search($lastDay, $daysOrder);

            // Initialize the starting position
            $currentDayPosition = $firstDayPosition;

            // For each value in $daysOrder from the first postition to the last, add the time to the return array
            while($currentDayPosition != $lastDayPosition + 1)
            {
                // We need to make sure we loop back to the beginning of the array instead of starting an indefinite loop
                if($currentDayPosition > 6)
                {
                    $currentDayPosition = 0;
                }

                // Assign the day and time to the variable
                $convertedDays[] = $daysOrder[$currentDayPosition];

                // Go to the next day
                $currentDayPosition = $currentDayPosition + 1;
            }
        }

        // Return result
        return $convertedDays;
    }

    /*
    * Parse Hours Format Hours
    *
    * Convert the raw datetime information we have about the hours open into formatted
    * data for the site object
    */

    private function parseHoursFormatHours($rawHours)
    {
        // First, explode the raw hours to separate the open and close times
        $explodeHours = explode('-', $rawHours);

        $open = $explodeHours[0];
        $close = $explodeHours[1];

        // Then separate both the open and close to get the hour and minute for each
        $explodeOpen = explode(':', $open);
        $explodeClose = explode(':', $close);

        $openHour = $explodeOpen[0];
        $openMinute = $explodeOpen[1];

        $closeHour = $explodeClose[0];
        $closeMinute = $explodeClose[1];

        // Finally, reassign them to the variable;
        $convertedHours['open']['hour'] = $openHour;
        $convertedHours['open']['minute'] = $openMinute;
        $convertedHours['close']['hour'] = $closeHour;
        $convertedHours['close']['minute'] = $closeMinute;

        // Then return the converted hours
        return $convertedHours;
    }

    /*
    * Parse Menu
    *
    * Specific settings for parsing the menu from the yellow page
    */

    private function parseMenu($menuPage, $restaurant)
    {
        // Get the menu path
        $menuPathResults = $this->XPathQuery($menuPage, "//*[@id='menu']/article[1]");

        // Make sure a path is returned
        if(isset($menuPathResults) && $menuPathResults[0] !== null)
        {
            $menuPath = $menuPathResults[0]->getNodePath();
        }
        else
        {
            return false;
        }

        // Now we need to get each of the menu headers
        $menuHeaders = $this->parseMenuGetHeaders($menuPath, $menuPage);

        // For each menu header, get the list of items it contains
        foreach($menuHeaders as $menuHeader)
        {
            // Make sure we don't have a string or something funky for a menu header
            if(is_object($menuHeader))
            {
                // Another bug fix - let's make sure the nodeValue property exists
                if(property_exists($menuHeader, 'nodeValue'))
                {
                    // Get header value
                    $menuHeaderValue = $menuHeader->nodeValue;

                    // Protect against blank keys - which throw a fatal error and stop the parser
                    if($menuHeaderValue == '')
                    {
                        $menuHeaderValue = 'default';
                    }

                    // Get list of items and add it to the array
                    $menu[$menuHeaderValue] = $this->parseMenuGetListItems($menuHeader, $menuPage);
                }
            }
        }

        // Return result
        if(isset($menu))
        {
            return $menu;
        }
        else
        {
            return false;
        }

    }

    /*
    * Parse Menu Get Headers
    *
    * When we grab a menu, we need to organize it by the same subsections it came to
    * us in. This function grabs each of those subsections.
    */

    private function parseMenuGetHeaders($menuPath, $menuPage)
    {
        // Write the query
        $menuHeaderQuery = $menuPath.'//header';

        // Run the query
        $menuHeaderResults = $this->XPathQuery($menuPage, $menuHeaderQuery);

        // Check the number of results
        if($menuHeaderResults->length > 0)
        {
            // If we get a response from the query, add it to the return array
            foreach($menuHeaderResults as $menuHeaderResult)
            {
                $menuHeaders[] = $menuHeaderResult;
            }
        }
        else
        {
            $menuHeaders[] = 'default';
            //$this->throwError($restaurant, 'No menu headers were returned', $menuHeaderResults);
        }

        // Return result
        return $menuHeaders;
    }

    /*
    * Parse Menu Get List Items
    *
    * Each menu header should contain a list of food items - let's get that list
    */

    private function parseMenuGetListItems($menuHeader, $menuPage)
    {
        // Make sure the $menuHeader contains a node path
        if(null !== $menuHeader->getNodePath())
        {
            $menuHeaderPath = $menuHeader->getNodePath();
        }
        else
        {
            $menuItems[] = 'default';
            return $menuItems;
            //$this->throwError($restaurant, 'The menu header does not contain any path information', $menuHeader);
        }

        // Generate the path to each of the food items
        $menuHeaderListPath = $menuHeaderPath.'/following-sibling::*[1][self::ul]//li';

        // Run the query
        $menuHeaderListItems = $this->XPathQuery($menuPage, $menuHeaderListPath);

        // For each item, store the information in the return array
        foreach($menuHeaderListItems as $menuHeaderListItem)
        {
            $menuItems[] = $this->parseMenuGetMenuItem($menuHeaderListItem, $menuPage);
        }

        // Return result
        if(isset($menuItems))
        {
            return $menuItems;
        }
        else
        {
            $menuItems[] = 'default';
            return $menuItems;
        }

    }

    /*
    * Parse Menu Get Menu Items
    *
    * Each of the menu items we're looking to grab requires a little extra work.
    * Here is where that work is done.
    */

    private function parseMenuGetMenuItem($menuHeaderListItem, $menuPage)
    {
        // Call each of the functions we need to get the full menu item information
        $menuItem['title'] = $this->parseMenuGetMenuItemTitle($menuHeaderListItem, $menuPage);
        $menuItem['price'] = $this->parseMenuGetMenuItemPrice($menuHeaderListItem, $menuPage);
        $menuItem['description'] = $this->parseMenuGetMenuItemDescription($menuHeaderListItem, $menuPage);

        // Return results
        return $menuItem;
    }

    /* 
    * Parse Menu Get Menu Item Description
    *
    * Specific information for retrieving the description for a menu item.
    */

    private function parseMenuGetMenuItemDescription($menuHeaderListItem, $menuPage)
    {
        // Make sure the list item contains path information, then write the query
        // for the title
        if(null !== $menuHeaderListItem->getNodePath())
        {
            $menuHeaderListItemPath = $menuHeaderListItem->getNodePath();
            $menuItemDescriptionQuery = $menuHeaderListItemPath."//*[@class='item-description']";
        }
        else
        {
            return null;
        }

        // Run the query
        $menuItemDescriptionResults = $this->XPathQuery($menuPage, $menuItemDescriptionQuery);

        // Make sure a result is returned, then get the title from the return value
        if($menuItemDescriptionResults->length > 0)
        {
            foreach($menuItemDescriptionResults as $menuItemDescriptionResult)
            {
                $menuItemDescription = $menuItemDescriptionResult->nodeValue;
            }   
        }
        else
        {
            // Set a default value
            $menuItemDescription = null;
        }

        // Return results
        return $menuItemDescription;
    }

    /* 
    * Parse Menu Get Menu Item Price
    *
    * Specific information for retrieving the price for a menu item.
    */

    private function parseMenuGetMenuItemPrice($menuHeaderListItem, $menuPage)
    {
        // Make sure the list item contains path information, then write the query
        // for the title
        if(null !== $menuHeaderListItem->getNodePath())
        {
            $menuHeaderListItemPath = $menuHeaderListItem->getNodePath();
            $menuItemPriceQuery = $menuHeaderListItemPath."//*[@class='title-price']//*[@class='price']";
        }
        else
        {
            return null;
        }

        // Run the query
        $menuItemPriceResults = $this->XPathQuery($menuPage, $menuItemPriceQuery);

        // Make sure a result is returned, then get the title from the return value
        if($menuItemPriceResults->length > 0)
        {
            foreach($menuItemPriceResults as $menuItemPriceResult)
            {
                $menuItemPrice[] = $menuItemPriceResult->nodeValue;
            }   
        }
        else
        {
            // Set a default value
            $menuItemPrice = null;
        }

        // Return results
        return $menuItemPrice;
    }

    /* 
    * Parse Menu Get Menu Item Title
    *
    * Specific information for retrieving the title for a menu item.
    */

    private function parseMenuGetMenuItemTitle($menuHeaderListItem, $menuPage)
    {
        // Make sure the list item contains path information, then write the query
        // for the title
        if(null !== $menuHeaderListItem->getNodePath())
        {
            $menuHeaderListItemPath = $menuHeaderListItem->getNodePath();
            $menuItemTitleQuery = $menuHeaderListItemPath."//*[@class='title-price']/strong";
        }
        else
        {
            return null;
        }

        // Run the query
        $menuItemTitleResults = $this->XPathQuery($menuPage, $menuItemTitleQuery);

        // Make sure a result is returned, then get the title from the return value
        if($menuItemTitleResults->length > 0)
        {
            foreach($menuItemTitleResults as $menuItemTitleResult)
            {
                $menuItemTitle = $menuItemTitleResult->nodeValue;
            }       
        }
        else
        {
            // Set a default value
            $menuItemTitle = null;
        }

        // Return results
        return $menuItemTitle;
    }

    /*
    * Parse Name
    *
    * Parse the name from the yellow page
    */

    private function parseName($yellowPage, $restaurant)
    {
        // Establish parameters for XPath query
        $nameQuery = "//h1[@itemprop='name']";

        // Execute XPath query
        $nameXPathResults = $this->XPathQuery($yellowPage, $nameQuery);

        // Make sure a result is returned
        $nameCount = $nameXPathResults->length;

        // Return a default value if an name isn't returned
        if($nameCount < 1)
        {
            $name = false;
        }
        // Otherwise, process the result
        else
        {
            foreach($nameXPathResults as $nameXPathResult)
            {
                $name = $nameXPathResult->nodeValue;
            }  
        }
        
        // Return result
        return $name;
    }

    /*
    * Parse Phone
    *
    * Parse the street address from the yellow page
    */

    private function parsePhone($yellowPage, $restaurant)
    {
        // Establish parameters for XPath query
        $phoneQuery = "//p[@class='phone']";

        // Execute XPath query
        $phoneXPathResults = $this->XPathQuery($yellowPage, $phoneQuery);

        // Get the number of phone addresses returned
        $phoneCount = $phoneXPathResults->length;

        // Return a default value if no phone addresses are returned
        if($phoneCount < 1)
        {
            $phone = false;
        }
        // Otherwise, process each result
        else
        {
            // Process results
            foreach($phoneXPathResults as $phoneXPathResult)
            {
                $phone = str_replace(", ", "", $phoneXPathResult->nodeValue);
            }
        }

        // Return result
        return $phone;
    }

    /*
    * Parse Restaurant Pages
    *
    * Here is where the heavy lifting is done - where we convert the information
    * we've downloaded into a useable site object. 
    */

    private function parseRestaurantPages($yellowPage, $menuPage, $restaurant)
    {
        // Run each of the individual parsing functions we need
        $parsedData['name'] = $this->parseName($yellowPage, $restaurant);
        $parsedData['categories'] = $this->parseCategories($yellowPage, $restaurant);
        $parsedData['street'] = $this->parseStreet($yellowPage, $restaurant);
        $parsedData['city'] = $this->parseCity($yellowPage, $restaurant);
        $parsedData['state'] = $this->parseState($yellowPage, $restaurant);
        $parsedData['zip'] = $this->parseZip($yellowPage, $restaurant);
        $parsedData['website'] = $this->parseWebsite($yellowPage, $restaurant);
        $parsedData['email'] = $this->parseEmail($yellowPage, $restaurant);
        $parsedData['phone'] = $this->parsePhone($yellowPage, $restaurant);
        $parsedData['hours'] = $this->parseHours($yellowPage, $restaurant);
        $parsedData['menu'] = $this->parseMenu($menuPage, $restaurant);
        
        // Check to make sure there were no errors
        if(!in_array(false, $parsedData)) {
            // Build return variable
            return $parsedData;
        }
        else {
            $this->error($restaurant);
            return false;
        }
    }

    /*
    * Parse State
    *
    * Parse the street address from the yellow page
    */

    private function parseState($yellowPage, $restaurant)
    {
        // Establish parameters for XPath query
        $stateQuery = "//p[@class='city-state']";

        // Execute XPath query
        $stateXPathResults = $this->XPathQuery($yellowPage, $stateQuery);

        // Get the number of cities returned
        $stateCount = $stateXPathResults->length;

        // Return a default value if no cities are returned
        if($stateCount < 1)
        {
            $state = false;
        }
        // Otherwise, process each result
        else
        {
            // Process results
            foreach($stateXPathResults as $stateXPathResult)
            {
                $stateArray = explode(", ", $stateXPathResult->nodeValue);
                $stateArray2 = explode(" ", $stateArray[1]);
                $state = $stateArray2[0];
            }
        }
        
        // Return result
        return $state;
    }

    /*
    * Parse Street
    *
    * Parse the street address from the yellow page
    */

    private function parseStreet($yellowPage, $restaurant)
    {
        // Establish parameters for XPath query
        $streetQuery = "//p[@class='street-address']";

        // Execute XPath query
        $streetXPathResults = $this->XPathQuery($yellowPage, $streetQuery);

        // Get the number of street addresses returned
        $streetCount = $streetXPathResults->length;

        // Return a default value if no street addresses are returned
        if($streetCount < 1)
        {
            $street = false;
        }
        // Otherwise, process each result
        else
        {
            // Process results
            foreach($streetXPathResults as $streetXPathResult)
            {
                $street = str_replace(", ", "", $streetXPathResult->nodeValue);
            }
        }

        // Return result
        return $street;
    }

    /*
    * Parse Website
    *
    * Parse the street address from the yellow page
    */

    private function parseWebsite($yellowPage, $restaurant)
    {
        // Establish parameters for XPath query
        $websiteQuery = "//*[@id='main-content']/div[1]/div[2]/section/footer/a[1]";
        // Execute XPath query
        $websiteXPathResults = $this->XPathQuery($yellowPage, $websiteQuery);
        
        // Get the number of cities returned
        $websiteCount = $websiteXPathResults->length;

        // Return a default value if no cities are returned
        if($websiteCount < 1)
        {
            $website = false;
        }
        // Otherwise, process each result
        else
        {
            // Process results
            foreach($websiteXPathResults as $websiteXPathResult)
            {
                if($websiteXPathResult->nodeValue === "Visit Website")
                {
                    $website = $websiteXPathResult->getAttribute('href');
                }
            }
        }
        
        // Return result
        return $website;
    }

    /*
    * Parse Zip
    *
    * Parse the street address from the yellow page
    */

    private function parseZip($yellowPage, $restaurant)
    {
        // Establish parameters for XPath query
        $zipQuery = "//p[@class='city-state']";

        // Execute XPath query
        $zipXPathResults = $this->XPathQuery($yellowPage, $zipQuery);

        // Get the number of cities returned
        $zipCount = $zipXPathResults->length;

        // Return a default value if no cities are returned
        if($zipCount < 1)
        {
            $zip = false;
        }
        // Otherwise, process each result
        else
        {
            // Process results
            foreach($zipXPathResults as $zipXPathResult)
            {
                $zipArray = explode(", ", $zipXPathResult->nodeValue);
                $zipArray2 = explode(" ", $zipArray[1]);
                $zip = $zipArray2[1];
            }
        }
        
        // Return result
        return $zip;
    }

    /*
    * XPath Query
    *
    * Handle any XPath query the application requests. 
    */

    private function XPathQuery($xpath, $query)
    {
        // Execute the query
        $results = $xpath->query($query);

        // Return results
        return $results;
    }
}