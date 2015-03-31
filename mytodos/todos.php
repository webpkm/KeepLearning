<?php

$todos = array();

$todos[0]['id'] = 1; 
$todos[0]['todo'] = "Create the HTML page design"; 
$todos[0]['snippet'] = "Create the HTML page design"; 
$todos[0]['time'] = "Time allowed 2 hours"; 
$todos[0]['status'] = -1; 

$todos[1]['id'] = 2; 
$todos[1]['todo'] = "Create the CSS page design"; 
$todos[1]['snippet'] = "Create the CSS page design"; 
$todos[1]['time'] = "Time allowed 2 hours"; 
$todos[1]['status'] = -1; 

$todos[2]['id'] = 3; 
$todos[2]['todo'] = "Create the Angular page design"; 
$todos[2]['snippet'] = "Create the Angular page design"; 
$todos[2]['time'] = "Time allowed 2 hours"; 
$todos[2]['status'] = 1; 
echo json_encode($todos);
?>