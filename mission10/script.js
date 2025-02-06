document.getElementById("addRow").addEventListener("click", () => {
    const table = document.querySelector("#invoiceTable tbody");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td><input type="text" placeholder="Nom du produit"></td>
        <td><input type="number" value="1" min="1"></td>
        <td><input type="number" value="0" min="0" step="0.01"></td>
        <td class="line-total">0.00</td>
        <td><button class="btn delete-btn">❌</button></td>
    `;

    table.appendChild(newRow);
    addDeleteEvent(newRow.querySelector(".delete-btn"));
});

function addDeleteEvent(button) {
    button.addEventListener("click", function () {
        this.closest("tr").remove();
        calculateTotal();
    });
}

document.getElementById("calculate").addEventListener("click", calculateTotal);

function calculateTotal() {
    const rows = document.querySelectorAll("#invoiceTable tbody tr");
    let subTotal = 0;

    rows.forEach(row => {
        const qty = parseFloat(row.cells[1].querySelector("input").value) || 0;
        const price = parseFloat(row.cells[2].querySelector("input").value) || 0;
        const total = qty * price;
        row.querySelector(".line-total").textContent = total.toFixed(2);
        subTotal += total;
    });

    const tax = subTotal * 0.20;
    const grandTotal = subTotal + tax;

    document.getElementById("subTotal").textContent = `${subTotal.toFixed(2)} €`;
    document.getElementById("tax").textContent = `${tax.toFixed(2)} €`;
    document.getElementById("grandTotal").textContent = `${grandTotal.toFixed(2)} €`;
}

document.getElementById("autoFill").addEventListener("click", () => {
    const products = ["Ordinateur", "Clavier", "Souris", "Écran", "Imprimante"];
    const rows = document.querySelectorAll("#invoiceTable tbody tr");

    rows.forEach(row => {
        row.cells[0].querySelector("input").value = products[Math.floor(Math.random() * products.length)];
        row.cells[1].querySelector("input").value = Math.floor(Math.random() * 5) + 1;
        row.cells[2].querySelector("input").value = (Math.random() * 500).toFixed(2);
    });

    calculateTotal();
});

// Ajouter l'événement de suppression aux boutons existants
document.querySelectorAll(".delete-btn").forEach(addDeleteEvent);

// ✅ Fonction pour rediriger vers la page de correction
