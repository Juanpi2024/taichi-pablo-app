
import React, { useState } from 'react';
import { AppView } from '../types';

interface Props {
  onNavigate: (view: AppView) => void;
}

const CustomPlanView: React.FC<Props> = ({ onNavigate }) => {
  const [duration, setDuration] = useState(23);
  const [days, setDays] = useState(['M', 'J', 'S']);

  const toggleDay = (day: string) => {
    setDays(prev => prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]);
  };

  return (
    <div className="bg-background-dark flex flex-col flex-1 h-full font-display text-white overflow-hidden relative">
      <header className="sticky top-0 z-50 bg-background-dark/95 backdrop-blur-sm border-b border-white/5 p-4 flex items-center justify-between">
        <button onClick={() => onNavigate('dashboard')} className="text-white flex size-10 items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h2 className="text-white text-lg font-bold text-center">Nuevo Plan</h2>
        <div className="w-10"></div>
      </header>

      <main className="flex-1 flex flex-col gap-6 px-4 py-6 overflow-y-auto no-scrollbar pb-28">
        <div className="flex flex-col gap-2">
          <label className="text-text-muted text-sm font-medium ml-1">Nombre del Plan</label>
          <div className="relative group">
            <input 
              className="w-full bg-surface-dark border-2 border-transparent focus:border-primary/50 text-white text-xl font-bold rounded-xl px-4 py-4 pr-12 outline-none transition-all" 
              placeholder="Ej. Mi Rutina Matutina" 
              type="text" 
              defaultValue="Flujo de Energía Matutino" 
            />
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-primary">edit</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-white text-lg font-bold">Ejercicios</h3>
            <span className="text-xs font-medium text-text-muted bg-white/5 px-2 py-1 rounded-md">3 Seleccionados</span>
          </div>
          
          <div className="flex flex-col gap-3">
            {['Grulla Blanca', 'Manos como Nubes', 'Enraizar el Árbol'].map((name, i) => (
              <div key={name} className="flex items-center gap-3 bg-surface-dark p-3 rounded-xl border border-white/5">
                <span className="material-symbols-outlined text-text-muted text-xl">drag_indicator</span>
                <div className="shrink-0 size-14 rounded-lg bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/seed/${name}/100/100')` }}></div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-medium truncate">{name}</h4>
                  <p className="text-xs text-text-muted">8 min • {i % 2 === 0 ? 'Principiante' : 'Intermedio'}</p>
                </div>
                <button className="p-2 text-text-muted hover:text-red-400"><span className="material-symbols-outlined text-xl">remove_circle</span></button>
              </div>
            ))}
          </div>

          <button className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-white/10 py-3 text-primary hover:bg-primary/5 transition-all">
            <span className="material-symbols-outlined">add_circle</span>
            <span className="font-bold text-sm">Añadir Ejercicio</span>
          </button>
        </div>

        <div className="flex flex-col gap-6 pt-4">
          <h3 className="text-white text-lg font-bold">Configuración</h3>
          
          <div className="flex flex-col gap-3">
            <label className="text-text-muted text-sm font-medium ml-1">Frecuencia Semanal</label>
            <div className="flex justify-between items-center bg-surface-dark p-3 rounded-xl">
              {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d, i) => {
                const isSelected = days.includes(d);
                return (
                  <button 
                    key={i} 
                    onClick={() => toggleDay(d)}
                    className={`size-9 rounded-full flex items-center justify-center text-xs font-bold transition-all ${isSelected ? 'bg-primary text-background-dark shadow-xl' : 'bg-white/5 text-text-muted'}`}
                  >
                    {d}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-end px-1">
              <label className="text-text-muted text-sm font-medium">Duración Total</label>
              <span className="text-primary font-bold text-lg">{duration} min</span>
            </div>
            <div className="bg-surface-dark p-4 rounded-xl">
              <input 
                className="w-full h-2 rounded-full appearance-none cursor-pointer bg-white/10 accent-primary" 
                max="60" min="5" 
                type="range" 
                value={duration}
                onChange={(e) => setDuration(parseInt(e.target.value))}
              />
              <div className="flex justify-between text-[10px] text-text-muted font-medium mt-2 px-1">
                <span>5 min</span>
                <span>30 min</span>
                <span>60 min</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 w-full p-4 bg-gradient-to-t from-background-dark to-transparent z-40 safe-area-bottom">
        <button 
          onClick={() => onNavigate('dashboard')}
          className="w-full bg-primary hover:bg-[#0fd660] text-background-dark font-bold text-base h-12 rounded-xl flex items-center justify-center gap-2 shadow-2xl active:scale-[0.98] transition-all"
        >
          <span>Guardar Plan</span>
          <span className="material-symbols-outlined text-lg">check</span>
        </button>
      </div>
    </div>
  );
};

export default CustomPlanView;
