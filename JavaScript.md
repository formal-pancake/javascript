# Les Variables


 
Les variables sont utilisées pour stocker des informations qui peuvent être référencées et manipulées dans un programme informatique. Elles fournissent également un moyen d'étiqueter les données avec un nom descriptif, de sorte que nos programmes puissent être compris plus clairement par le lecteur et nous-mêmes.

Il est utile de penser aux variables comme des conteneurs qui contiennent des informations. Leur seul but est d'étiqueter et de stocker des données en mémoire. Ces données peuvent ensuite être utilisées tout au long de votre programme.

### Déclarer des variables

Pour déclarer une variable, utilisez le mot clé **`let`**, suivi d'un nom, généralement en camel case (par exemple: myVariable).
```javascript
let myVariable;          // JavaScript crée une variable appelée myVariable qui ne contient aucune valeur
```
### Assigner une valeur à une variable

Avoir une variable est bien, mais quel est l'intérêt si elle ne contient aucune valeur ?

Pour assigner une valeur à une variable, il suffit d'écrire le nom de la variable suivi d'un signe égal (=) et enfin de la valeur que vous souhaitez lui attribuer.
```javascript
let myAge;                  // Déclare une variable nommée 'myAge'
myAge = 17;                 // Attribue la valeur 17 à la variable

let myName = "John";        // Déclare une variable nommée 'myName' et assigne la valeur "John"
```
> *Notez que vous pouvez déclarer une variable sans lui attribuer de valeur. Par défaut, une variable sans valeur est égale à **`undefined`**.*
### Les Variables Constante
Les variables `const` sont similaires aux variables `let`, à l'exception qu'elles ne peuvent pas être modifiées. Elles sont déclarées de la même manière que les variables let, mais elles doivent impérativement être attribuées une valeur (Puisque vous ne pouvez pas modifier la valeur, une fois déclarée, il est obliger de lui attribuer une valeur).
```javascript
const superSecretPassword = "password123";  // tout va bien

superSecretPassword = "newpassword";        // ! Cela générera une erreur !

const newPassword;                          // ! Une variable const ne peut pas être déclarée sans être assignée une valeur !
```
### Les Types de Valeurs



Lorsqu'une variable est créée, son type est déduit à partir de la valeur qui lui est attribuée.

Voici les différents types de valeurs :

| Type    	                        | Valeur                 	| Exemple       	    |
|---------	                        |-----------------------	|---------------	    |
| Boolean (Booléen)	                | `True` ou `False`         | `True`          	    |
| Number (Nombre) 	                | N'importe quel nombre     | `-56.2`         	    |
| String (Chaîne de caractères)  	| Une chaîne de caractères 	| `"Bonjour le monde"` 	|

> Note : une valeur de chaîne de caractères sera toujours entre guillemets simples/doubles.
```javascript
let myName = "John";        // String
let myAge = 17;             // Number
let isMajor = false;        // Boolean
```
### Utiliser les variables


Très bien ! Maintenant vous savez comment créer des variables et comment leur attribuer une valeur. Mais que peut-on faire avec elles ?

Tout d'abord, essayons de modifier la valeur d'une variable.
```javascript
let myName = "John";
let myAge = 17;         
let isMajor = false; 

myName = "Johnathan";
myAge = myAge + 6;
isMajor = true;
```
Beaucoup de choses se passent ; la variable 'myName' reçoit une nouvelle valeur, quelque chose d'étrange se produit avec la valeur 'myAge' et 'isMajor' se voit également attribuer une nouvelle valeur.

Concentrons-nous sur la variable 'myAge' :
```javascript
let myAge = 17;

myAge = myAge + 6
```
La variable est déclarée et se voit attribuer la valeur `17`.
Ensuite, nous attribuons à la variable la valeur `myAge + 6`.

Dans ce cas, l'ordinateur comprendra cela de la manière suivante :
```javascript
let myAge = 17;

myAge = 17 + 6;  // myAge = myAge + 6 
```
Comme vous pouvez le voir, `myAge` est remplacé par sa propre valeur et `6` lui est ajouté. Et finalement, la valeur obtenue est assignée à myAge.

