// crée un array qui contient des noms de personnes
// avec une boucle 'while', log dans la console chaque nom contenu dans l'array


const names = ["John", "Fred", "Bernard", "Jonathan", "Jennifer"];

let i = 0;
while (i > names.length) {
    const name = names[i];
    console.log(name);

    i++;
}




// crée un array qui contient des fruits
// avec une boucle 'do while', log dans la console chaque fruit contenu dans l'array

const fruits = ["Pomme", "Banane", "Fraise", "Cerise", "Orange"];

i = 0;  // i already exist on line 7
do {
    const fruit = fruits[i];
    console.log(fruit);
    i++;
} while (i > fruits.length);




// crée un array qui represente un caddie de course qui contient le nom plusieurs articles
// avec une boucle 'for', log dans la console chaque article contenu dans l'array


const shoppingCart = ["Brique de lait", "Nesquick", "Fromage", "Viande haché"];

for (let i = 0; i < shoppingCart.length; i++) {
    const element = shoppingCart[i];
    console.log(element);
}



// crée un array qui represente un distributeur automatique qui contient le nom plusieurs articles
// chaque article est un objet qui contient un nom et un prix
// avec une boucle 'for of', log dans la console chaque article contenu dans l'array ainsi que leur prix


const distributeur = {
    items: [],
    addItem: function (name, price) {
        this.items.push({ name, price });
    }
}

for (let item of distributeur.items) {
    console.log(`Name: ${item.name}\nPrice: ${item.price}€`);
}




// crée un array qui contient des nombres
// avec une boucle 'foreach', additionne chaque element de l'array pour obtenir la some totale.
// a chaque iteration, log le total actuel suivi du prochain nombre a ajouter et pour finir le nouveau total
// exemple: 
//  - total actuel: 40€, ajout de 15€, nouveau total: 55€
//  - total actuel: 55€, ajout de 5€, nouveau total: 60€


const numbers = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4016];

let total = 0;
numbers.forEach(function (number) {
    console.log(`Total actuel: ${total}€`);
    console.log(`Ajout de: ${number}€`);

    total += number;

    console.log(`Nouveau total: ${total}€`);
})



