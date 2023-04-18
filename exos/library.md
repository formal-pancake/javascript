# Énoncé du problème

Vous avez pour tâche de créer un programme qui simule une bibliothèque. Le programme doit définir deux objets : `Book` et `Library`. L'objet `Book` doit avoir des propriétés pour **le titre**, **l'auteur** et **le nombre de pages**, et une méthode pour **afficher ses informations**. L'objet `Library` doit avoir des propriétés pour le **nom** de la librairie et un **array de livres**, ainsi que des méthodes pour **ajouter** un livre à la bibliothèque, **supprimer** un livre de la bibliothèque et **afficher** *tous* les livres de la bibliothèque.


## Contraintes

Le programme doit suivre les règles suivantes :
-    L'objet Book doit avoir une méthode appelée `displayInfo` qui affiche le **titre**, l'**auteur** et le **nombre de pages** du livre dans la console.
-    L'objet Library doit avoir une méthode appelée `addBook` qui prend un objet Book en argument et l'**ajoute** au array de livres de la bibliothèque.
-    L'objet Library doit avoir une méthode appelée `removeBook` qui prend un titre de livre en argument et **supprime** le livre ayant ce titre du array de livres de la bibliothèque.
-    L'objet Library doit avoir une méthode appelée `displayBooks` qui **affiche** dans la console le titre, l'auteur et le nombre de pages de tous les livres de la bibliothèque.