Cela se produit parce que le symbole égal ( = ) ne signifie pas "égal" mais plutôt "attribuer à".

En mathématiques, il n'est pas possible qu'une valeur soit égale à elle-même plus 6. Mais en programmation, puisque le symbole signifie **attribuer** plutôt que **être égal à**, nous attribuons la valeur de `myAge + 6` à `myAge`.

=> Cela revient à simplement ajouter +6 à la valeur de myAge.

Voici une façon plus simple d'incrémenter une variable :
```javascript
let myAge = 17;

myAge += 6;      // equivalent of doing: myAge = myAge + 6
```
`myAge` est égal à `23` 
### Les opérateurs


| Operator  | Description                   | Example           |
|---------	|-----------------------        |---------------    |
| +         | Addition                      | `4 + 8` => 12     |
| -         | Soustraction                  | `4 - 3` => 1      |
| * 	    | Multpiplication 	  	        | `4*2` => 8        |
| / 	    | Division 	         	        | `4/2` => 2        |
| += 	    | Addition et assignation 	    | `let x = 10;` <br> `x += 5` <br> x est égal a 15  |
| -= 	    | Soustraction et assignation   | `let x = 10;` <br> `x -= 5` <br> x est égal a 5   |
| *= 	    | Multiplication et assignation | `let x = 10;` <br> `x *= 5` <br> x est égal a 50  |
| /= 	    | Division et assignation       | `let x = 10;` <br> `x /= 5` <br> x est égal a 2   |
| ++        | Incrementation                | `let x = 10;` <br> `x++;`   <br> x est égal a 11  |
| --        | Decrementation                | `let x = 10;` <br> `x--;`   <br> x est égal a 9   |

# Les Fonctions
Une fonction est simplement un "morceau" de code que vous pouvez utiliser, plutôt que de l'écrire plusieurs fois. Les fonctions permettent aux programmeurs de décomposer un problème en morceaux plus petits, chacun effectuant une tâche particulière.

### Créer une fonction
Pour créer une fonction, utilisez le mot-clé `function` suivi d'un nom (en camelCase) avec des parenthèses à la fin, et enfin un bloc de code (représenté par des accolades: { } ).
```javascript
function myFunction() { 
    
}
```
Pour utiliser une fonction, écrivez le nom de la fonction suivi de parenthèses.
```javascript
function myFunction() {

}

myFunction();
```
Ici, l'ordinateur crée une fonction, puis l'exécute. Mais lorsque vous exécutez ce code, rien ne se passe, alors essayons d'ajouter une fonctionnalité!
```javascript
function meow() {
    console.log("meow");
}

meow();
```
Si vous exécutez le code ci-dessus, "meow" sera imprimé sur la console à chaque fois que la fonction meow est appelée.

Mais concentrons-nous sur la deuxième ligne.
```javascript
console.log("meow");
```
C'est quoi exactement ce qui se passe ici ?

`console` est ce qu'on appelle un **objet** (nous parlerons d'objets plus tard) et `log()` est une **méthode** de cet objet.

Les **méthodes** sont simplement des **fonctions** contenues dans un objet.

Imaginez un objet comme une grosse boîte qui contient des `variables` et des `fonctions`, pour accéder au contenu d'un objet, il suffit d'écrire le nom de cet objet suivi d'un point (.) et de la fonction souhaitée.

Dans l'exemple ci-dessus, nous appelons la méthode `log()` de l'objet `console` et nous donnons `"meow"` comme **paramètre**.

