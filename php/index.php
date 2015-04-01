<?php
$string ="This is the example";

$result = explode(" ", $string);

$result = implode("|",$result);

$result = range(0, 12);

shuffle($result);

print_r($result);
?>