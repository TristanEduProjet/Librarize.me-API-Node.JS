# Librarize.me-API-Node.JS
API de l'application [Librarize.me](http://www.librarize.me/ "Librarize.Me") en Node.js

[![Known Vulnerabilities](https://snyk.io/test/github/tristaneduprojet/librarize.me-api-node.js/badge.svg)](https://snyk.io/test/github/tristaneduprojet/librarize.me-api-node.js)

L'[application](https://play.google.com/store/apps/details?id=com.digipolitan.librarizeme "App Android") permet de scanner les éléments qu’on a chez soi, et permettre aux autres de voir sa librairie et permettre ainsi l’échange dans son cercle d’amis.

## Sujet
L'objectif du projet est de refaire une api en NodeJS qui se rapproche le plus de l’API en PHP actuelle.

## API / Fonctionnalités
Si requête POST (REST), alors écahnge 100% en JSON.

### Utilisateur
Un utilisateur doit pouvoir s'inscrire et se connecter.  
Une timeline doit présenter les derniers évènements qui se sont produit récemment dans l'application.
Un utilisateur peut modifier sont profil.

###Amis
Un utilisateur peut ajouter et enlever des amis (autres utilisateurs) (CRUD)
Un utilisateur peut voir la bibliothèque de ses amis.

### Produit
Il y a 4 types de produits.  
Des recherches peuevent être faites.

### Emprunt
Est un échange entre 2 utilisateurs

## Bonus
* BDD en NoSQL (MongoDB)
* API Amazon (product api)
