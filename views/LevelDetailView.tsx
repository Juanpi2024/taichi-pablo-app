
import React from 'react';
import { AppView } from '../types';

interface Props {
  onNavigate: (view: AppView) => void;
}

const LevelDetailView: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col flex-1 overflow-hidden relative">
      <header className="sticky top-0 z-50 flex items-center bg-background-dark p-4 pb-2 border-b border-white/5">
        <button 
          onClick={() => onNavigate('dashboard')}
          className="text-white flex size-10 items-center justify-center rounded-full hover:bg-white/10"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="flex flex-col items-center flex-1 mx-2">
          <p className="text-text-muted text-[10px] font-bold uppercase tracking-wider">Nivel 1: Fundamentos</p>
          <h2 className="text-white text-lg font-bold leading-tight">Ejercicios de Base</h2>
        </div>
        <button className="flex size-10 items-center justify-center rounded-full hover:bg-white/10 text-text-muted">
          <span className="material-symbols-outlined">help_outline</span>
        </button>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar pb-24">
        <div className="p-4">
          <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-xl border border-white/5 mb-6">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/level1/600/400')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div>
                <p className="text-primary text-xs font-bold tracking-wider mb-1">EN PROGRESO</p>
                <h2 className="text-white text-2xl font-bold">Tu Progreso</h2>
              </div>
              <p className="text-white text-3xl font-bold">75%</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="group flex items-center gap-4 bg-surface-dark p-3 rounded-xl border border-transparent hover:border-primary/20 cursor-pointer" onClick={() => onNavigate('exercise-detail')}>
              <div className="flex items-center justify-center rounded-full bg-primary/20 shrink-0 size-10 text-primary">
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
              </div>
              <div className="flex flex-col flex-1">
                <p className="text-white text-base font-medium line-clamp-1 opacity-60 line-through">Introducción al Qi</p>
                <p className="text-text-muted text-xs">5 min • Completado</p>
              </div>
            </div>

            <div className="group flex items-center gap-4 bg-surface-dark p-3 rounded-xl border-2 border-primary/50 shadow-lg cursor-pointer" onClick={() => onNavigate('exercise-detail')}>
              <div className="absolute -top-3 right-4 bg-primary text-background-dark text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Actual</div>
              <div className="flex items-center justify-center rounded-full bg-primary text-background-dark shrink-0 size-10 shadow-lg">
                <span className="material-symbols-outlined filled">play_arrow</span>
              </div>
              <div className="flex flex-col flex-1">
                <p className="text-white text-base font-bold">Movimiento de Agua</p>
                <p className="text-primary text-xs font-medium">10 min • En curso</p>
              </div>
            </div>

            <div className="group flex items-center gap-4 bg-surface-dark/50 p-3 rounded-xl opacity-60 cursor-not-allowed">
              <div className="flex items-center justify-center rounded-full bg-white/5 shrink-0 size-10 text-gray-500">
                <span className="material-symbols-outlined text-[20px]">lock</span>
              </div>
              <div className="flex flex-col flex-1">
                <p className="text-white/50 text-base font-medium">La Grulla Blanca</p>
                <p className="text-white/30 text-xs">12 min • Bloqueado</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="absolute bottom-0 left-0 w-full bg-background-dark p-4 border-t border-white/5 shadow-2xl z-20">
        <button 
          onClick={() => onNavigate('exercise-detail')}
          className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-[#0fd660] active:scale-95 transition-all text-background-dark font-bold text-base py-3.5 rounded-xl shadow-lg"
        >
          <span>Continuar Lección</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default LevelDetailView;
