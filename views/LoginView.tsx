
import React from 'react';
import { AppView } from '../types';

interface Props {
  onNavigate: (view: AppView) => void;
}

const LoginView: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="relative flex flex-col flex-1 px-6 pt-12 pb-6 overflow-y-auto no-scrollbar">
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none z-0"></div>
      
      <div className="relative z-10 flex flex-col items-center mb-8">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-primary text-[32px]">self_improvement</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-center text-white mb-2">Bienvenido de Nuevo</h1>
        <p className="text-text-muted text-center text-base">Ingresa tus datos para continuar tu viaje.</p>
      </div>

      <form className="space-y-5 w-full" onSubmit={(e) => { e.preventDefault(); onNavigate('dashboard'); }}>
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none text-white" htmlFor="email">Correo Electrónico</label>
          <div className="relative">
            <input 
              className="flex h-12 w-full rounded-lg border border-border-dark bg-surface-dark px-3 py-2 pl-11 text-sm placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary text-white" 
              id="email" 
              placeholder="tu@ejemplo.com" 
              type="email" 
            />
            <span className="material-symbols-outlined absolute left-3 top-3 text-text-muted text-[20px]">mail</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium leading-none text-white" htmlFor="password">Contraseña</label>
            <a className="text-sm font-medium text-primary hover:text-primary/80 transition-colors" href="#">¿Olvidaste tu contraseña?</a>
          </div>
          <div className="relative">
            <input 
              className="flex h-12 w-full rounded-lg border border-border-dark bg-surface-dark px-3 py-2 pl-11 pr-11 text-sm placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary text-white" 
              id="password" 
              placeholder="••••••••" 
              type="password" 
            />
            <span className="material-symbols-outlined absolute left-3 top-3 text-text-muted text-[20px]">lock</span>
            <button className="absolute right-3 top-3 text-text-muted hover:text-primary transition-colors" type="button">
              <span className="material-symbols-outlined text-[20px]">visibility</span>
            </button>
          </div>
        </div>

        <button className="w-full h-12 bg-primary hover:bg-primary/90 text-background-dark font-semibold rounded-lg transition-colors flex items-center justify-center shadow-lg shadow-primary/20 mt-4">
          Iniciar Sesión
        </button>
      </form>

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border-dark"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background-dark px-2 text-text-muted">O continuar con</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center h-12 px-4 rounded-lg border border-border-dark bg-surface-dark hover:bg-surface-dark/80 transition-colors">
          <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" className="h-5 w-5 mr-2" alt="Google" />
          <span className="text-sm font-medium text-white">Google</span>
        </button>
        <button className="flex items-center justify-center h-12 px-4 rounded-lg border border-border-dark bg-surface-dark hover:bg-surface-dark/80 transition-colors">
          <span className="material-symbols-outlined text-white text-[20px] mr-2">apple</span>
          <span className="text-sm font-medium text-white">Apple</span>
        </button>
      </div>

      <div className="mt-auto pt-8 pb-4 text-center">
        <p className="text-sm text-text-muted">
          ¿No tienes una cuenta? 
          <button 
            onClick={() => onNavigate('register')}
            className="ml-1 font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Regístrate
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginView;
