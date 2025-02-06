
// Sélection des éléments DOM
const exerciseButtons = document.getElementById("exerciseButtons");
const exerciseDetail = document.getElementById("exerciseDetail");
const exerciseTitle = document.getElementById("exerciseTitle");
const exerciseDescription = document.getElementById("exerciseDescription");
const userInput = document.getElementById("userInput");
const demoOutput = document.getElementById("demoOutput");
const solutionCode = document.getElementById("solutionCode");
const showSolutionButton = document.getElementById("showSolution");
const runDemoButton = document.getElementById("runDemo");

// Liste des exercices
const exercises = [
    { title: "Addition de deux nombres", description: "Créer une fonction qui retourne la somme de deux nombres.", solution: `function add(a, b) {\n    return a + b;\n}`, demo: (input) => { const [a, b] = input.split(',').map(Number); return `Résultat : ${a + b}`; }},
    { title: "Carré d’un nombre", description: "Créer une fonction qui retourne le carré d’un nombre.", solution: `function square(num) {\n    return num * num;\n}`, demo: (input) => `Résultat : ${Number(input) ** 2}` },
    { title: "Nombre pair ou impair", description: "Créer une fonction qui vérifie si un nombre est pair ou impair.", solution: `function isEven(num) {\n    return num % 2 === 0 ? 'Pair' : 'Impair';\n}`, demo: (input) => `Résultat : ${Number(input) % 2 === 0 ? 'Pair' : 'Impair'}` },
    { title: "Factorielle d'un nombre", description: "Créer une fonction qui retourne la factorielle d’un nombre.", solution: `function factorial(n) {\n    return n === 0 ? 1 : n * factorial(n - 1);\n}`, demo: (input) => { let num = Number(input), fact = 1; for (let i = 1; i <= num; i++) fact *= i; return `Résultat : ${fact}`; }},
    { title: "Inverser une chaîne", description: "Créer une fonction qui inverse une chaîne de caractères.", solution: `function reverseString(str) {\n    return str.split('').reverse().join('');\n}`, demo: (input) => `Résultat : ${input.split('').reverse().join('')}` },
    { title: "Trouver le maximum de deux nombres", description: "Créer une fonction qui retourne le plus grand de deux nombres.", solution: `function max(a, b) {\n    return a > b ? a : b;\n}`, demo: (input) => { const [a, b] = input.split(',').map(Number); return `Résultat : ${Math.max(a, b)}`; }},
    { title: "Somme d’un tableau", description: "Créer une fonction qui retourne la somme des éléments d’un tableau.", solution: `function sumArray(arr) {\n    return arr.reduce((acc, num) => acc + num, 0);\n}`, demo: (input) => `Résultat : ${input.split(',').map(Number).reduce((acc, num) => acc + num, 0)}` },
    { title: "Nombre premier", description: "Créer une fonction qui vérifie si un nombre est premier.", solution: `function isPrime(n) {\n    if (n < 2) return false;\n    for (let i = 2; i < n; i++) {\n        if (n % i === 0) return false;\n    }\n    return true;\n}`, demo: (input) => { const num = Number(input); if (num < 2) return "Résultat : Non premier"; for (let i = 2; i < num; i++) if (num % i === 0) return "Résultat : Non premier"; return "Résultat : Premier"; }},
    { title: "Compter les voyelles", description: "Créer une fonction qui compte le nombre de voyelles dans une chaîne.", solution: `function countVowels(str) {\n    return (str.match(/[aeiouy]/gi) || []).length;\n}`, demo: (input) => `Résultat : ${(input.match(/[aeiouy]/gi) || []).length}` },
    { title: "Trouver le plus grand nombre d’un tableau", description: "Créer une fonction qui retourne le plus grand élément d’un tableau.", solution: `function maxInArray(arr) {\n    return Math.max(...arr);\n}`, demo: (input) => `Résultat : ${Math.max(...input.split(',').map(Number))}` },
    { title: "Vérifier un palindrome", description: "Créer une fonction qui vérifie si un mot est un palindrome.", solution: `function isPalindrome(str) {\n    return str === str.split('').reverse().join('');\n}`, demo: (input) => `Résultat : ${input === input.split('').reverse().join('') ? 'Oui' : 'Non'}` },
    { title: "Table de multiplication", description: "Créer une fonction qui affiche la table de multiplication d’un nombre.", solution: `function multiplicationTable(n) {\n    let table = '';\n    for (let i = 1; i <= 10; i++) {\n        table += n + ' x ' + i + ' = ' + (n * i) + '\\n';\n    }\n    return table;\n}`, demo: (input) => { let num = Number(input), table = ""; for (let i = 1; i <= 10; i++) table += `${num} x ${i} = ${num * i}\n`; return `Résultat : \n${table}`; }},
    { title: "Remplacer les espaces par des tirets", description: "Créer une fonction qui remplace tous les espaces dans une phrase par des tirets.", solution: `function replaceSpaces(str) {\n    return str.replace(/ /g, '-');\n}`, demo: (input) => `Résultat : ${input.replace(/ /g, '-')}` },
    { title: "Somme des chiffres d’un nombre", description: "Créer une fonction qui calcule la somme des chiffres d’un nombre.", solution: `function sumDigits(n) {\n    return n.toString().split('').reduce((acc, num) => acc + Number(num), 0);\n}`, demo: (input) => `Résultat : ${input.split('').reduce((acc, num) => acc + Number(num), 0)}` }
];

