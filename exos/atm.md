# Énoncé du problème

Vous avez pour tâche de créer un programme qui simule un distributeur automatique de billets. Le distributeur doit pouvoir retirer de l'argent d'un compte bancaire et ajouter de l'argent à un compte bancaire. Le programme doit définir un objet ATM avec des propriétés pour le solde du compte bancaire et un objet pour les informations du titulaire de compte. L'objet ATM doit avoir des méthodes pour retirer de l'argent du compte et déposer de l'argent sur le compte. L'objet ATM doit également avoir une méthode pour afficher les informations du titulaire de compte et le solde actuel du compte.

# Signature d'objet

L'objet ATM doit avoir la signature suivante:

```typescript
{
    accountHolder: {
        name: string,
        accountNumber: number,
        address: string,
        phoneNumber: string
    },
    balance: number,
    withdraw: function(amount: number),
    deposit: function(amount: number),
    displayAccountInfo: function()
}

```


# Contraintes

Le programme doit suivre les règles suivantes :

-    L'objet ATM doit avoir une méthode appelée `withdraw` qui prend un nombre et le soustrait au solde du compte. **Si** le solde du compte n'est pas suffisant pour retirer le montant, la méthode doit afficher un message d'erreur dans la console.

-    L'objet ATM doit avoir une méthode appelée `deposit` qui prend un nombre et l'ajoute au solde du compte.

-    L'objet ATM doit avoir une méthode appelée `displayAccountInfo` qui affiche dans la console les informations du titulaire de compte et le solde actuel du compte.
