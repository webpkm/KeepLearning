<?php
$string ="This is the example";

$result = explode(" ", $string);

$result = implode("|",$result);

$result = range(0, 12);

shuffle($result);

$result = round(1.95583, 2);

$a = array("a"=>"red","b"=>"green","c"=>"red");
$result = array_unique($a);

$result = trim(" PREM KUMAR   ");
print_r($result);
?>