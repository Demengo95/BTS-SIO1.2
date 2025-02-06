<?php
include 'connexion.php';

$sql = "SELECT nom_produit, Prix FROM produits";
$result = $conn->query($sql);

echo "<h1>Noms des produits et leurs prix</h1>";

if ($result->num_rows > 0) {
    echo "<table border='1'>
            <tr>
                <th>Nom Produit</th>
                <th>Prix</th>
            </tr>";
    while ($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>{$row['nom_produit']}</td>
                <td>{$row['Prix']}</td>
              </tr>";
    }
    echo "</table>";
} else {
    echo "<p>Aucun produit trouvé.</p>";
}

$conn->close();
?>
