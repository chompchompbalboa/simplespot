<?php
Route::group(['middleware' => ['shared']], function () {

    /*
    |--------------------------------------------------------------------------
    | React
    |--------------------------------------------------------------------------
    */

    Route::post('/react', [
        "as" => "react",
        "uses" => "ReactController@react",
    ]);

    /*
    |--------------------------------------------------------------------------
    | Admin
    |--------------------------------------------------------------------------
    */

    $admin = function() {

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

        Route::any('/generate/{template}', [
            "as" => "app_generate",
            "uses" => "AppController@generate",
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

    Route::any('/{optional?}', [
        "as" => "site_home",
        "uses" => "SiteController@home",
    ]);

    Route::any('/{optional?}/{optional2?}', [
        "as" => "site_home",
        "uses" => "SiteController@home",
    ]);
    
});