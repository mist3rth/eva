import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * ErrorBoundary sécurise le chargement des composants (notamment ceux chargés via React.lazy).
 * Il capture les erreurs de rendu et de réseau (ChunkLoadError) pour éviter que toute l'application ne crash.
 */
class ErrorBoundary extends Component<Props, State> {
  public override state: State = { hasError: false };

  constructor(props: Props) {
    super(props);
  }

  public static getDerivedStateFromError(error: Error): State {
    // Capture l'erreur pour mettre à jour l'état et afficher l'UI de secours
    console.warn('ErrorBoundary captured an error:', error.name, error.message);
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log optionnel pour le monitoring
    console.error('Détails de l\'erreur:', error, errorInfo);
  }

  private handleRetry = () => {
    // Recharge la page pour tenter de récupérer les chunks manquants
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="w-full py-24 flex flex-col items-center justify-center bg-brand-bg/80 border border-brand-accent-bg rounded-sm px-6 text-center">
          <div className="w-10 h-[1px] bg-brand-gold/30 mb-6" />
          <p className="text-brand-muted text-[10px] md:text-xs uppercase tracking-[0.3em] font-light mb-6">
            Une erreur de chargement est survenue
          </p>
          <button
            onClick={this.handleRetry}
            className="group flex flex-col items-center gap-2 cursor-pointer outline-none"
          >
            <span className="text-brand-gold text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-medium transition-all duration-300 group-hover:tracking-[0.5em]">
              Réessayer
            </span>
            <div className="w-6 h-[1px] bg-brand-gold origin-center scale-x-50 group-hover:scale-x-100 transition-transform duration-500" />
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
