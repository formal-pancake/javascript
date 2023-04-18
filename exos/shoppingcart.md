# Énoncé du problème

Vous êtes chargé de créer un programme qui simule un panier d'achats. Le programme devrait définir un objet panier avec une propriété pour les articles dans le panier. L'objet panier devrait avoir des méthodes pour ajouter des articles au panier, supprimer des articles du panier et afficher les articles dans le panier.

# Signature de l'objet

L'objet panier devrait avoir la signature suivante:


```javascript
{
    items: Array,
    addItem: function(item: string),
    removeItem: function(item: string),
    displayItems: function()
}
```
# Contraintes

Vous ne devez pas utiliser de boucles ni de déclarations conditionnelles dans votre solution.

Le programme doit suivre les règles suivantes:
-    L'objet panier devrait avoir une méthode appelée addItem qui prend en entrée une chaîne de caractères représentant un article et l'ajoute au tableau d'articles.

-    L'objet panier devrait avoir une méthode appelée removeItem qui prend en entrée une chaîne de caractères représentant un article et le supprime du tableau d'articles.

-    L'objet panier devrait avoir une méthode appelée displayItems qui affiche les articles du tableau d'articles dans la console.

# Exemple

## Entrée


```javascript

const cart = {
    // TODO
};

cart.addItem("apple");
cart.addItem("banana");
cart.displayItems();
cart.removeItem("apple");
cart.displayItems();
cart.removeItem("orange");
```

## Sortie

```
Added apple to cart
Added banana to cart
Items in cart:
apple
banana
Removed apple from cart
Items in cart:
banana
orange is not in the cart
```