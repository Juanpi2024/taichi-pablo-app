
import React from 'react';
import { AppView } from '../types';

interface Props {
  onNavigate: (view: AppView) => void;
}

const RegisterView: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="relative flex flex-col flex-1 px-6 pt-8 pb-6 overflow-y-auto no-scrollbar">
      <div className="flex items-center mb-6">
        <button 
          onClick={() => onNavigate('login')}
          className="flex size-10 items-center justify-center rounded-full hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined text-2xl text-white">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold flex-1 text-center pr-10 text-white">Registro</h2>
      </div>

      <div className="pt-2 pb-6 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 text-primary">
          <span className="material-symbols-outlined text-4xl">self_improvement</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2 text-white">Comienza tu viaje</h1>
        <p className="text-text-muted text-base">Crea una cuenta para dominar tu flujo.</p>
      </div>

      <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); onNavigate('dashboard'); }}>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-white" htmlFor="reg-email">Correo Electrónico</label>
          <input className="flex h-14 w-full rounded-xl border border-border-dark bg-surface-dark px-4 text-base placeholder:text-text-muted focus:ring-1 focus:ring-primary outline-none transition-all text-white" id="reg-email" placeholder="nombre@ejemplo.com" type="email" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-white" htmlFor="reg-pass">Contraseña</label>
          <div className="relative flex w-full items-center rounded-xl border border-border-dark bg-surface-dark focus-within:ring-1 focus-within:ring-primary transition-all">
            <input className="flex-1 border-none bg-transparent h-14 px-4 text-base placeholder:text-text-muted outline-none text-white" id="reg-pass" placeholder="Crea una contraseña" type="password" />
            <button className="flex h-14 w-14 items-center justify-center text-text-muted hover:text-primary transition-colors" type="button">
              <span className="material-symbols-outlined">visibility_off</span>
            </button>
          </div>
        </div>

        <div className="flex items-start gap-3 pt-1">
          <input className="mt-1 h-4 w-4 rounded border-border-dark text-primary focus:ring-primary bg-surface-dark" id="terms" type="checkbox" required />
          <label className="text-sm text-text-muted" htmlFor="terms">
            Acepto los <a className="text-primary hover:underline" href="#">Términos de Servicio</a> y la <a className="text-primary hover:underline" href="#">Política de Privacidad</a>.
          </label>
        </div>

        <button className="mt-2 flex h-14 w-full items-center justify-center rounded-xl bg-primary hover:bg-primary/90 text-background-dark text-base font-bold transition-transform active:scale-95">
          Crear Cuenta
        </button>
      </form>

      <div className="mt-auto pt-8 pb-4 text-center">
        <p className="text-sm text-text-muted">
          ¿Ya tienes una cuenta? 
          <button 
            onClick={() => onNavigate('login')}
            className="ml-1 font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Inicia Sesión
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterView;
