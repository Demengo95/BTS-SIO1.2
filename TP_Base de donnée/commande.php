<?php
include 'connexion.php';

$sql = "SELECT id_commande, date_commande, montant_total FROM commandes";
$result = $conn->query($sql);

echo "<h1>Liste des commandes</h1>";

if ($result->num_rows > 0) {
    echo "<table border='1'>
            <tr>
                <th>ID Commande</th>
                <th>Date Commande</th>
                <th>Montant Total</th>
            </tr>";
    while ($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>{$row['id_commande']}</td>
                <td>{$row['date_commande']}</td>
                <td>{$row['montant_total']}</td>
              </tr>";
    }
    echo "</table>";
} else {
    echo "<p>Aucune commande trouvée.</p>";
}

$conn->close();
?>
