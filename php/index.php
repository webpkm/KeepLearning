<?php
$string ="This is the example";

$result = explode(" ", $string);

print_r(range(0, 12));

$result = implode("|",$result);
print_r($result);
?>