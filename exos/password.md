# Énoncé du problème

Vous avez pour tâche de créer un programme qui génère un mot de passe aléatoire.
Le programme doit définir une fonction appelée `generatePassword` qui prend en
entrée un paramètre (la longueur du mot de passe) et renvoie une chaîne de
caractères représentant un mot de passe généré aléatoirement de cette longueur.
Le mot de passe doit contenir uniquement des lettres minuscules (a-z) et des
chiffres (0-9) et doit être différent à chaque fois que le programme est
exécuté.

# Signature de la fonction

La fonction `generatePassword` doit prendre en entrée un paramètre `length` (un
nombre) et renvoyer une chaîne de caractères représentant un mot de passe généré
aléatoirement d'une longueur égale à `length`.

# Exemple

## Entrée

```javascript
const length = 8;
const password = generatePassword(length);
console.log(password);
```

## Sortie

```
j5zvn7f8
```
