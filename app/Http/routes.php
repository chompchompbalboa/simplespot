<?php
Route::group(['middleware' => ['shared']], function () {

    /*
    |--------------------------------------------------------------------------
    | Admin
    |--------------------------------------------------------------------------
    */

    $admin = function() {
        
        Route::post('/react/{action}/{info?}', [
            "as" => "admin_react",
            "uses" => "AdminReactController@react",
        ]);

        Route::any('/{optional?}', [
            "as" => "admin_home",
            "uses" => "AdminController@home",
        ]);

        Route::any('/{optional?}/{optional2?}', [
            "as" => "admin_home",
            "uses" => "AdminController@home",
        ]);
    };

    Route::group(['domain' => 'admin.simplespot.com'], $admin);
    Route::group(['domain' => 'admin.simplespot.local'], $admin);

    /*
    |--------------------------------------------------------------------------
    | App
    |--------------------------------------------------------------------------
    */

    $app = function() {

        Route::post('/react/{action}/{info?}', [
            "as" => "app_react",
            "uses" => "AppReactController@react",
        ]);

        Route::any('/{optional?}', [
            "as" => "app_home",
            "uses" => "AppController@home",
        ]);

        Route::any('/{optional?}/{optional2?}', [
            "as" => "app_home",
            "uses" => "AppController@home",
        ]);
    };

    Route::group(['domain' => 'simplespot.co'], $app);
    Route::group(['domain' => 'simplespot.local'], $app);

    /*
    |--------------------------------------------------------------------------
    | Sites
    |--------------------------------------------------------------------------
    */

    Route::post('/react/{action}/{info?}', [
        "as" => "site_react",
        "uses" => "SiteReactController@react",
    ]);

    Route::any('/{optional?}', [
        "as" => "site_home",
        "uses" => "SiteController@home",
    ]);

    Route::any('/{optional?}/{optional2?}', [
        "as" => "site_home",
        "uses" => "SiteController@home",
    ]);
    
});