let cubeLargeur = 5;
let cubeHauteur = 11;


// Rajoute 5 a 'cubeLargeur'
cubeLargeur += 5;


// Rajoute 7 a 'cubeHauteur'
cubeHauteur += 7;



let cubeAire = cubeLargeur * cubeHauteur;


// Remplace 'undefined' par la largeur du cube multpiplier par 2;
let rectangleLargeur = cubeLargeur * 2;


// Remplace 'undefined' par la hauteur du cube plus 22;
let rectangleHauteur = cubeHauteur + 22;


// Remplace 'undefined' par le calcul de l'aire du rectangle.
let rectangleAire = rectangleHauteur * rectangleLargeur;



// Remplace 'undefined' par la hauteur du rectangle diviser par 2
let triangleBase = rectangleHauteur / 2;


// Rajoute 6 à 'triangleBase'
triangleBase += 6;


// Rajoute la valeur de 'cubeHauteur' à 'triangleBase'
triangleBase += cubeHauteur;


let triangleHauteur = 4;


// Rajoute la largeur du cube moins 4 à 'triangleHauteur
triangleHauteur += cubeLargeur - 4;


// Remplace 'undefined' par le calcul de l'aire du triangle : (B*H)/2
let triangleAire = (triangleBase * triangleHauteur) / 2;

















/* FIN DE L'EXERCICE: NE PAS MODIFIER EN DESSOUS DE CETTE LIGNE */

import chalk from "chalk";

function check(variable, variableName, expectedValue) {

    checkVariableValue(variable, expectedValue) ?
        console.log(chalk.green(`✓ ${variableName}: ${expectedValue}`)) :
        console.log(chalk.red(`✗ ${variableName}: reçu ${variable} expecté ${expectedValue}`));

}

function checkVariableValue(variable, value) {
    return variable == value;
}

check(cubeLargeur, "cubeLargeur", 10);
check(cubeHauteur, "cubeHauteur", 18);
check(cubeAire, "cubeAire", 180);
check(rectangleLargeur, "rectangleLargeur", 20);
check(rectangleHauteur, "rectangleHauteur", 40);
check(rectangleAire, "rectangleAire", 800);
check(triangleBase, "triangleBase", 44);
check(triangleHauteur, "triangleHauteur", 10);
check(triangleAire, "triangleAire", 220);



