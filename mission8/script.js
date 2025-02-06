// script.js

// Liste des exercices
const exercises = [
    {
        title: "Addition de deux nombres",
        description: "Créer une fonction qui retourne la somme de deux nombres.",
        solution: `function add(a, b) {\n    return a + b;\n}`,
        demo: (input) => {
            const [a, b] = input.split(',').map(Number);
            return `Résultat : ${a + b}`;
        }
    },
    {
        title: "Carré d’un nombre",
        description: "Créer une fonction qui retourne le carré d’un nombre.",
        solution: `function square(num) {\n    return num * num;\n}`,
        demo: (input) => {
            const num = Number(input);
            return `Résultat : ${num * num}`;
        }
    },
    {
        title: "Vérification d’un nombre pair ou impair",
        description: "Créer une fonction qui vérifie si un nombre est pair ou impair.",
        solution: `function isEven(num) {\n    return num % 2 === 0 ? 'Pair' : 'Impair';\n}`,
        demo: (input) => {
            const num = Number(input);
            return `Résultat : ${num % 2 === 0 ? 'Pair' : 'Impair'}`;
        }
    },
    {
        title: "Variables et opérateurs",
        description: "Créer une fonction qui effectue une opération mathématique sur deux nombres (addition, soustraction, multiplication, division).",
        solution: `function operate(a, b, operator) {\n    switch(operator) {\n        case '+': return a + b;\n        case '-': return a - b;\n        case '*': return a * b;\n        case '/': return b !== 0 ? a / b : 'Division par zéro impossible';\n        default: return 'Opérateur invalide';\n    }\n}`,
        demo: (input) => {
            const [a, b, op] = input.split(','); 
            return `Résultat : ${eval(a + op + b)}`; 
        }
    },
    {
        title: "Vérifier si un nombre est positif",
        description: "Créer une fonction qui vérifie si un nombre est positif, négatif ou nul.",
        solution: `function checkSign(num) {\n    return num > 0 ? 'Positif' : num < 0 ? 'Négatif' : 'Nul';\n}`,
        demo: (input) => {
            const num = Number(input);
            return `Résultat : ${num > 0 ? 'Positif' : num < 0 ? 'Négatif' : 'Nul'}`;
        }
    },
    {
        title: "Convertir des minutes en secondes",
        description: "Créer une fonction qui convertit un nombre de minutes en secondes.",
        solution: `function minutesToSeconds(minutes) {\n    return minutes * 60;\n}`,
        demo: (input) => {
            const minutes = Number(input);
            return `Résultat : ${minutes * 60} secondes`;
        }
    },
    {
        title: "Générer un tableau de 1 à n",
        description: "Créer une fonction qui génère un tableau contenant les nombres de 1 à n.",
        solution: `function generateArray(n) {\n    return Array.from({length: n}, (_, i) => i + 1);\n}`,
        demo: (input) => {
            const n = Number(input);
            return `Résultat : [${Array.from({ length: n }, (_, i) => i + 1).join(', ')}]`;
        }
    },
    {
        title: "Vérifier si un tableau contient un élément",
        description: "Créer une fonction qui vérifie si un tableau contient un élément donné.",
        solution: `function arrayContains(arr, value) {\n    return arr.includes(value);\n}`,
        demo: (input) => {
            const [values, search] = input.split(';');
            const array = values.split(',').map(Number);
            const contains = array.includes(Number(search));
            return `Résultat : ${contains ? 'Présent' : 'Absent'}`;
        }
    },
    {
        title: "Inverser une chaîne de caractères",
        description: "Créer une fonction qui inverse une chaîne de caractères.",
        solution: `function reverseString(str) {\n    return str.split('').reverse().join('');\n}`,
        demo: (input) => {
            return `Résultat : ${input.split('').reverse().join('')}`;
        }
    },
    {
        title: "Trouver le plus grand nombre dans un tableau",
        description: "Créer une fonction qui retourne le plus grand nombre d’un tableau.",
        solution: `function maxNumber(arr) {\n    return Math.max(...arr);\n}`,
        demo: (input) => {
            const numbers = input.split(',').map(Number);
            return `Résultat : ${Math.max(...numbers)}`;
        }
    },
    {
        title: "Compter le nombre de voyelles dans une chaîne",
        description: "Créer une fonction qui compte les voyelles dans une chaîne.",
        solution: `function countVowels(str) {\n    return (str.match(/[aeiouyAEIOUY]/g) || []).length;\n}`,
        demo: (input) => {
            return `Résultat : ${(input.match(/[aeiouyAEIOUY]/g) || []).length}`;
        }
    },
    {
        title: "Vérifier si un mot est un palindrome",
        description: "Créer une fonction qui vérifie si un mot est un palindrome.",
        solution: `function isPalindrome(str) {\n    return str === str.split('').reverse().join('');\n}`,
        demo: (input) => {
            let reversed = input.split('').reverse().join('');
            return `Résultat : ${input === reversed ? "C'est un palindrome" : "Ce n'est pas un palindrome"}`;
        }
    },
    {
        title: "Générer un nombre aléatoire entre 1 et 100",
        description: "Créer une fonction qui génère un nombre aléatoire entre 1 et 100.",
        solution: `function randomNumber() {\n    return Math.floor(Math.random() * 100) + 1;\n}`,
        demo: () => {
            return `Résultat : ${Math.floor(Math.random() * 100) + 1}`;
        }
    },
    {
        title: "Fusionner deux tableaux et les trier",
        description: "Créer une fonction qui fusionne deux tableaux et les trie.",
        solution: `function mergeAndSort(arr1, arr2) {\n    return [...arr1, ...arr2].sort((a, b) => a - b);\n}`,
        demo: (input) => {
            const [arr1, arr2] = input.split(';').map(str => str.split(',').map(Number));
            return `Résultat : [${[...arr1, ...arr2].sort((a, b) => a - b).join(', ')}]`;
        }
    },
    {
        title: "Vérifier si une année est bissextile",
        description: "Créer une fonction qui vérifie si une année est bissextile.",
        solution: `function isLeapYear(year) {\n    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);\n}`,
        demo: (input) => {
            const year = Number(input);
            const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
            return `Résultat : ${isLeap ? "C'est une année bissextile" : "Ce n'est pas une année bissextile"}`;
        }
    }
    
];

