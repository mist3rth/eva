# Guide de Configuration : Formulaire de Contact vers Google Sheet

Ce guide vous explique étape par étape comment configurer votre Google Sheet pour recevoir automatiquement les demandes de contact du site Eva Architecte, et activer l'envoi d'emails automatiques.

---

## Étape 1 : Créer la Google Sheet

1. Allez sur [Google Sheets](https://docs.google.com/spreadsheets/) en étant connecté avec le compte Google qui recevra les données.
2. Créez une **nouvelle feuille de calcul vide** et nommez-la par exemple **"Contacts Site Eva"**.
3. Dans la première ligne, créez les en-têtes suivants (un par colonne, de A à F) :
   - **Date** (Cellule A1)
   - **Prénom** (Cellule B1)
   - **Nom** (Cellule C1)
   - **Email** (Cellule D1)
   - **Type de Projet** (Cellule E1)
   - **Message** (Cellule F1)
4. (Optionnel) Mettez cette première ligne en gras pour plus de lisibilité.

---

## Étape 2 : Ajouter le Script d'Automatisation (GAS)

1. Dans le menu en haut de votre Google Sheet, cliquez sur **Extensions** > **Apps Script**.
2. Un nouvel onglet s'ouvre avec un éditeur de code.
3. Effacez tout le code présent par défaut (généralement `function myFunction() { ... }`).
4. **Copiez et collez** le code fourni ci-dessous :

```javascript
const OWNER_EMAIL = "contact@eva-fr.com"; // Remplacer par l'email qui doit recevoir les notifications

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  if (!e || !e.parameter) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Aucune donnée reçue" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  try {
    const date = new Date();
    const prenom = e.parameter.prenom || "Non renseigné";
    const nom = e.parameter.nom || "Non renseigné";
    const email = e.parameter.email || "Non renseigné";
    const typeProjet = e.parameter.typeProjet || "Non renseigné";
    const message = e.parameter.message || "Aucun message";

    // Ajout dans la Google Sheet
    sheet.appendRow([date, prenom, nom, email, typeProjet, message]);

    // Email Client
    const clientSubject = "Confirmation de réception de votre demande - Eva Architecte";
    const clientBody = \`Bonjour \${prenom} \${nom},

Nous avons bien reçu votre demande concernant votre projet de type "\${typeProjet}".
Notre bureau d'étude analyse actuellement vos informations et nous reviendrons vers vous sous 48h.

Rappel de votre message :
"\${message}"

L'équipe Eva Architecte.\`;

    MailApp.sendEmail({ to: email, subject: clientSubject, body: clientBody });

    // Email Architecte
    const ownerSubject = \`Nouveau Lead : Projet \${typeProjet} - \${prenom} \${nom}\`;
    const ownerBody = \`Un nouveau formulaire de contact a été soumis sur le site Eva Architecte.

Date : \${date.toLocaleString('fr-FR')}
Nom : \${prenom} \${nom}
Email : \${email}
Type de projet : \${typeProjet}

Message :
\${message}

Vous pouvez retrouver ces informations dans la Google Sheet.\`;

    MailApp.sendEmail({ to: OWNER_EMAIL, subject: ownerSubject, body: ownerBody });

    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doOptions(e) {
  return ContentService.createTextOutput("").setMimeType(ContentService.MimeType.TEXT);
}
```

5. À la **Ligne 1** du code, remplacez `"contact@eva-fr.com"` par votre véritable adresse email si ce n'est pas celle-ci.
6. Cliquez sur l'icône **Enregistrer** 💾 (ou faites Ctrl+S / Cmd+S).

---

## Étape 3 : Déployer le Script en tant qu'Application Web

Cette étape est cruciale pour que votre site web puisse communiquer avec la Google Sheet.

1. En haut à droite de l'éditeur Apps Script, cliquez sur le bouton bleu **Déployer** > **Nouveau déploiement**.
2. Dans la boîte de dialogue, cliquez sur l'icône **Roue crantée ⚙️** à côté de "Sélectionner le type", et cochez **Application Web**.
3. Remplissez le formulaire comme suit :
   - **Description :** "API Formulaire Contact" (ou ce que vous voulez)
   - **Exécuter en tant que :** Sélectionnez **"Moi (votre.email@gmail.com)"**
   - **Qui a accès :** Sélectionnez impérativement **"Tout le monde"** (C'est obligatoire pour que le site web puisse envoyer les données sans que l'internaute ne doive se connecter à Google).
4. Cliquez sur **Déployer**.

> [!WARNING]
> **Autorisations requises**  
> Google va vous demander d'autoriser l'application (c'est normal, car le script va envoyer des emails en votre nom et modifier votre feuille de calcul).  
> - Cliquez sur **Autoriser l'accès**.  
> - Choisissez votre compte Google.  
> - Google affichera un message d'avertissement rouge "Google n'a pas validé cette application". Cliquez sur **Paramètres avancés** (en bas à gauche), puis sur **Aller à Projet sans titre (non sécurisé)**.  
> - Cliquez enfin sur **Autoriser** tout en bas.

5. Une fois déployé, une fenêtre affiche l'**URL de l'application web** (qui commence par `https://script.google.com/macros/s/...`). 
6. **Copiez cette URL entière.**

---

## Étape 4 : Finalisation

1. Envoyez cette URL (le lien copié à l'étape précédente) à votre développeur.
2. Le développeur ajoutera cette URL dans le fichier de configuration du site (`.env` à la variable `VITE_GAS_ENDPOINT`).

Votre système est maintenant opérationnel ! Chaque fois qu'un utilisateur remplira le formulaire sur le site, une ligne s'ajoutera automatiquement dans votre tableau et les deux emails seront expédiés.
