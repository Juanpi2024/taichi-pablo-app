
import React from 'react';
import { AppView, Level, Exercise } from '../types';

interface Props {
  onNavigate: (view: AppView) => void;
  level: Level | null;
  onExerciseSelect: (exercise: Exercise) => void;
}

const LevelDetailView: React.FC<Props> = ({ onNavigate, level, onExerciseSelect }) => {
  if (!level) return null;

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
          <p className="text-text-muted text-[10px] font-bold uppercase tracking-wider">{level.name}</p>
          <h2 className="text-white text-lg font-bold leading-tight">Ejercicios</h2>
        </div>
        <button className="flex size-10 items-center justify-center rounded-full hover:bg-white/10 text-text-muted">
          <span className="material-symbols-outlined">help_outline</span>
        </button>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar pb-24">
        <div className="p-4">
          <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-xl border border-white/5 mb-6">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${level.exercises[0]?.thumbnail || 'https://picsum.photos/seed/level/600/400'})` }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div>
                <p className="text-primary text-xs font-bold tracking-wider mb-1">{level.status === 'Completado' ? 'FINALIZADO' : 'EN PROGRESO'}</p>
                <h2 className="text-white text-2xl font-bold">Tu Progreso</h2>
              </div>
              <p className="text-white text-3xl font-bold">{level.progress}%</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {level.exercises.map((exercise, idx) => {
              const isLocked = exercise.isLocked;
              return (
                <div
                  key={exercise.id}
                  className={`group relative flex items-center gap-4 bg-surface-dark p-4 rounded-xl border border-transparent hover:border-primary/20 cursor-pointer transition-all ${isLocked ? 'opacity-40 grayscale pointer-events-none' : ''}`}
                  onClick={() => !isLocked && onExerciseSelect(exercise)}
                >
                  <div className={`flex items-center justify-center rounded-full shrink-0 size-10 ${isLocked ? 'bg-white/5 text-gray-500' : 'bg-primary/20 text-primary'}`}>
                    <span className="material-symbols-outlined text-[20px]">
                      {isLocked ? 'lock' : 'play_arrow'}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1">
                    <p className={`text-white text-base font-bold ${isLocked ? 'text-white/50' : ''}`}>{exercise.name}</p>
                    <p className="text-text-muted text-xs">{exercise.duration} • {exercise.difficulty}</p>
                  </div>
                  {!isLocked && (
                    <span className="material-symbols-outlined text-white/20 group-hover:text-primary transition-colors">chevron_right</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 w-full bg-background-dark p-4 border-t border-white/5 shadow-2xl z-20 max-w-md mx-auto relative sm:rounded-b-[2rem]">
        <button
          onClick={() => level.exercises[0] && onExerciseSelect(level.exercises[0])}
          className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-[#0fd660] active:scale-95 transition-all text-background-dark font-bold text-base py-3.5 rounded-xl shadow-lg"
        >
          <span>{level.progress === 100 ? 'Repasar Nivel' : 'Continuar Lección'}</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default LevelDetailView;