Lorsqu'il est exécuté, "meow" sera affiché dans la console.
### Les Paramètres
#### Donner des paramètres
Pour donner un paramètre a une fonction, écriver le nom d'une variable ou, dans ce cas ci, une valeur.
```javascript
console.log("meow");
```
Nous donnons ici les données `"meow"` de type `string` (voir [Types de valeurs](#les-types-de-valeurs)) à la fonction `log()`.

Essayons de donner des variables à la place.
```javascript
let myName = "John";

console.log(myName);
```
Ceci affichera `"John"` dans la console. Mais que faire si nous voulions dire `"Bonjour John"` plutôt que de simplement mentionner le nom de la personne ?

Pour ce faire, nous pourrions donner `"Bonjour " + myName` en tant que paramètre pour la fonction.
```javascript
let myName = "John";

console.log("Bonjour " + myName);
```
Remarqué l'espace a la fin de "Bonjour", sans celui ci, la console aurait écrit "BonjourJohn" au lieu de "Bonjour John"
Parfait ! Maintenant, essayons de ~~doxxer~~ tout dire sur John. 
```javascript
let myName = "John"
let myAge = 17;
let address = "***REMOVED***";     // Oui, John habbite au McDo de ***REMOVED*** 

console.log("Bonjour, je m'appelle " + myName + ", J'ai " + myAge + " ans et j'habite à " + address);
```
Cela fonctionne, mais c'est très fastidieux à écrire.

Une autre façon d'obtenir le même résultat est d'utiliser **l'interpolation de chaîne** (String Interpolation en anglais).
```javascript
let myName = "John";
let myAge = 17;
let address = "***REMOVED***";

console.log(`Bonjour, je m'appelle ${myName}, J'ai ${myAge} ans et j'habite à ${livesIn}`);
```
Maintenant c'est plus facile à lire !

Pour utiliser **l'interpolation de chaîne** (string interpolation), nous utilisons des backticks (`\`) au lieu de simples ou doubles guillemets ('' ou ""). Et `${}` lors de la définition d'une variable.
```javascript
let myName = "John";

let myGreeting = "Bonjour tout le monde! Je m'appelle " + myName

let interpolatedString = `Bonjour tout le monde! Je m'appelle ${myName}`;
```
#### Ajouter des paramètres a une fonction
Lorsque vous créez une fonction, vous pouvez définir des paramètres qui serviront de placeholders (ou "marqueurs de position") pour les valeurs qui seront passées dans la fonction. Cela vous permet de réutiliser la même fonction avec différentes valeurs.

Les fonctions vous permettent de réutiliser une partie de votre code sans avoir à l'écrire à nouveau.

Disons que nous avons un magasin et que chaque fois que quelqu'un entre, nous devons lui dire bonjour et ajouter 1 au nombre total de visiteurs. Cela serait l'équivalent du code suivant :

Si nous avons seulement quelques personnes chaque jour, cela peut être gérable, mais que se passe-t-il si des centaines de personnes entrent chaque jour ?
```javascript
let totalVisitors = 0;

// Person enters the shop
console.log("Hello! Welcome to our shop");
totalVisitors+=1;

// Person enters the shop
console.log("Hello! Welcome to our shop");
totalVisitors += 1;

// Person enters the shop
console.log("Hello! Welcome to our shop");
totalVisitors += 1;

// Person enters the shop
console.log("Hello! Welcome to our shop");
totalVisitors += 1;

```
Voici une solution à ce problème : les fonctions !
```javascript
function greetPerson() {
    totalVisitors += 1;
    console.log("Hello! Welcome to our shop");
}

let totalVisitors = 0;

// Person enters the shop
greetPerson();

// Person enters the shop
greetPerson();

```
C'est génial, mais que faire si nous voulions également dire le nom du client ? C'est là que les paramètres sont utiles.
```javascript
function greetPerson(name) {
    console.log(`Hello ${name}! Welcome to our shop`);
}

let person1 = "Jack";
let person2 = "Bob";
let person3 = "Alexander";

greetPerson(person1);
greetPerson(person2);
greetPerson(person3);


```
Pour ajouter un paramètre, il suffit d'ajouter un nom entre les parenthèses de la fonction. Ceci deviendra une variable qui contient les données de ce qui a été donné.
```javascript
function greetPerson(name) {
    console.log(`Hello ${name}! Welcome to our shop`);
}

greetPerson("John");
```
Comme vous pouvez le voir, cela n'a pas besoin d'être un nom pour être utilisé. Cela peut même être un nombre.
```javascript
function greetPerson(name) {
    console.log(`Hello ${name}! Welcome to our shop`);
}

greetPerson(24);
```
# Objets, Propriétés et Méthodes
Les objets sont un groupement de variables et de fonctions.

Dans la vrai vie (pas la fausse), une voiture est un objet.

Une voiture a des propriétés et des méthodes:

| Propriétés                | Méthodes       	        |
|-----------------------	|---------------	        |
| voiture.nom = Fiat        | voiture.démarer()         |
| voiture.model = 500       | voiture.rouler()        	|
| voiture.poids = 850kg     | voiture.freiner()         |
| voiture.couleur = blanc   | voiture.eteindre()        |

Toutes les voiture auront les meme propriété **mais** avec des **valeurs** différentes

## Propriété
Pour créer un objet avec des propriétés (variables), dans des accolades, ajouter les propriété suivi de leurs valeurs

> Un objet est un type de valeur donc n'oublier pas de le stocker dans une variable!
```javascript
const voiture = {
    nom: "Fiat",
    model: "500",
    poids: "850Kg",
    couleur: "blanc"
};

console.log(voiture);
```
Les valeurs sont noté en pair de `nom:valeur` (nom et valeur séparer par un double point)
## Méthodes
Pour créer un objet avec des méthodes (fonction), dans des accolades, ajouter les nom de méthode suivi de leurs fonction

```javascript
const personne = {
    nom: "Pierre",
    prenom: "Vildesac",
    taille: 170,
    poids: 85,
    sePresenter: function() {
        console.log(`Bonjour! Je suis ${this.nom} ${this.prenom}, je fait ${this.taille}cm et je pèse ${this.poids}kg.`); 
    }
};

personne.sePresenter();
```
# Conditions
## Opérateurs
| Opérateur | Descriptions              | Exemple       	        |
|---------	|-----------------------	|---------------	        |
| <	        | est inférieur à           | `5 < 10`                  |
| >         | est supérieur à         	| `10 > 1`         	        |
| <=  	    | est inférieur ou égal à   | `4 <= 10` <br> `4 <= 4`   |
| >=  	    | est supérieur ou égal à   | `4 >= 2` <br> `4 >= 4`    |
| ==        | est égal à                | `"john" == "john"`        |
| !=        | est different de          | `"john" != "pierre"`      |
> Tout les examples équivale la valeur `true`
## L'instruction "if"
Les blocs `if` sont des blocs de code qui seront executer uniquement si une `condition` l'accorde.
### Syntaxe
#### Bloc If
Pour définir une instruction `if`; nottez `if`, suivi de parenthese qui contienent une **expression booléenne** et enfin, un bloc de code
```javascript
if (condition) {
    //  Bloc de code à exécuter si la condition est vraie (true).
} 
```
#### Expression booléenne
Une expression booléenne est une expression qui donne une valeur booléenne. Par exemple, la valeur pour 5 > 3 est vrai et la valeur pour 5 < 4 est faux.
```javascript
console.log("5 > 3 : " + (5 > 3));      // => true
console.log("5 < 4 : " + (5 < 4));      // => false
console.log("10 == 10: " + (10 == 10)); // => true
console.log("5 != 10: " + (5 != 10));   // => true

```
### Example

Nous voulons accetper l'acces a un bar si l'utilisateur est majeur.
```javascript
let age = 17;

if (age >= 18) {
    console.log("Bienvenue au bar!");
}
```
## L'instruction "else"
Les blocs else sont des blocs de code qui seront executer uniquement si un bloc if n'a pas été executé
## Syntaxe
```javascript
if (condition) {
    //  Bloc de code à exécuter si la condition est vraie (true).
} else {
    // Block de code à exècuter si la condition if est fausse (false).
}
```
## Example

Nous voulons accetper l'acces a un bar si l'utilisateur est majeur. Et lui dire de s'en aller si il est mineur
```javascript
let age = 17;

if (age >= 18) {
    console.log("Bienvenue au bar!");
} else {
    console.log("Vas-t'en!");
}
```
# Boucle

todo