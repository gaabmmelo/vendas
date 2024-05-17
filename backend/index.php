<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

require "vendor/autoload.php";

$router = new \Bramus\Router\Router();

$router->get('/product', '\App\Controllers\ProductController@index');
$router->get('/product/{id}', '\App\Controllers\ProductController@show');
$router->post('/product', '\App\Controllers\ProductController@create');
$router->options('/product', function() { /* ... */ });

$router->run();