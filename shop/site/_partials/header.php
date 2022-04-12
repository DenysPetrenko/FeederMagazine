<?php

$categories = \Model\Category\Repository::getAll();
var_dump($categories);


?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Header</title>
</head>
<body>


<div class="menu">
    <h1>Header</h1>

    <ul>
        <li><a href="home.php">Home</a></li>
        <li><a href="category.php">Category</a></li>

    </ul>

</div>
</body>
</html>
