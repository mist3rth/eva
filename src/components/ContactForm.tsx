import React, { useState } from 'react';
import { m } from 'motion/react';
import { cn } from '../lib/utils';
import { Home, Building2, Gem, Hotel, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';

interface ContactFormProps {
  onSuccess: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validateForm = () => {
    let isValid = true;
    const newErrors = { firstName: '', lastName: '', email: '', projectType: '', message: '' };

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Le prénom est requis';
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Le nom est requis';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'adresse email est requise";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
      isValid = false;
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Le type de projet est requis';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const sanitize = (text: string) => {
    return text.replace(/<[^>]*>?/gm, '').trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    const honey = (e.target as HTMLFormElement).elements.namedItem('website') as HTMLInputElement;
    if (honey && honey.value) {
      console.warn('Bot detected');
      onSuccess(); // Simulate success to confuse the bot
      return;
    }

    if (!validateForm()) {
      const el = document.getElementById('contact');
      if (el) {
        const offset = 80;
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    const env = (import.meta as unknown as { env: Record<string, string | undefined> }).env;
    const endpoint = env.VITE_GAS_ENDPOINT;
    const apiKey = env.VITE_GAS_API_KEY;

    try {
      if (endpoint) {
        const body = new FormData();
        body.append('prenom', sanitize(formData.firstName));
        body.append('nom', sanitize(formData.lastName));
        body.append('email', sanitize(formData.email));
        body.append('typeProjet', formData.projectType);
        body.append('message', sanitize(formData.message));
        if (apiKey) body.append('apiKey', apiKey);
        
        await fetch(endpoint, { method: 'POST', mode: 'no-cors', body });
      } else {
        await new Promise<void>(resolve => setTimeout(resolve, 800));
      }

      onSuccess();
      setFormData({ firstName: '', lastName: '', email: '', projectType: '', message: '' });
    } catch {
      setSubmitError('Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 md:py-56 overflow-hidden bg-brand-text">
      {/* Background Image with Layering */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/cta_banner_bg.webp`} 
          alt="Atmosphère de chantier architectural"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay scale-105 group-hover:scale-100 transition-transform duration-[10s]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-text via-brand-text/40 to-brand-text" />
      </div>

      {/* Technical Watermark Background */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none flex items-center justify-center">
        <svg className="w-[150%] h-[150%] md:w-full md:h-full opacity-50" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="white" strokeWidth="0.5">
            <rect x="100" y="100" width="600" height="600" />
            <line x1="100" y1="100" x2="700" y2="700" />
            <line x1="700" y1="100" x2="100" y2="700" />
            <circle cx="400" cy="400" r="300" strokeDasharray="10 10" />
            <circle cx="400" cy="400" r="150" />
            <path d="M400,0 V800 M0,400 H800" strokeDasharray="4 4" />
            <text x="410" y="390" fill="white" className="text-[10px] font-mono">PLAN_001.DWG</text>
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <m.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl font-light tracking-tight mb-8 text-white leading-tight"
          >
            Donnez vie à votre ambition architecturale.
          </m.h2>
          <m.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-gold font-sans text-xs md:text-sm uppercase tracking-[0.3em] font-medium"
          >
            Réponse sous 48h. Analyse personnalisée de votre projet par notre bureau d'étude.
          </m.p>
        </div>

        <m.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-16 shadow-2xl rounded-sm"
        >
          <form className="space-y-8 text-left" onSubmit={handleSubmit}>
            {/* Honeypot field - hidden from users */}
            <div className="absolute opacity-0 pointer-events-none -z-10" aria-hidden="true">
              <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label htmlFor="firstName" className="text-[10px] uppercase tracking-[0.3em] text-white/50 ml-0.5 font-bold">Prénom <span className="text-brand-gold">*</span></label>
                <input 
                  id="firstName"
                  type="text" 
                  value={formData.firstName}
                  onChange={(e) => {
                    setFormData({...formData, firstName: e.target.value});
                    if (errors.firstName) setErrors({...errors, firstName: ''});
                  }}
                  required
                  aria-invalid={errors.firstName ? "true" : "false"}
                  aria-describedby={errors.firstName ? "firstName-error" : undefined}
                  className={`w-full bg-white/5 border-b ${errors.firstName ? 'border-red-500' : 'border-white/10'} py-4 px-5 focus:outline-none focus:border-brand-gold transition-all font-light text-white placeholder:text-white/40 text-lg`}
                  placeholder="Jean"
                />
                {errors.firstName && <span id="firstName-error" className="text-[10px] text-red-500 ml-0.5 font-light">{errors.firstName}</span>}
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="lastName" className="text-[10px] uppercase tracking-[0.3em] text-white/50 ml-0.5 font-bold">Nom <span className="text-brand-gold">*</span></label>
                <input 
                  id="lastName"
                  type="text" 
                  value={formData.lastName}
                  onChange={(e) => {
                    setFormData({...formData, lastName: e.target.value});
                    if (errors.lastName) setErrors({...errors, lastName: ''});
                  }}
                  required
                  aria-invalid={errors.lastName ? "true" : "false"}
                  aria-describedby={errors.lastName ? "lastName-error" : undefined}
                  className={`w-full bg-white/5 border-b ${errors.lastName ? 'border-red-500' : 'border-white/10'} py-4 px-5 focus:outline-none focus:border-brand-gold transition-all font-light text-white placeholder:text-white/40 text-lg`}
                  placeholder="Dupont"
                />
                {errors.lastName && <span id="lastName-error" className="text-[10px] text-red-500 ml-0.5 font-light">{errors.lastName}</span>}
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="text-[10px] uppercase tracking-[0.3em] text-white/50 ml-0.5 font-bold">Adresse Email <span className="text-brand-gold">*</span></label>
              <input 
                id="email"
                type="email" 
                value={formData.email}
                onChange={(e) => {
                  setFormData({...formData, email: e.target.value});
                  if (errors.email) setErrors({...errors, email: ''});
                }}
                required
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full bg-white/5 border-b ${errors.email ? 'border-red-500' : 'border-white/10'} py-4 px-5 focus:outline-none focus:border-brand-gold transition-all font-light text-white placeholder:text-white/40 text-lg`}
                placeholder="jean@exemple.fr"
              />
              {errors.email && <span id="email-error" className="text-[10px] text-red-500 ml-0.5 font-light">{errors.email}</span>}
            </div>

            <div className="flex flex-col gap-5">
              <label className="text-[10px] uppercase tracking-[0.3em] text-white/50 ml-0.5 font-bold">Type de projet <span className="text-brand-gold">*</span></label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {[
                  { id: 'residentiel', label: 'Résidentiel', icon: Home },
                  { id: 'tertiaire', label: 'Tertiaire', icon: Building2 },
                  { id: 'retail', label: 'Retail Luxe', icon: Gem },
                  { id: 'hospitality', label: 'Hospitality', icon: Hotel },
                  { id: 'autre', label: 'Autre', icon: Sparkles }
                ].map((type) => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => {
                        setFormData({...formData, projectType: type.id});
                        if (errors.projectType) setErrors({...errors, projectType: ''});
                      }}
                      aria-label={`Sélectionner le type de projet : ${type.label}`}
                      aria-pressed={formData.projectType === type.id}
                      className={cn(
                        "flex flex-col items-center justify-center p-6 border rounded-sm transition-all duration-700 gap-4 group/item cursor-pointer relative overflow-hidden",
                        formData.projectType === type.id 
                          ? "bg-brand-gold border-brand-gold shadow-[0_0_30px_rgba(197,163,124,0.3)]" 
                          : "bg-white/5 border-white/10 hover:border-brand-gold/40"
                      )}
                    >
                      <div className="relative">
                        <Icon 
                          className={cn(
                            "w-7 h-7 transition-all duration-500 ease-out",
                            formData.projectType === type.id 
                              ? "text-white" 
                              : "text-brand-gold group-hover/item:scale-110",
                            type.id === 'retail' && "group-hover/item:animate-[sparkle_2s_infinite]"
                          )}
                          style={{ 
                            strokeWidth: formData.projectType === type.id ? 1.5 : 1 
                          }}
                        />
                        {/* Subtle glow effect on hover */}
                        <div className={cn(
                          "absolute inset-0 blur-md opacity-0 group-hover/item:opacity-40 transition-opacity duration-500",
                          formData.projectType === type.id ? "bg-white" : "bg-brand-gold"
                        )} />
                      </div>
                      
                      <span className={cn(
                        "text-[9px] uppercase tracking-[0.25em] font-bold text-center transition-colors duration-500",
                        formData.projectType === type.id ? "text-white" : "text-white/40 group-hover/item:text-white/80"
                      )}>
                        {type.label}
                      </span>

                      {/* Corner technical mark */}
                      <div className={cn(
                        "absolute top-0 right-0 w-1.5 h-1.5 border-t border-r transition-opacity duration-500",
                        formData.projectType === type.id ? "border-white/40" : "border-brand-gold/20 opacity-0 group-hover/item:opacity-100"
                      )} />
                    </button>
                  );
                })}
              </div>
              {errors.projectType && <span id="projectType-error" className="text-[10px] text-red-500 ml-0.5 font-light">{errors.projectType}</span>}
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="message" className="text-[10px] uppercase tracking-[0.3em] text-white/50 ml-0.5 font-bold">Votre Message <span className="text-brand-gold">*</span></label>
              <textarea 
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => {
                  setFormData({...formData, message: e.target.value});
                  if (errors.message) setErrors({...errors, message: ''});
                }}
                required
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`w-full bg-white/5 border-b ${errors.message ? 'border-red-500' : 'border-white/10'} py-5 px-5 focus:outline-none focus:border-brand-gold transition-all font-light text-white resize-none placeholder:text-white/40 text-lg leading-tight md:leading-normal`}
                placeholder="Quels sont vos objectifs et vos contraintes (budget, délais, lieu) ?"
              />
              {errors.message && <span id="message-error" className="text-[10px] text-red-500 ml-0.5 font-light">{errors.message}</span>}
            </div>

            <div className="pt-12 flex flex-col items-center gap-10">
              <div className="flex flex-col items-center gap-6 w-full">
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Lancer mon projet'}
                </Button>
                
                <div className="text-center space-y-4">
                  {/* Mention RGPD explicite */}
                  <p className="text-[10px] text-white/40 font-light tracking-wide max-w-sm mx-auto leading-relaxed">
                    Conformément au RGPD, vos données (prénom, nom, email, message) sont collectées uniquement
                    pour le traitement de votre demande. Elles ne sont pas transmises à des tiers.
                    <br />Durée de conservation : 3 ans. Droit d'accès, rectification et suppression sur demande à{' '}
                    <a href="mailto:contact@eva-fr.com" className="text-brand-gold/70 hover:text-brand-gold transition-colors">
                      contact@eva-fr.com
                    </a>
                  </p>
                  
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-[11px] text-white/60 font-sans tracking-widest uppercase">
                      Besoin d'une réponse immédiate ? <a href="tel:+33620160905" className="text-brand-gold hover:underline transition-all font-bold">+33 (0)6 20 16 09 05</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Message d'erreur réseau */}
              {submitError && (
                <m.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  role="alert"
                  aria-live="assertive"
                  className="p-4 bg-red-500/10 border border-red-500/30 rounded-sm w-full"
                >
                  <p className="text-red-400 text-xs font-medium tracking-widest uppercase">
                    {submitError}
                  </p>
                </m.div>
              )}
            </div>
          </form>
        </m.div>
      </div>
    </section>
  );
}
