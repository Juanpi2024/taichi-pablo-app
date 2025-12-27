
import React, { useState } from 'react';
import { AppView, Exercise } from '../types';

interface Props {
  onNavigate: (view: AppView) => void;
  exercise: Exercise | null;
}

const ExerciseDetailView: React.FC<Props> = ({ onNavigate, exercise }) => {
  const [activeTab, setActiveTab] = useState<'instruc' | 'desc' | 'notes'>('instruc');

  if (!exercise) return null;

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
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${exercise.thumbnail})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex items-center justify-center">
          <button
            onClick={() => onNavigate('ai-feedback')}
            className="flex shrink-0 items-center justify-center rounded-full size-16 bg-primary/90 text-background-dark shadow-xl hover:scale-110 transition-transform"
          >
            <span className="material-symbols-outlined text-4xl ml-1 filled">play_arrow</span>
          </button>
        </div>
        <div className="absolute bottom-4 right-4 z-10 flex gap-2">
          <button onClick={() => onNavigate('visualizer-3d')} className="flex items-center gap-2 rounded-full bg-surface-dark/80 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md border border-white/10">
            <span className="material-symbols-outlined text-[18px]">3d_rotation</span>
            <span>Ver 3D</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col px-5 pt-6 pb-24 overflow-y-auto no-scrollbar">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-white mb-2">{exercise.name}</h1>
          <p className="text-sm text-text-muted font-medium">{exercise.style} • {exercise.difficulty}</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-6 items-center">
          <div className="flex h-8 shrink-0 items-center gap-x-2 rounded-lg bg-primary/10 pl-3 pr-4 border border-primary/20">
            <span className="material-symbols-outlined text-primary text-[18px]">timer</span>
            <p className="text-primary text-[10px] font-bold uppercase tracking-wide">{exercise.duration}</p>
          </div>
          <div className="flex h-8 shrink-0 items-center gap-x-2 rounded-lg bg-white/5 pl-3 pr-4">
            <span className="material-symbols-outlined text-text-muted text-[18px]">tag</span>
            <p className="text-gray-300 text-[10px] font-medium">{exercise.tags.join(', ')}</p>
          </div>
        </div>

        <div className="flex border-b border-white/10 mb-6">
          <button
            onClick={() => setActiveTab('instruc')}
            className={`flex-1 pb-3 text-sm font-bold transition-colors ${activeTab === 'instruc' ? 'text-primary border-b-2 border-primary' : 'text-text-muted'}`}
          >
            Instrucciones
          </button>
          <button
            onClick={() => setActiveTab('desc')}
            className={`flex-1 pb-3 text-sm font-bold transition-colors ${activeTab === 'desc' ? 'text-primary border-b-2 border-primary' : 'text-text-muted'}`}
          >
            Descripción
          </button>
        </div>

        {activeTab === 'instruc' && (
          <div className="space-y-6">
            {exercise.instructions ? (
              exercise.instructions.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="size-8 shrink-0 rounded-full bg-primary text-background-dark font-bold flex items-center justify-center text-sm">{idx + 1}</div>
                    {idx < (exercise.instructions?.length || 0) - 1 && <div className="w-0.5 grow bg-white/10 my-2"></div>}
                  </div>
                  <div>
                    <p className="text-sm text-text-muted leading-relaxed pt-1">{step}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4 rounded-xl bg-surface-dark border border-white/5 text-center">
                <p className="text-sm text-text-muted italic">Carga de instrucciones técnicas desde la documentación...</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'desc' && (
          <div className="bg-surface-dark/50 p-5 rounded-2xl border border-white/5">
            <p className="text-sm text-text-muted leading-relaxed">
              {exercise.description}
            </p>
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 w-full p-4 bg-gradient-to-t from-background-dark to-transparent safe-area-bottom max-w-md mx-auto relative sm:rounded-b-[2rem]">
        <button
          onClick={() => onNavigate('ai-feedback')}
          className="w-full bg-primary text-background-dark font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-2xl shadow-primary/30 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined filled">self_improvement</span>
          Comenzar Práctica IA
        </button>
      </div>
    </div>
  );
};

export default ExerciseDetailView;
