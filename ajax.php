<?php
$data = file_get_contents("php://input");
var_dump($data);
echo json_encode($data, true);
//$data = [
//    'name' =>'Vasya',
//    'age' => 19
//];
