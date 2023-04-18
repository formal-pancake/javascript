// crée une fonction appelé 'getDayString' qui prend en paramètre un nombre
// converti le nombre representant le jour de la semaine (0 à 6)
// utilise un switch
// exemple: 
//      entrée: 1
//      sortie: "mardi"
//
// exemple2: 
//      entrée: 7
//      sortie: "lundi"



function getDayString(dayNumber) {
    switch (dayNumber % 7) {
        case 0:
            return "lundi"

        case 1:
            return "mardi"

        case 2:
            return "mercredi"

        case 3:
            return "jeudi"

        case 4:
            return "vendredi"

        case 5:
            return "samedi"

        case 6:
            return "dimanche"

        default:
            break;
    }
}

















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

console.log(chalk.blue("Check fonction 'getDayString'..."));
try {

    check(getDayString(0), "getDayString(0)", "lundi");
    check(getDayString(1), "getDayString(1)", "mardi");
    check(getDayString(2), "getDayString(2)", "mercredi");
    check(getDayString(3), "getDayString(3)", "jeudi");
    check(getDayString(4), "getDayString(4)", "vendredi");
    check(getDayString(5), "getDayString(5)", "samedi");
    check(getDayString(6), "getDayString(6)", "dimanche");
    check(getDayString(7), "getDayString(7)", "lundi");
    check(getDayString(8), "getDayString(8)", "mardi");
    check(getDayString(9), "getDayString(9)", "mercredi");

    console.log("");
} catch (err) {
    console.log(chalk.red("Une erreur est survenue:", err));
}