
import React from 'react';
import { AppView } from '../types';

interface Props {
  onNavigate: (view: AppView) => void;
}

const ExerciseDetailView: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col flex-1 overflow-x-hidden relative">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-background-dark/95 backdrop-blur-md px-4 py-3 border-b border-white/5">
        <button onClick={() => onNavigate('level-detail')} className="flex size-10 items-center justify-center rounded-full hover:bg-white/10 text-white">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-base font-bold flex-1 text-center truncate px-4 text-white">Detalle del Ejercicio</h2>
        <button className="flex size-10 items-center justify-center rounded-full hover:bg-white/10 text-white">
          <span className="material-symbols-outlined">more_horiz</span>
        </button>
      </header>

      <div className="relative w-full aspect-video bg-black overflow-hidden group">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/taichi-hero/600/400')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex items-center justify-center">
          <button 
            onClick={() => onNavigate('ai-feedback')}
            className="flex shrink-0 items-center justify-center rounded-full size-16 bg-primary/90 text-background-dark shadow-xl hover:scale-110 transition-transform"
          >
            <span className="material-symbols-outlined text-4xl ml-1 filled">play_arrow</span>
          </button>
        </div>
        <div className="absolute bottom-4 right-4 z-10">
          <button className="flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md border border-white/10">
            <span className="material-symbols-outlined text-[18px]">videocam</span>
            <span>Ángulo: Frontal</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col px-5 pt-6 pb-24 overflow-y-auto no-scrollbar">
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-white mb-2">La Grulla Blanca Extiende sus Alas</h1>
          <p className="text-sm text-text-muted font-medium">Estilo Yang • Forma 24</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-6 items-center">
          <div className="flex h-8 shrink-0 items-center gap-x-2 rounded-lg bg-primary/10 pl-3 pr-4 border border-primary/20">
            <span className="material-symbols-outlined text-primary text-[18px]">signal_cellular_alt</span>
            <p className="text-primary text-[10px] font-bold uppercase tracking-wide">Intermedio</p>
          </div>
          <div className="flex h-8 shrink-0 items-center gap-x-2 rounded-lg bg-white/5 pl-3 pr-4">
            <span className="material-symbols-outlined text-text-muted text-[18px]">timer</span>
            <p className="text-gray-300 text-sm font-medium">5 min</p>
          </div>
          <div className="flex h-8 shrink-0 items-center gap-x-2 rounded-lg bg-white/5 pl-3 pr-4">
            <span className="material-symbols-outlined text-text-muted text-[18px]">local_fire_department</span>
            <p className="text-gray-300 text-sm font-medium">45 kcal</p>
          </div>
        </div>

        <div className="flex border-b border-white/10 mb-6">
          <button className="flex-1 pb-3 text-sm font-bold text-primary border-b-2 border-primary">Instrucciones</button>
          <button className="flex-1 pb-3 text-sm font-medium text-text-muted">Descripción</button>
          <button className="flex-1 pb-3 text-sm font-medium text-text-muted">Notas</button>
        </div>

        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="size-8 shrink-0 rounded-full bg-primary text-background-dark font-bold flex items-center justify-center text-sm">1</div>
              <div className="w-0.5 grow bg-white/10 my-2"></div>
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">Posición Inicial</h4>
              <p className="text-sm text-text-muted leading-relaxed">
                Comienza en postura Wu Ji, con los pies separados a la anchura de los hombros. Relaja las rodillas y mantén la columna recta.
              </p>
              <div className="mt-3 rounded-lg bg-white/5 h-24 w-full overflow-hidden bg-center bg-cover" style={{ backgroundImage: "url('https://picsum.photos/seed/feet/300/150')" }}></div>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="size-8 shrink-0 rounded-full bg-white/10 text-white font-bold flex items-center justify-center text-sm">2</div>
              <div className="w-0.5 grow bg-white/10 my-2"></div>
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">Apertura de Brazos</h4>
              <p className="text-sm text-text-muted leading-relaxed">
                Levanta la mano derecha suavemente hacia arriba y la izquierda hacia abajo, formando una esfera imaginaria.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full p-4 bg-gradient-to-t from-background-dark to-transparent safe-area-bottom">
        <button 
          onClick={() => onNavigate('ai-feedback')}
          className="w-full bg-primary text-background-dark font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-2xl shadow-primary/30"
        >
          <span className="material-symbols-outlined filled">self_improvement</span>
          Comenzar Práctica
        </button>
      </div>
    </div>
  );
};

export default ExerciseDetailView;
