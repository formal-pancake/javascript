# Énoncé du problème

Vous devez créer un programme qui simule un jet de dé. Le programme doit déclarer une variable appelée `sides`, qui représente le nombre de faces du dé, et créer une fonction appelée `rollDice` qui prend en paramètre le nombre de faces du dé et renvoie un nombre aléatoire entre 1 et le nombre de faces. Enfin, le programme doit appeler la fonction rollDice et afficher le résultat dans la console.

# Signature de la fonction

La fonction `rollDice` doit prendre un paramètre `numSides` et renvoyer un entier aléatoire entre 1 et `numSides`.

# Exemple

## Entrée

```javascript
const sides = 6;
const result = rollDice(sides);
console.log(result);
```

## Sortie

```
3
```

# Explication

Dans cet exemple, la variable `sides` est déclarée avec la valeur 6. La fonction `rollDice` est appelée avec `numSides` égal à 6, ce qui génère un entier aléatoire entre 1 et 6. Le résultat, dans ce cas, est 3. Enfin, le résultat est imprimé dans la console en utilisant la fonction `console.log()`.
