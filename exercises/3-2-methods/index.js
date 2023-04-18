// Crée un objet avec un nom, prenom et age
// ainsi qu'une méthode 'sePresenter' qui presente l'utilisateur dans la console.

const person = {
    nom: "Dubuisson",
    prenom: "Porcelet",
    age: 29,
    sePresenter: function () {
        console.log(`Bonjour, je suis ${this.nom} ${this.prenom} et j'ai ${this.age} ans;`);
    }

}



// log toutes les propriétés

console.log(person.nom);
console.log(person.prenom);
console.log(person.age);




// execute la méthode 'sePresenter' de l'objet


person.sePresenter();


