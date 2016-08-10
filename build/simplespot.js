/**
* simplespot.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/

/**
* Eventually this will be a private npm package. But for now, it's a module
* that holds all the gulp tasks for processing the simplespot modules.
*
* @module simplespot
*/
module.exports =  {

    /**
    * Run the build tasks
    * 
    * @function buildTasks
    * @param {object} fs
    * @param {object} jsonfile
    */
    buildTasks: function(fs, jsonfile) {
        // Collect the props from the module files
        var props = this._collectProps(fs, jsonfile);
        // Build defaultProps.json
        this._writeDefaultProps(jsonfile, props);
    },

    /**
    * Collect the props from the module files
    * 
    * @function buildTasks
    * @param {object} fs
    * @param {object} jsonfile
    * @return {object}
    */
    _collectProps: function(fs, jsonfile) {
        var modules = [];
        var dirs = [
            './app/React/components/Modules/App',
            './app/React/components/Modules/Basic',
            './app/React/components/Modules/Personal',
        ];
        for (var h in dirs) {
            var dir = dirs[h];
            // Get the list of files in the directory
            var moduleFiles = fs.readdirSync(dir);
            // For each file
            for (var i in moduleFiles) {
                // Get file info
                var moduleFileName = moduleFiles[i];
                var moduleFileLocation = dir + "/" + moduleFileName;
                var indexJSX = moduleFileName.indexOf('jsx');
                // If it's a JSX file
                if(indexJSX > -1) {
                    // Get module name
                    var moduleName = moduleFileName.slice(0, indexJSX - 1);
                    // Get raw file contents
                    var moduleFileContents = fs.readFileSync(moduleFileLocation, "utf-8");
                    // Split it at each comment block
                    var splitModuleFileContents = moduleFileContents.split("/**");
                    // For each split content string
                    for (var j in splitModuleFileContents) {
                        var current = splitModuleFileContents[j];
                        // Find the block with the props in it
                        if(current.indexOf('getDefaultProps') > -1) {
                            // Slice the comment block off
                            current = current.slice(current.indexOf('*/'), current.length);
                            // Get index for beginning of props
                            var startIndex = current.indexOf('return ') + 7; // 8 = number of characters in 'return {'
                            // Get index for end of props
                            var endIndexLength = current.split('}').length;
                            var endIndex = current.split('}', endIndexLength - 1).join('}').length;
                            // Slice the string
                            var stringProps = current.slice(startIndex, endIndex);
                            // Convert to object
                            var objectProps = eval("(" + stringProps + ")");
                            // Create current module object
                            var currentModule = {};
                            // Set name and props
                            currentModule.module = moduleName;
                            currentModule.props = objectProps;
                            // Push object to modules array
                            modules.push(currentModule);
                        }
                    }
                }
            }
        }
        return modules;
    },

    /**
    * Write the default props file
    * 
    * @function buildTasks
    * @param {object} fs
    * @param {object} jsonfile
    */
    _writeDefaultProps: function(jsonfile, props) {   
        // Write file to modules.json
        jsonfile.writeFile('./public/json/defaultProps.json', props, function() {console.log('Wrote: defaultProps.json')});
    }
}