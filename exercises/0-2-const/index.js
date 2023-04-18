// #######################################
// #                                     #
// #            Circle Calculator        #
// #                                     #
// #######################################

const PI = 3.14159;
let radius = 5;
let area;

// Calculate the area of a circle using the formula A = πr^2
area = PI * radius * radius;

// Print out the area of the circle
console.log("The area of the circle is: " + area);


radius = 7;

// Recalculate the area of the circle using the same formula
area = PI * radius * radius;

// Print out the new area of the circle
console.log("The new area of the circle is: " + area);


let num = 10;


// Print out the value of the num variable
console.log("The value of num is: " + num);


num = 15;

// Print out the new value of the num variable
console.log("The new value of num is: " + num);
















/* FIN DE L'EXERCICE: NE PAS MODIFIER EN DESSOUS DE CETTE LIGNE */



import chalk from "chalk";


function getVariableDeclarationType(variableName) {
    const stackTrace = new Error().stack;
    const pattern = new RegExp(`\\b(const|let)\\s+${variableName}\\b`);
    const match = stackTrace.match(pattern);

    if (match && match.length > 0) {
        return match[1]; // Returns "const" or "let"
    } else {
        return null; // Variable not found or not declared using "const" or "let"
    }
}

/**
 * 
 * @param {string} variableName 
 * @param {"const" | "let"} type 
 */
function check(variableName, type) {
    return getVariableDeclarationType(variableName) == type ?
        chalk.green(`✓ Variable ${variableName} est déclarer avec ${type}`) :
        chalk.red(`✗ Variable ${variableName} n'est pas déclarer avec le bon type`);
}

console.log();
console.log(check("PI", "const"));
console.log(check("radius", "let"));
console.log(check("area", "let"));
console.log(check("num", "let"));

