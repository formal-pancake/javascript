// Crée un objet qui contient un nom, prenom et age


const personne = {
    nom: "Fission",
    prenom: "Moussolet",
    age: 145
};





// Crée une fonction qui prend en paramètre un objet
// qui presente l'utilisateur dans la console. Exemple: "Bonjour, Je suis Jeremy Vildesac et j'ai 25 ans"


function sePresenter(personne) {
    console.log(`Bonjour, Je suis ${personne.prenom} ${personne.nom} et j'ai ${personne.age} ans.`);
}


sePresenter(personne);

