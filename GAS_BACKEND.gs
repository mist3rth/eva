/**
 * GOOGLE APPS SCRIPT - BACKEND POUR FORMULAIRE DE CONTACT EVA
 * 
 * Instructions d'installation :
 * 1. Allez sur https://script.google.com/
 * 2. Créez un nouveau projet nommé "EVA-Contact-Backend"
 * 3. Collez le code ci-dessous dans l'éditeur (en remplaçant le contenu existant)
 * 4. Remplacez l'email dans la variable 'recipient' par le vôtre
 * 5. Cliquez sur "Déployer" > "Nouvel envoi"
 * 6. Type : Application Web
 * 7. Exécuter en tant que : Moi
 * 8. Qui a accès : Tout le monde (Anyone)
 * 9. Copiez l'URL de l'application web et mettez-la à jour dans votre code frontend
 */

function doPost(e) {
  const recipient = "contact@eva-fr.com"; // <-- REMPLACER PAR VOTRE EMAIL
  
  try {
    const data = e.parameter;
    const nom = data.nom || "Non spécifié";
    const email = data.email || "Non spécifié";
    const telephone = data.telephone || "Non spécifié";
    const typeProjet = data.type_projet || data.typeProjet || "Non spécifié";
    const budget = data.budget || "Non spécifié";
    const message = data.message || "Aucun message";
    
    // 1. Enregistrement dans une feuille de calcul
    // On cherche la sheet par son nom ou on en crée une
    const sheetName = "eva_contact_form"; // On évite .xlsx dans le nom interne de la sheet
    let ss;
    const files = DriveApp.getFilesByName(sheetName);
    if (files.hasNext()) {
      ss = SpreadsheetApp.open(files.next());
    } else {
      ss = SpreadsheetApp.create(sheetName);
    }
    
    const sheet = ss.getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Date_Enregistrement", "Prenom_Nom", "Email", "Telephone", "Type_Projet", "Budget", "Message"]);
    }
    sheet.appendRow([new Date(), nom, email, telephone, typeProjet, budget, message]);
    
    // 2. Envoi de l'email de notification
    const subject = "Nouveau contact : " + nom + " (" + typeProjet + ")";
    const htmlBody = `
      <div style="font-family: sans-serif; max-width: 600px; border: 1px solid #eee; padding: 20px;">
        <h2 style="color: #c5a059;">Nouveau message depuis eva-fr.com</h2>
        <p><strong>De :</strong> ${nom} (${email})</p>
        <p><strong>Téléphone :</strong> ${telephone}</p>
        <p><strong>Type de projet :</strong> ${typeProjet}</p>
        <p><strong>Budget :</strong> ${budget}</p>
        <hr style="border: 0; border-top: 1px solid #eee;" />
        <p style="white-space: pre-wrap;">${message}</p>
        <hr style="border: 0; border-top: 1px solid #eee;" />
        <p style="font-size: 12px; color: #999;">Cet email a été envoyé automatiquement depuis le formulaire de contact.</p>
      </div>
    `;
    
    MailApp.sendEmail({
      to: recipient,
      subject: subject,
      htmlBody: htmlBody
    });
    
    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
    
  } catch (err) {
    return ContentService.createTextOutput("Error: " + err.toString()).setMimeType(ContentService.MimeType.TEXT);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Backend opérationnel. Utilisez POST pour envoyer des données.").setMimeType(ContentService.MimeType.TEXT);
}
