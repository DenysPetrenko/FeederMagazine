<?php
try {
    $dbh = new PDO('mysql:host=a_level_nix_mysql;port=3306;dbname=a_level_nix_mysql', 'root', 'cbece_gead-cebfa');
    foreach ($dbh->query('show databases') as $eee) {

        echo "<pre>";
        var_dump($eee);
        echo "</pre>";
    }

    foreach ($dbh->query('SHOW TABLES;') as $eee) {
        echo "<pre>";
        var_dump($eee);
        echo "</pre>";
    }

    $dbh = null;
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
