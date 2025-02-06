<?php
$host = '127.0.0.1';
$user = 'root'; 
$password = ''; 
$dbname = 'gestioncommande';

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Erreur de connexion : " . $conn->connect_error);
} else {
    echo "Connexion réussie à la base de données !";
}
?>
