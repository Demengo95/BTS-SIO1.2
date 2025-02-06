<?php
include 'connexion.php';

$sql = "SELECT * FROM produits";
$result = $conn->query($sql);

echo "<h1>Liste des produits</h1>";

if ($result->num_rows > 0) {
    echo "<table border='1'>
            <tr>
                <th>ID Produit</th>
                <th>Nom Produit</th>
                <th>Prix</th>
                <th>Stock</th>
            </tr>";
    while ($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>{$row['id_produits']}</td>
                <td>{$row['nom_produit']}</td>
                <td>{$row['Prix']}</td>
                <td>{$row['stock']}</td>
              </tr>";
    }
    echo "</table>";
} else {
    echo "<p>Aucun produit trouvé.</p>";
}

$conn->close();
?>
