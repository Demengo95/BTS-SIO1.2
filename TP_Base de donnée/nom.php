<?php
include 'connexion.php';

$sql = "SELECT Nom, email FROM client";
$result = $conn->query($sql);

echo "<h1>Nom et Email des clients</h1>";

if ($result->num_rows > 0) {
    echo "<table border='1'>
            <tr>
                <th>Nom</th>
                <th>Email</th>
            </tr>";
    while ($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>{$row['Nom']}</td>
                <td>{$row['email']}</td>
              </tr>";
    }
    echo "</table>";
} else {
    echo "<p>Aucun client trouvé.</p>";
}

$conn->close();
?>
