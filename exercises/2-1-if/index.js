// Crée une fonction appellé `isEven` qui prend comme arguments une valeur.
// La fonction retourne vrai si le nombre et paire et faux si il est impaire















// Crée une fonction appellé 'findLargest' qui prend comme arguments deux paramètres.
// Paramètres: nombre1, nombre2
//
// Retourne vrai si le nombre1 est supérieur a nombre2
// retourne faux si nombre1 est inférieur ou égal a nombre2












// Crée une fonction appellé 'isEqual' qui prend comme arguments deux paramètres.
// Paramètres: nombre1, nombre2
//
// Retourne vrai si le nombre1 est équivalent/égal au nombre2
// retourne faux si le nombre1 n'est pas équivalent/égal au nombre2










// FIN DE L'EXERCICE. NE PAS MODIFIER

import chalk from "chalk";

function check(variable, variableName, expectedValue) {

    checkVariableValue(variable, expectedValue) ?
        console.log(chalk.green(`✓ ${variableName}: ${expectedValue}.`)) :
        console.log(chalk.red(`✗ ${variableName}: reçu ${variable} expecté ${expectedValue}`));

}

function checkVariableValue(variable, expectedValue) {
    return variable == expectedValue;
}

console.log(chalk.blue("Check fonction 'isEven'..."));
try {
    check(isEven(4), "isEven(4)", true);
    check(isEven(8), "isEven(8)", true);
    check(isEven(34), "isEven(34)", true);
    check(isEven(55), "isEven(55)", false);
    check(isEven(49), "isEven(49)", false);
} catch (err) {
    console.log(chalk.red("Une erreur est survenue:", err));
}


console.log("");
try {
    console.log(chalk.blue("Check fonction 'findLargest'..."));
    check(findLargest(4, 16), "findLargest(4, 16)", false);
    check(findLargest(20, 9), "findLargest(20, 9)", true);
    check(findLargest(40, 40), "findLargest(40, 40)", false);
    check(findLargest(8, 56), "findLargest(8, 56)", false);
    check(findLargest(100, 96), "findLargest(100, 96)", true);
    check(findLargest(18, 2), "findLargest(18, 2)", true);
    check(findLargest(2, 2), "findLargest(2, 2)", false);
} catch (err) {
    console.log(chalk.red("Une erreur est survenue:", err));
}

console.log("");
try {

    console.log(chalk.blue("Check fonction 'isEqual'..."));
    check(isEqual(16, 16), "isEqual(16, 16)", true);
    check(isEqual(20, 9), "isEqual(20, 9)", false);
    check(isEqual(40, 40), "isEqual(40, 40)", true);
    check(isEqual(8, 56), "isEqual(8, 56)", false);
    check(isEqual(100, 96), "isEqual(100, 96)", false);
    check(isEqual(18, 18), "isEqual(18, 18)", true);
    check(isEqual(2, 2), "isEqual(2, 2)", true);
} catch (err) {
    console.log(chalk.red("Une erreur est survenue:", err));
}