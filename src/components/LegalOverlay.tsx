import React from 'react';
import { m } from 'motion/react';
import X from 'lucide-react/dist/esm/icons/x';

interface LegalOverlayProps {
  type: 'mentions' | 'privacy';
  onClose: () => void;
}

const LegalOverlay: React.FC<LegalOverlayProps> = ({ type, onClose }) => (
  <m.div 
    initial={{ opacity: 0, x: '100%' }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: '100%' }}
    transition={{ type: "spring", damping: 25, stiffness: 200 }}
    className="fixed inset-0 z-[100] bg-brand-bg overflow-y-auto px-[5vw] py-20"
  >
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-16 border-b border-brand-accent-bg pb-8">
        <div className="flex flex-col">
          <span className="font-display text-2xl sm:text-4xl tracking-[0.2em] font-extralight uppercase text-brand-text break-words hyphens-auto">
            {type === 'mentions' ? 'Mentions Légales' : 'Confidentialité'}
          </span>
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-brand-gold mt-2">
            EVA Maitrise d’œuvre — Conformité Juridique
          </span>
        </div>
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClose();
          }}
          className="w-12 h-12 flex items-center justify-center border border-brand-accent-bg hover:border-brand-gold hover:text-brand-gold transition-all duration-300 group rounded-sm cursor-pointer"
          aria-label="Fermer"
          type="button"
        >
          <X size={20} className="group-hover:rotate-90 transition-transform duration-500 cursor-pointer" />
        </button>
      </div>

      <div className="prose prose-sm max-w-none font-sans text-brand-muted leading-relaxed space-y-12">
        {type === 'mentions' ? (
          <>
            <section className="space-y-4">
              <h3 className="text-brand-text uppercase tracking-widest text-sm font-bold">1. Éditeur du Site</h3>
              <p>
                Le site <strong>www.eva-fr.com</strong> est édité par la société <strong>EVA Maîtrise d’œuvre</strong>, 
                Société par Actions Simplifiée (SAS) au capital de 30 000 €, dont le siège social est situé au 17 rue de la Banque, 75002 Paris.
              </p>
              <ul className="list-none space-y-1 text-[13px]">
                <li><strong>SIRET :</strong> 45040838000043</li>
                <li><strong>RCS :</strong> 450 408 380 R.C.S. Paris</li>
                <li><strong>EUID :</strong> FR7501.450408380</li>
                <li><strong>N° TVA :</strong> FR20450408380</li>
                <li><strong>Directeur de la publication :</strong> M. Réda Lahlou</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h3 className="text-brand-text uppercase tracking-widest text-sm font-bold">2. Activité de Maîtrise d’œuvre</h3>
              <p>
                L'activité d'EVA Maîtrise d’œuvre est régie par les dispositions du Code Civil et les normes professionnelles de la construction. En sa qualité de maître d'œuvre, la société assure la conception technique, la coordination et la direction de l'exécution des contrats de travaux.
              </p>
              <div className="p-6 bg-brand-accent-bg/30 border-l-2 border-brand-gold italic text-[13px]">
                <strong className="text-brand-text block mb-2 underline uppercase tracking-tighter">Assurance Décennale & RCP</strong>
                Conformément à l'article L241-1 du Code des assurances, EVA Maîtrise d’œuvre est couverte par une <strong>Garantie Décennale</strong> et une Responsabilité Civile Professionnelle souscrites auprès de la compagnie <strong>Smabtp</strong> (Contrat n° <strong>1247000 / 001 463995/0</strong>). Cette garantie couvre les dommages compromettant la solidité de l'ouvrage ou le rendant impropre à sa destination pendant 10 ans après réception.
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-brand-text uppercase tracking-widest text-sm font-bold">3. Hébergement</h3>
              <p>
                Le site est hébergé par la société <strong>Amen SASU</strong> :<br />
                12-14, Rond Point des Champs Élysées, 75008 Paris.<br />
                Contact : +33 (0)1 70 99 53 41.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-brand-text uppercase tracking-widest text-sm font-bold">4. Propriété Intellectuelle</h3>
              <p>
                L'ensemble des éléments constituant ce site (textes, graphismes, logiciels, photographies, images, plans, logos, marques, etc.) est protégé par les dispositions du Code de la Propriété Intellectuelle. Toute reproduction, représentation ou diffusion, en tout ou partie, du contenu de ce site sur quelque support ou par quelque procédé que ce soit est interdite, sauf autorisation expresse et préalable de EVA Maîtrise d’œuvre.
              </p>
            </section>
          </>
        ) : (
          <>
            <section className="space-y-4">
              <h3 className="text-brand-text uppercase tracking-widest text-sm font-bold">1. Philosophie "Privacy by Design"</h3>
              <p>
                Conformément à nos valeurs de transparence et de rigueur, ce site a été conçu selon le principe du <strong>Privacy by Design</strong>. 
                Nous limitons la collecte de données au strict nécessaire et refusons toute pratique intrusive de tracking.
              </p>
              <div className="p-6 bg-brand-gold/5 border border-brand-gold/20 rounded-sm">
                <p className="text-brand-gold font-bold text-xs uppercase tracking-widest mb-2">Engagement Zéro Cookie</p>
                <p className="text-[13px] leading-relaxed">
                  Ce site n'utilise <strong>aucun cookie</strong>, qu'il soit technique, statistique ou publicitaire. 
                  Aucune donnée n'est stockée dans votre navigateur et aucune analyse de comportement n'est effectuée à votre insu.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-brand-text uppercase tracking-widest text-sm font-bold">2. Collecte de Données & Finalités</h3>
              <p>
                Le seul point de collecte de données est notre <strong>formulaire de contact</strong>. Les informations transmises (Nom, Email, Projet) sont traitées sur la base de votre consentement pour :
              </p>
              <ul className="list-disc pl-5 space-y-1 text-[13px]">
                <li>Répondre à vos demandes d'expertise et de devis.</li>
                <li>Assurer le suivi technique et administratif de vos projets.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h3 className="text-brand-text uppercase tracking-widest text-sm font-bold">3. Conservation des Données</h3>
              <p>
                Vos données sont conservées de manière sécurisée pendant :
              </p>
              <ul className="list-disc pl-5 space-y-1 text-[13px]">
                <li><strong>Prospects :</strong> 3 ans après le dernier échange.</li>
                <li><strong>Clients :</strong> 10 ans après la réception des travaux (durée légale de la garantie décennale).</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h3 className="text-brand-text uppercase tracking-widest text-sm font-bold">4. Vos Droits & Contact</h3>
              <p>
                Vous disposez d'un droit total d'accès, de rectification et de suppression de vos données. 
                Pour toute demande, contactez-nous directement :
              </p>
              <ul className="list-none space-y-1 text-[13px]">
                <li><strong>Email :</strong> contact@eva-fr.com</li>
                <li><strong>Courrier :</strong> 17 rue de la Banque, 75002 Paris</li>
              </ul>
              <p className="text-[12px] italic opacity-60">
                En cas de besoin, vous pouvez saisir la CNIL (www.cnil.fr).
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-brand-text uppercase tracking-widest text-sm font-bold">5. Sécurité</h3>
              <p>
                Les données transmises via ce site sont chiffrées (SSL/TLS) et stockées sur des serveurs sécurisés pour garantir leur intégrité et leur confidentialité.
              </p>
            </section>
          </>
        )}
      </div>

      <div className="mt-20 pt-10 border-t border-brand-accent-bg flex justify-center">
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClose();
          }}
          className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold hover:text-brand-text transition-colors cursor-pointer py-4 px-8 border border-transparent hover:border-brand-gold/20 rounded-sm"
          type="button"
        >
          Retour au site principal
        </button>
      </div>
    </div>
  </m.div>
);

export default LegalOverlay;
