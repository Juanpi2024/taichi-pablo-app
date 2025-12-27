
import React, { useState } from 'react';
import { AppView } from '../types';

interface Props {
  onNavigate: (view: AppView) => void;
  initialTab?: 'home' | 'levels' | 'practice' | 'profile';
}

const DashboardView: React.FC<Props> = ({ onNavigate, initialTab = 'home' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const renderHome = () => (
    <>
      <div className="py-6 animate-fade-in-down">
        <div className="flex flex-wrap gap-3">
          <div className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-xl bg-surface-dark border border-primary/20 p-4 items-center text-center relative overflow-hidden group">
            <div className="relative w-16 h-16 mb-2">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path className="text-white/10" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                <path className="text-primary drop-shadow-[0_0_4px_rgba(18,226,105,0.4)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="45, 100" strokeLinecap="round" strokeWidth="3"></path>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">45%</div>
            </div>
            <p className="text-white/80 text-xs font-medium uppercase tracking-wider">Maestro</p>
          </div>
          <div className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-xl bg-surface-dark border border-primary/20 p-4 items-center text-center">
            <span className="material-symbols-outlined text-3xl text-primary mb-1 filled">local_fire_department</span>
            <p className="text-white text-2xl font-bold leading-tight">12</p>
            <p className="text-white/80 text-xs font-medium uppercase tracking-wider">Racha de Días</p>
          </div>
        </div>
        
        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="bg-surface-dark/30 border border-primary/10 rounded-xl p-3 flex flex-col items-center justify-center">
            <span className="material-symbols-outlined text-primary/60 text-2xl mb-1">schedule</span>
            <span className="text-white font-bold text-lg leading-none tracking-tight">28h</span>
            <span className="text-white/50 text-[10px] uppercase font-medium mt-1">Tiempo</span>
          </div>
          <div className="bg-surface-dark/30 border border-primary/10 rounded-xl p-3 flex flex-col items-center justify-center">
            <span className="material-symbols-outlined text-primary/60 text-2xl mb-1">spa</span>
            <span className="text-white font-bold text-lg leading-none tracking-tight">42</span>
            <span className="text-white/50 text-[10px] uppercase font-medium mt-1">Sesiones</span>
          </div>
          <div className="bg-surface-dark/30 border border-primary/10 rounded-xl p-3 flex flex-col items-center justify-center">
            <span className="material-symbols-outlined text-primary/60 text-2xl mb-1">timelapse</span>
            <span className="text-white font-bold text-lg leading-none tracking-tight">40m</span>
            <span className="text-white/50 text-[10px] uppercase font-medium mt-1">Promedio</span>
          </div>
        </div>
      </div>

      <div className="mt-2 space-y-4">
        <h3 className="text-xl font-bold text-white">Continuar Aprendiendo</h3>
        <div 
          onClick={() => onNavigate('ai-feedback')}
          className="relative bg-surface-dark rounded-2xl overflow-hidden shadow-xl border-2 border-primary transform transition-all active:scale-[0.98] cursor-pointer"
        >
          <div className="h-40 w-full bg-cover bg-center relative" style={{ backgroundImage: "url('https://picsum.photos/seed/taichi1/600/400')" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/50 to-transparent"></div>
            <div className="absolute top-3 right-3">
              <div className="bg-primary text-[#102218] text-[10px] font-black tracking-wider uppercase px-2.5 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                <span className="material-symbols-outlined text-[14px]">my_location</span> NIVEL ACTUAL
              </div>
            </div>
            <div className="absolute bottom-3 left-4">
              <span className="bg-black/50 backdrop-blur text-white/90 text-xs font-medium px-2 py-0.5 rounded border border-white/10">En Curso</span>
            </div>
          </div>
          <div className="p-5 pt-2">
            <h2 className="text-white text-xl font-bold leading-tight mb-1">La Forma de 24 Movimientos</h2>
            <p className="text-gray-400 text-sm mb-4">Aprende la fluidez y el equilibrio del agua.</p>
            <div className="flex items-center justify-between text-xs text-primary/80 mb-1 font-medium">
              <span>65% Completado</span>
              <span>Lección 8/12</span>
            </div>
            <div className="w-full bg-black/40 rounded-full h-2.5 mb-5 overflow-hidden">
              <div className="bg-gradient-to-r from-primary/80 to-primary h-2.5 rounded-full shadow-[0_0_10px_rgba(18,226,105,0.5)]" style={{ width: '65%' }}></div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 bg-primary text-background-dark font-bold py-3 px-4 rounded-xl transition-all shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined filled">play_arrow</span> Continuar
            </button>
          </div>
        </div>
      </div>
    </>
  );

  const renderLevels = () => (
    <div className="relative pt-4">
      <div className="absolute left-[19px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/30 to-white/5 rounded-full"></div>
      
      <div className="relative pl-12 pb-8 group cursor-pointer opacity-75 hover:opacity-100 transition-opacity">
        <div className="absolute left-0 top-6 -translate-y-1/2 z-10 bg-background-dark border-4 border-primary rounded-full w-10 h-10 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-xl font-bold">check</span>
        </div>
        <div className="bg-[#1a2620] rounded-xl p-4 border border-primary/10">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-white/90 font-bold text-lg">Nivel 1: Fundamentos</h3>
              <p className="text-white/50 text-sm">Respiración y Postura</p>
            </div>
            <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Completado</span>
          </div>
          <div className="w-full bg-white/5 rounded-full h-1.5 mb-3">
            <div className="bg-primary h-1.5 rounded-full w-full"></div>
          </div>
          <button onClick={() => onNavigate('level-detail')} className="text-white/60 text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-base">replay</span> Repasar Lecciones
          </button>
        </div>
      </div>

      <div className="relative pl-12 pb-10 group cursor-pointer" onClick={() => onNavigate('level-detail')}>
        <span className="absolute left-0 top-[22px] -translate-y-1/2 z-0 flex h-10 w-10">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-20"></span>
          <span className="relative inline-flex rounded-full h-10 w-10 bg-primary items-center justify-center text-background-dark font-bold border-4 border-background-dark shadow-lg">2</span>
        </span>
        <div className="bg-surface-dark rounded-2xl p-5 border-2 border-primary shadow-[0_0_20px_rgba(18,226,105,0.15)]">
          <h3 className="text-white font-bold text-xl mb-1">Nivel 2: Forma de 24</h3>
          <p className="text-gray-400 text-sm mb-4">Dominio de movimientos fluidos y secuencias avanzadas.</p>
          <div className="flex items-center justify-between text-xs text-primary/80 mb-2">
            <span>65% Completado</span>
            <span>8/12</span>
          </div>
          <div className="w-full bg-black/40 rounded-full h-2 overflow-hidden">
            <div className="bg-primary h-full rounded-full w-[65%] shadow-[0_0_8px_rgba(18,226,105,0.3)]"></div>
          </div>
        </div>
      </div>

      <div className="relative pl-12 pb-8 opacity-40">
        <div className="absolute left-2.5 top-6 -translate-y-1/2 z-10 bg-surface-dark border-2 border-white/10 rounded-full w-5 h-5 flex items-center justify-center">
          <div className="w-2 h-2 bg-white/20 rounded-full"></div>
        </div>
        <div className="bg-[#151f19] rounded-xl p-4 border border-white/5">
          <h3 className="text-white/70 font-bold text-lg">Nivel 3: Control del Qi</h3>
          <p className="text-white/40 text-sm mb-3">Dominio de la energía interna y visualización.</p>
          <div className="flex items-center gap-2 text-[10px] text-white/30 bg-white/5 p-2 rounded-lg inline-flex">
            <span className="material-symbols-outlined text-[14px]">lock</span>
            Bloqueado hasta completar nivel 2
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col flex-1 relative overflow-hidden">
      <header className="sticky top-0 z-50 bg-background-dark/95 backdrop-blur-md border-b border-white/5 p-4 flex items-center justify-between">
        <h1 className="text-lg font-bold text-white">Tu Viaje de Energía</h1>
        <div className="flex gap-2">
          <button onClick={() => onNavigate('offline-manager')} className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 text-white">
            <span className="material-symbols-outlined">cloud_download</span>
          </button>
          <button onClick={() => onNavigate('custom-plan')} className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 text-white">
            <span className="material-symbols-outlined">add_circle</span>
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar px-4 pb-24">
        {activeTab === 'home' && renderHome()}
        {activeTab === 'levels' && renderLevels()}
        {activeTab === 'practice' && (
          <div className="py-10 text-center text-text-muted">
            <span className="material-symbols-outlined text-6xl mb-4">history</span>
            <p>Sección de Práctica Próximamente</p>
          </div>
        )}
        {activeTab === 'profile' && (
          <div className="py-10 text-center text-text-muted">
            <span className="material-symbols-outlined text-6xl mb-4">account_circle</span>
            <p>Perfil del Usuario</p>
          </div>
        )}
      </main>

      <nav className="absolute bottom-0 left-0 right-0 z-50 bg-background-dark/95 backdrop-blur-lg border-t border-white/5 pb-5 pt-2">
        <div className="flex justify-around items-center">
          <button 
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center p-2 transition-colors ${activeTab === 'home' ? 'text-primary' : 'text-white/40'}`}
          >
            <span className={`material-symbols-outlined mb-1 ${activeTab === 'home' ? 'filled' : ''}`}>home</span>
            <span className="text-[10px] font-medium">Inicio</span>
          </button>
          <button 
            onClick={() => setActiveTab('levels')}
            className={`flex flex-col items-center p-2 transition-colors ${activeTab === 'levels' ? 'text-primary' : 'text-white/40'}`}
          >
            <span className={`material-symbols-outlined mb-1 ${activeTab === 'levels' ? 'filled' : ''}`}>grid_view</span>
            <span className="text-[10px] font-medium">Niveles</span>
          </button>
          <button 
            onClick={() => setActiveTab('practice')}
            className={`flex flex-col items-center p-2 transition-colors ${activeTab === 'practice' ? 'text-primary' : 'text-white/40'}`}
          >
            <span className={`material-symbols-outlined mb-1 ${activeTab === 'practice' ? 'filled' : ''}`}>self_improvement</span>
            <span className="text-[10px] font-medium">Práctica</span>
          </button>
          <button 
            onClick={() => setActiveTab('profile')}
            className={`flex flex-col items-center p-2 transition-colors ${activeTab === 'profile' ? 'text-primary' : 'text-white/40'}`}
          >
            <span className={`material-symbols-outlined mb-1 ${activeTab === 'profile' ? 'filled' : ''}`}>person</span>
            <span className="text-[10px] font-medium">Perfil</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default DashboardView;
