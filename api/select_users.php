<?php

define('DB_HOST', 'localhost');
define('DB_NAME', 'gpsrawdbp');
define('DB_USER', 'root');
define('DB_PASS', '');

$db = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8', DB_USER, DB_PASS);
$firstLogIn = false;
try {
    $stmt = $db->prepare("SELECT * FROM kxusers ");
    $stmt->execute();
    $rowCount = $stmt->rowCount();
    if ($rowCount > 0) {
        $userArray = $stmt->fetchAll(PDO::FETCH_ASSOC);
//        return $userArray;
        echo json_encode($userArray);
    }
} catch (PDOException $ex) {
    var_dump($ex);
}
// to do: 
//napraviti php skriptu ili skripte koje će raditi sljedeće
//1. brisanje korisnika iz baze. Metoda GET, u url-u će se proslijediti id koji će obrisati korisnika
//2. dohvaćanje korisnika s određenim id-em. Metoda GET, u url-u će se proslijediti id korisniak koji se dohvaća 
//3. dohvat svih korisnika, metoda GET 
//4. dodavanje novog korisnika, metoda POST
//5. update postojećeg korisnika, POST