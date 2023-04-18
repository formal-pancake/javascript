// Crée une fonction appellé 'add' qui prend deux paramètres:
// a => le premier terme
// b => le second terme
// et écrit dans la console l'addition suivit du resultat
// example: a = 12, b = 10 ==> "12+10=22"







// Dans le même style, Crée une fonction appellé 'substract'










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

console.log(chalk.blue("Check fonction 'add'..."));
try {

    check(add(4, 16), "add(4, 16)", 20);
    check(add(3, 9), "add(3, 9)", 12);
    check(add(8, 56), "add(8, 56)", 64);
    check(add(18, 96), "add(18, 96)", 114);
    console.log("");
} catch (err) {
    console.log(chalk.red("Une erreur est survenue:", err));
}

console.log(chalk.blue("Check fonction 'substract'..."));
try {

    check(substract(4, 16), "substract(4, 16)", -12);
    check(substract(3, 9), "substract(3, 9)", -6);
    check(substract(8, 56), "substract(8, 56)", -48);
    check(substract(18, 96), "substract(18, 96)", -78);
    console.log("");
} catch (err) {
    console.log(chalk.red("Une erreur est survenue:", err));
}