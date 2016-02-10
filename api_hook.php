<?php
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
header('Accept: application/json');

$message = array();

$raw = file_get_contents('php://input');

$message['request']   = $_REQUEST;
$message['raw_input'] = $raw;
$message['post'] 	  = $_POST;
$message['get'] 	  = $_GET;
$message['server'] 	  = $_SERVER;

$message["username"] = 'khokon';
$message["password"] = 'khkon!@#$%';

echo json_encode($message);
?>