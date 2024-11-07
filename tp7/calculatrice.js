// Fonction pour additionner les deux nombres
function addition() {
    const num1 = parseFloat(document.getElementById("t1").value);
    const num2 = parseFloat(document.getElementById("t2").value);
    if (!isNaN(num1) && !isNaN(num2)) {
        document.getElementById("t3").value = num1 + num2;
    } else {
        alert("Veuillez entrer des nombres valides.");
    }
}

// Fonction pour soustraire le deuxième nombre du premier
function soustraction() {
    const num1 = parseFloat(document.getElementById("t1").value);
    const num2 = parseFloat(document.getElementById("t2").value);
    if (!isNaN(num1) && !isNaN(num2)) {
        document.getElementById("t3").value = num1 - num2;
    } else {
        alert("Veuillez entrer des nombres valides.");
    }
}

// Fonction pour diviser le premier nombre par le second
function division() {
    const num1 = parseFloat(document.getElementById("t1").value);
    const num2 = parseFloat(document.getElementById("t2").value);
    if (!isNaN(num1) && !isNaN(num2)) {
        if (num2 !== 0) {
            document.getElementById("t3").value = num1 / num2;
        } else {
            alert("La division par zéro n'est pas autorisée.");
        }
    } else {
        alert("Veuillez entrer des nombres valides.");
    }
}

// Fonction pour multiplier les deux nombres
function multiplication() {
    const num1 = parseFloat(document.getElementById("t1").value);
    const num2 = parseFloat(document.getElementById("t2").value);
    if (!isNaN(num1) && !isNaN(num2)) {
        document.getElementById("t3").value = num1 * num2;
    } else {
        alert("Veuillez entrer des nombres valides.");
    }
}

// Fonction pour vérifier la parité du premier nombre
function parite() {
    const num1 = parseInt(document.getElementById("t1").value);
    if (!isNaN(num1)) {
        document.getElementById("t4").value = (num1 % 2 === 0) ? "Pair" : "Impair";
    } else {
        alert("Veuillez entrer un nombre entier dans le premier champ.");
    }
}

// Fonction pour permuter les valeurs des deux champs
function permute() {
    const t1 = document.getElementById("t1");
    const t2 = document.getElementById("t2");
    
    const temp = t1.value;
    t1.value = t2.value;
    t2.value = temp;
}