// Afficher tous les exercices sous forme de boutons
exercises.forEach((exercise, index) => {
    const button = document.createElement("button");
    button.textContent = exercise.title;
    button.classList.add("exercise-button");
    button.addEventListener("click", () => displayExercise(index));
    exerciseButtons.appendChild(button);
});

// Fonction d'affichage d'un exercice
function displayExercise(index) {
    const currentExercise = exercises[index];

    // Mettre à jour les éléments HTML avec les détails de l'exercice
    exerciseTitle.textContent = currentExercise.title;
    exerciseDescription.textContent = currentExercise.description;
    userInput.value = "";
    demoOutput.textContent = "Résultat affiché ici";
    solutionCode.textContent = "";
    solutionCode.style.display = "none";
    showSolutionButton.textContent = "Voir la solution";

    // Rendre visible la section des détails si elle était cachée
    exerciseDetail.style.display = "block";

    // Stocker l'index pour exécuter la solution plus tard
    showSolutionButton.dataset.index = index;
    runDemoButton.dataset.index = index;
}

runDemoButton.addEventListener("click", () => {
  const index = runDemoButton.dataset.index;
  if (index !== undefined) {
      try {
          const userResult = userInput.value.trim(); // Récupère la saisie de l'utilisateur
          const correctResult = exercises[index].demo(userInput.value).toString().trim(); // Calcule le résultat attendu

          // Comparaison exacte (sensible à la casse et aux espaces)
          if (userResult === correctResult) {
              demoOutput.textContent = "✅ GG passe à l'autre exo ! 🎉";
              demoOutput.style.color = "green";
          } else {
              demoOutput.textContent = `❌ Mauvaise réponse. Vous avez entré : ${userResult}, mais la réponse attendue était : ${correctResult}`;
              demoOutput.style.color = "red";
          }
      } catch (error) {
          demoOutput.textContent = "❌ Une erreur s'est produite. Vérifiez votre saisie.";
          demoOutput.style.color = "red";
      }
  }
});
// Afficher ou cacher la solution
showSolutionButton.addEventListener("click", () => {
    const index = showSolutionButton.dataset.index;
    if (index !== undefined) {
        if (solutionCode.style.display === "none") {
            solutionCode.style.display = "block";
            solutionCode.textContent = exercises[index].solution;
            showSolutionButton.textContent = "Cacher la solution";
        } else {
            solutionCode.style.display = "none";
            showSolutionButton.textContent = "Voir la solution";
        }
    }
});

// Masquer les détails au chargement
exerciseDetail.style.display = "none";
