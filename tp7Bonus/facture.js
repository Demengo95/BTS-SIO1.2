
function calculerResultat(index) {
  
    const prix = document.querySelectorAll('input[type="number"]')[index * 2].value;
    const quantite = document.querySelectorAll('input[type="number"]')[index * 2 + 1].value;
    

    const resultat = prix * quantite;
    

    document.getElementById(`resultat${index}`).value = isNaN(resultat) ? 0 : resultat;


    calculerTotal();
}

function calculerTotal() {
    let total = 0;
    for (let i = 0; i < 3; i++) {
        const resultat = parseFloat(document.getElementById(`resultat${i}`).value) || 0;
        total += resultat;
    }
    document.getElementById('total').value = total.toFixed(2);
}

function reinitialiser() {
    document.querySelectorAll('input[type="text"], input[type="number"]').forEach(input => input.value = '');
    document.getElementById('total').value = '0';
}
