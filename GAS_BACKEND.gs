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
  const recipient = "contact@eva-fr.com";
  const EXPECTED_API_KEY = "votre_token_secret_ici"; // À synchroniser avec le .env
  
  try {
    const data = e.parameter;
    
    // 1. Validation de l'API Key
    const apiKey = data.apiKey;
    if (apiKey !== EXPECTED_API_KEY) {
      return ContentService.createTextOutput("Unauthorized").setMimeType(ContentService.MimeType.TEXT);
    }
    
    // 2. Validation Honeypot
    const website = data.website;
    if (website) {
      console.warn("Spam detected via honeypot");
      return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
    }
    
    // 3. Extraction et Sanitisation basique
    const prenom = sanitizeInput(data.prenom || "");
    const nom = sanitizeInput(data.nom || "");
    const email = sanitizeInput(data.email || "");
    const typeProjet = sanitizeInput(data.typeProjet || "Non spécifié");
    const message = sanitizeInput(data.message || "");
    
    if (!email || !message) {
      return ContentService.createTextOutput("Missing required fields").setMimeType(ContentService.MimeType.TEXT);
    }

    // 4. Enregistrement dans une feuille de calcul
    const sheetName = "eva_contact_form";
    let ss;
    const files = DriveApp.getFilesByName(sheetName);
    if (files.hasNext()) {
      ss = SpreadsheetApp.open(files.next());
    } else {
      ss = SpreadsheetApp.create(sheetName);
    }
    
    const sheet = ss.getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Date", "Prenom", "Nom", "Email", "Type Projet", "Message"]);
    }
    sheet.appendRow([new Date(), prenom, nom, email, typeProjet, message]);
    
    // 5. Envoi de l'email de notification
    const subject = "EVA Contact : " + prenom + " " + nom + " (" + typeProjet + ")";
    const htmlBody = `
      <div style="font-family: sans-serif; max-width: 600px; border: 1px solid #eee; padding: 20px;">
        <h2 style="color: #c5a059;">Nouveau message depuis eva-fr.com</h2>
        <p><strong>De :</strong> ${escapeHtml(prenom)} ${escapeHtml(nom)} (${escapeHtml(email)})</p>
        <p><strong>Type de projet :</strong> ${escapeHtml(typeProjet)}</p>
        <hr style="border: 0; border-top: 1px solid #eee;" />
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        <hr style="border: 0; border-top: 1px solid #eee;" />
        <p style="font-size: 12px; color: #999;">Cet email a été envoyé via le système sécurisé EVA.</p>
      </div>
    `;
    
    MailApp.sendEmail({
      to: recipient,
      subject: subject,
      htmlBody: htmlBody,
      replyTo: email
    });
    
    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
    
  } catch (err) {
    Logger.log(err.toString());
    return ContentService.createTextOutput("Error").setMimeType(ContentService.MimeType.TEXT);
  }
}

/**
 * Nettoie les entrées pour éviter les injections
 */
function sanitizeInput(input) {
  if (typeof input !== 'string') return "";
  return input.trim().substring(0, 5000); // Limite de taille
}

/**
 * Échappe les caractères HTML pour l'affichage sécurisé dans l'email
 */
function escapeHtml(text) {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

function doGet(e) {
  return ContentService.createTextOutput("Backend sécurisé opérationnel.").setMimeType(ContentService.MimeType.TEXT);
}