const exerciseList = document.getElementById("exerciseList");
const exerciseTitle = document.getElementById("exerciseTitle");
const exerciseDescription = document.getElementById("exerciseDescription");
const userInput = document.getElementById("userInput");
const demoOutput = document.getElementById("demoOutput");
const solutionCode = document.getElementById("solutionCode");
const showSolutionButton = document.getElementById("showSolution");
const runDemoButton = document.getElementById("runDemo");

// Afficher la liste des exercices
exercises.forEach((exercise, index) => {
    const li = document.createElement("li");
    li.textContent = exercise.title;
    li.addEventListener("click", () => displayExercise(index));
    exerciseList.appendChild(li);
});

// Afficher les détails d'un exercice
function displayExercise(index) {
    const exercise = exercises[index];
    exerciseTitle.textContent = exercise.title;
    exerciseDescription.textContent = exercise.description;
    userInput.value = "";
    demoOutput.textContent = "Résultat affiché ici";
    solutionCode.textContent = exercise.solution;
    solutionCode.style.display = "none";
}

// Exécuter la démo
runDemoButton.addEventListener("click", () => {
    const activeExercise = exercises.find(
        (exercise) => exerciseTitle.textContent === exercise.title
    );
    if (activeExercise) {
        demoOutput.textContent = activeExercise.demo(userInput.value);
    }
});

// Afficher la solution avec un effet de transition
showSolutionButton.addEventListener("click", () => {
    if (solutionCode.style.display === "none") {
        solutionCode.style.display = "block";
        solutionCode.style.animation = "fadeIn 0.5s ease-in-out";
    } else {
        solutionCode.style.display = "none";
    }
});