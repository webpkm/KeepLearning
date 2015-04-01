<?php
$string ="This is the example";

$result = explode(" ", $string);

$result = implode("|",$result);
print_r($result);
?>