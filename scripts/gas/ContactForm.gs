const OWNER_EMAIL = "contact@eva-fr.com"; // Remplacer par l'email de l'architecte

function doPost(e) {
  // 1. Initialisation et récupération de la feuille
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // 2. Gestion des erreurs si aucune donnée n'est reçue
  if (!e || !e.parameter) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: "Aucune donnée reçue"
    })).setMimeType(ContentService.MimeType.JSON);
  }

  try {
    // 3. Récupération des données du formulaire
    const date = new Date();
    const prenom = e.parameter.prenom || "Non renseigné";
    const nom = e.parameter.nom || "Non renseigné";
    const email = e.parameter.email || "Non renseigné";
    const typeProjet = e.parameter.typeProjet || "Non renseigné";
    const message = e.parameter.message || "Aucun message";

    // 4. Ajout de la ligne dans la Google Sheet
    // Ordre des colonnes : Date, Prénom, Nom, Email, Type de Projet, Message
    sheet.appendRow([date, prenom, nom, email, typeProjet, message]);

    // 5. Envoi de l'email au client (Texte brut)
    const clientSubject = "Confirmation de réception de votre demande - Eva Architecte";
    const clientBody = 
`Bonjour ${prenom} ${nom},

Nous avons bien reçu votre demande concernant votre projet de type "${typeProjet}".
Notre bureau d'étude analyse actuellement vos informations et nous reviendrons vers vous sous 48h.

Rappel de votre message :
"${message}"

L'équipe Eva Architecte.
`;

    MailApp.sendEmail({
      to: email,
      subject: clientSubject,
      body: clientBody
    });

    // 6. Envoi de l'email au propriétaire (Architecte) (Texte brut)
    const ownerSubject = `Nouveau Lead : Projet ${typeProjet} - ${prenom} ${nom}`;
    const ownerBody = 
`Un nouveau formulaire de contact a été soumis sur le site Eva Architecte.

Date : ${date.toLocaleString('fr-FR')}
Nom : ${prenom} ${nom}
Email : ${email}
Type de projet : ${typeProjet}

Message :
${message}

Vous pouvez retrouver ces informations dans la Google Sheet.`;

    MailApp.sendEmail({
      to: OWNER_EMAIL,
      subject: ownerSubject,
      body: ownerBody
    });

    // 7. Réponse de succès (format CORS)
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Données enregistrées et emails envoyés."
    }))
    .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // En cas d'erreur dans l'exécution
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }
}

// Fonction pour autoriser les requêtes OPTIONS (CORS Preflight)
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT);
}
