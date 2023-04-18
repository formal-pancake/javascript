let cubeLargeur = 5;
let cubeHauteur = 11;


// Rajoute 5 a 'cubeLargeur'



// Rajoute 7 a 'cubeHauteur'




let cubeAire = cubeLargeur * cubeHauteur;


// Remplace 'undefined' par la largeur du cube multpiplier par 2;
let rectangleLargeur = undefined;


// Remplace 'undefined' par la hauteur du cube plus 22;
let rectangleHauteur = undefined;


// Remplace 'undefined' par le calcul de l'aire du rectangle.
let rectangleAire = undefined;



// Remplace 'undefined' par la hauteur du rectangle diviser par 2
let triangleBase = undefined;


// Rajoute 6 à 'triangleBase'



// Rajoute la valeur de 'cubeHauteur' à 'triangleBase'



let triangleHauteur = 4;


// Rajoute la largeur du cube moins 4 à 'triangleHauteur



// Remplace 'undefined' par le calcul de l'aire du triangle : (B*H)/2
let triangleAire = undefined;

















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



