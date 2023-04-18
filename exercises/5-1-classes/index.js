// Créez une classe appelée "Person" avec des propriétés pour "name", "age" et "gender".
// Ajoutez une méthode à la classe "Person" appelée "greet", qui log un salut dans la console.
// Créez une instance de cette classe et log ses propriétés dans la console.
// Appelez la méthode "greet".

class Person {
    name;
    age;
    gender;

    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    greet() {
        console.log(`Bonjour, je suis ${this.name}`);
    }
}

const john = new Person("John", 16, "male");

console.log("Propriétés de John:");
for (let property in john) {
    console.log(`Propriété: ${property}, valeur: ${john[property]}`);
}



john.greet();






// Créez une classe appelée "Car" avec des propriétés pour "make", "model" et "year".
// Ajoutez une méthode à la classe appelée "start", qui log un message dans la console indiquant que la voiture a démarré.
// Créez une instance de la classe et appelez la méthode "start".


class Car {
    make;
    model;
    year;

    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log("La voiture a démarer");
    }
}

const voiture = new Car("Volvo", "2b", 2014);
voiture.start();




// Créez une sous-classe de la classe "Car" appelée "ElectricCar" avec une propriété supplémentaire pour "batteryLevel".
// Ajoutez une méthode à la classe appelée "charge", qui log un message dans la console indiquant que la voiture est en train de charger.
// Créez une instance de la classe et appelez la méthode "charge".


class ElectricCar extends Car {
    batteryLevel;

    constructor(make, model, year, batteryLevel = 100) {
        super(make, model, year);
        this.batteryLevel = batteryLevel;
    }

    charge() {
        console.log("La voiture est en train de charger");
    }
}

const voitureElectrique = new ElectricCar("tesla", "42j", 2018, 75);
voitureElectrique.charge();



// Créez une classe appelée "Rectangle" avec des propriétés pour "width" et "height".
// Ajoutez une méthode à la classe appelée "calculateArea", qui renvoie la surface du rectangle.
// Créez une instance de la classe et log la surface dans la console.

class Rectangle {
    width;
    height;

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height
    }
}


const rectangle = new Rectangle(40, 80);
console.log(rectangle.calculateArea());




// Créez une sous-classe de la classe "Rectangle" appelée "Square" avec une propriété supplémentaire pour "sideLength".
// Remplacez la méthode "calculateArea" pour renvoyer la surface du carré au lieu du rectangle.
// Créez une instance de la classe et log la surface dans la console.


class Square extends Rectangle {
    sidelength;

    constructor(sidelength) {
        super(sidelength, sidelength);
        this.sidelength = sidelength;
    }
}

const carre = new Square(10);
console.log(carre.calculateArea());



// Créez une classe appelée "BankAccount" avec des propriétés pour "balance" et "user". (créez une classe "User" à utiliser dans la propriété "user")
// Ajoutez des méthodes à la classe appelées "deposit" et "withdraw", qui mettent à jour la propriété "balance" en conséquence.
// Créez une instance de la classe et appelez les méthodes "deposit" et "withdraw" avec des montants arbitraires.

class User {
    nom;
    surname;
    age;
    address;
    id;

    constructor() {
        this.id = Math.random();
    }

    setName(name) {
        this.name = name;
        return this;
    }

    setSurname(surname) {
        this.surname = surname;
        return this
    }

    setAddress(address) {
        this.address = address;
        return this
    }

    setAge(age) {
        this.age = age;
        return this
    }
}

class BankAccount {
    user;
    balance;

    constructor(user, balance = 5000) {
        this.user = user;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }
}

const user = new User()
    .setName("John")
    .setSurname("Smith")
    .setAddress("Rue du boudin")
    .setAge(24);

const bankAccount = new BankAccount(user);

bankAccount.withdraw(400);
bankAccount.deposit(123);

console.log("Balance: " + bankAccount.balance + "\n");



// Créez une sous-classe de la classe "BankAccount" appelée "SavingsAccount" avec une propriété supplémentaire pour "minimumBalance".
// Remplacez la méthode "withdraw" pour empêcher le solde de tomber en dessous du solde minimum.
// Créez une instance de la classe et appelez la méthode "withdraw" avec un montant qui ferait tomber le solde en dessous du solde minimum,
// puis log le solde actuel dans la console.


class SavingsAccount extends BankAccount {
    minimumBalance;

    constructor(user, balance = 5000, minimumBalance = 0) {
        super(user, balance);
        this.minimumBalance = minimumBalance;
    }

    withdraw(amount) {
        if (this.balance - amount >= this.minimumBalance) {
            this.balance -= amount;
        } else {
            console.log("Fonds insuffisants");
        }
    }
}

const savingAccount = new SavingsAccount(user, 4000);
console.log("Balance actuel: " + savingAccount.balance);
savingAccount.deposit(403);
console.log("Depos de 403: " + savingAccount.balance);
savingAccount.withdraw(6000);
console.log("Balance actuel: " + savingAccount.balance);