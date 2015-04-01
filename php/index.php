<?php
$string ="This is the example";

$result = explode(" ", $string);

$result = implode("|",$result);

$result = range(0, 12);

shuffle($result);

$result = round(1.95583, 2);

print_r($result);
?>