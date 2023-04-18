// Crée un objet avec un nom, prenom et age
// une méthode 'sePresenter' qui présente l'utilisateur dans la console
// une méthode 'changerNom' qui prend un parametre 'nouveauNom' et remplace la propriété de l'objet associé


const person = {
    nom: "Vildesac",
    prenom: "Pierre",
    age: 25,
    sePresenter: function () {
        console.log(`Bonjour, je suis ${this.nom} ${this.prenom} et j'ai ${this.age} ans;`);
    },
    changerNom: function (newName) {
        this.nom = newName;
    }
}






// appelle la méthode 'sePresenter'

person.sePresenter();

// appelle la méthode 'changerNom'

person.changerNom("Smith");

// appelle la méthode 'sePresenter'

person.sePresenter();