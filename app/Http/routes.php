<?php
Route::group(['middleware' => ['shared']], function () {

    /*
    |--------------------------------------------------------------------------
    | Admin
    |--------------------------------------------------------------------------
    */

    $admin = function() {
        Route::any('/', [
            "as" => "admin_home",
            "uses" => "AdminController@home",
        ]);

        Route::post('/react/{action}/{info?}', [
            "as" => "admin_react",
            "uses" => "AdminReactController@react",
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
        Route::any('/', [
            "as" => "app_home",
            "uses" => "AppController@home",
        ]);

        Route::post('/react/{action}/{info?}', [
            "as" => "app_react",
            "uses" => "AppReactController@react",
        ]);
    };

    Route::group(['domain' => 'simplespot.co'], $app);
    Route::group(['domain' => 'simplespot.local'], $app);

    /*
    |--------------------------------------------------------------------------
    | Sites
    |--------------------------------------------------------------------------
    */

    Route::any('/{optional?}', [
        "as" => "site_home",
        "uses" => "SiteController@home",
    ]);

    Route::post('/react/{action}/{info?}', [
        "as" => "site_react",
        "uses" => "SiteReactController@react",
    ]);
    
});