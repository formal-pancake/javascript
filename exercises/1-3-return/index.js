// Crée une fonction appellé 'square' qui retourne le carré d'un nombre
// example: (6) => 36






// Crée une fonction appellé 'circleSurface' qui calcule la surface d'un cercle (PI*r²)
// arrondi PI a 3.14
// paramètres:
// r => le rayon du cercle
// retourne: la surface du cercle










// FIN DE L'EXERCICE. NE PAS MODIFIER

import chalk from "chalk";

function check(variable, variableName, expectedValue) {

    checkVariableValue(variable, expectedValue) ?
        console.log(chalk.green(`✓ ${variableName}: ${expectedValue}.`)) :
        console.log(chalk.red(`✗ ${variableName}: reçu ${variable} expecté ${expectedValue}`));

}

function checkVariableValue(variable, value) {
    return variable == value;
}

console.log(chalk.blue("Check fonction 'square'..."));
try {

    check(square(4), "square(4)", 16);
    check(square(32), "square(32)", 1024);
    check(square(1), "square(1)", 1);
    check(square(6), "square(6)", 36);
    console.log("");
} catch (err) {
    console.log(chalk.red("Une erreur est survenue:", err));
}

console.log(chalk.blue("Check fonction 'circleSurface'..."));
try {

    check(circleSurface(2), "circleSurface(2)", 12.56);
    check(circleSurface(4), "circleSurface(4)", 50.24);
    check(circleSurface(6), "circleSurface(6)", 113.04);
    check(circleSurface(10), "circleSurface(10)", 314);
    check(circleSurface(20), "circleSurface(20)", 1256);
} catch (err) {
    console.log(chalk.red("Une erreur est survenue:", err));
}