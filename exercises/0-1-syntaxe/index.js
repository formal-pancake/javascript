// Crée les variables suivantes:
// une appellé 'myName' qui contient ton nom
// une appellé 'mySurname' qui contient ton nom de famille
// une appellé 'myAge' qui contient ton age
// une appellé 'isRich' qui dit si oui ou non tu es un millionaire
// une appellé 'myCreditCard' qui contient le numéro de ta carte bancaire, la date d'expiration et les trois chiffres a l'arriere



























/* FIN DE L'EXERCICE: NE PAS MODIFIER EN DESSOUS DE CETTE LIGNE */


import chalk from "chalk";

try {
    console.log(chalk.green(`prenom: '${myName}'`));
    console.log(chalk.green(`nom: '${mySurname}'`));
    console.log(chalk.green(`age: ${myAge}`));
    console.log(chalk.green(`est riche?: ${isRich}`));
    console.log(chalk.red(`numéro carte crédit invalide :(`));
} catch (err) {
    console.log(chalk.red("Une erreur est survenue:", err));
}
