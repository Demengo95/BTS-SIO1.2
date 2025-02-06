<?php
include 'connexion.php';

$id_client = 1; // Exemple d'ID client
$sql = "SELECT * FROM client WHERE id_client = $id_client";
$result = $conn->query($sql);

echo "<h1>Client spécifique</h1>";

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<p>ID Client : {$row['id_client']}</p>";
        echo "<p>Nom : {$row['Nom']}</p>";
        echo "<p>Prénom : {$row['Prenom']}</p>";
        echo "<p>Email : {$row['email']}</p>";
        echo "<p>Date d'inscription : {$row['date_inscription']}</p>";
    }
} else {
    echo "<p>Client non trouvé.</p>";
}

$conn->close();
?>
