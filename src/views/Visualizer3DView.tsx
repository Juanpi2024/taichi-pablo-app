
import React, { useState } from 'react';
import { AppView } from '../types';

interface Props {
  onNavigate: (view: AppView) => void;
}

const Visualizer3DView: React.FC<Props> = ({ onNavigate }) => {
  const [zoom, setZoom] = useState(60);

  return (
    <div className="relative h-full w-full bg-background-dark font-display antialiased overflow-hidden">
      {/* 3D Simulation Layer */}
      <div className="absolute inset-0 w-full h-full z-0 bg-black">
        <div className="w-full h-full bg-center bg-cover bg-no-repeat opacity-80 mix-blend-screen grayscale contrast-125" style={{ backgroundImage: "url('https://picsum.photos/seed/skeleton/800/1200')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background-dark/90"></div>
        
        {/* Animated Nodes Simulation */}
        <div className="absolute top-[35%] left-[30%] animate-pulse z-10">
          <div className="relative flex items-center group cursor-pointer">
            <button className="size-8 rounded-full bg-primary/20 flex items-center justify-center ring-1 ring-primary/50">
              <div className="size-2.5 rounded-full bg-primary shadow-2xl"></div>
            </button>
            <div className="absolute left-10 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-primary/30 text-xs text-white whitespace-nowrap">
              <span className="text-primary font-bold">Codo:</span> 120°
            </div>
          </div>
        </div>
      </div>

      <header className="absolute top-0 w-full z-50 p-4 pt-10 flex items-center justify-between">
        <button 
          onClick={() => onNavigate('ai-feedback')}
          className="flex size-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white border border-white/5"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
          <span className="size-2 rounded-full bg-primary animate-pulse"></span>
          <h1 className="text-white text-sm font-bold tracking-wide uppercase">Grulla Blanca</h1>
          <span className="material-symbols-outlined text-white/50 text-[18px]">expand_more</span>
        </div>
        <button className="flex size-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white border border-white/5">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </header>

      <aside className="absolute right-4 top-24 bottom-32 z-40 flex flex-col justify-between items-end">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 justify-end group">
            <span className="text-white text-[10px] font-medium bg-black/60 px-2 py-1 rounded border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">Rotar 360°</span>
            <button className="flex size-12 items-center justify-center rounded-full bg-black/50 backdrop-blur-xl border border-white/10 text-white hover:bg-primary hover:text-black transition-all">
              <span className="material-symbols-outlined">360</span>
            </button>
          </div>
          <div className="flex items-center gap-3 justify-end group">
            <span className="text-white text-[10px] font-medium bg-black/60 px-2 py-1 rounded border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">Esqueleto</span>
            <button className="flex size-12 items-center justify-center rounded-full bg-black/50 backdrop-blur-xl border border-white/10 text-white">
              <span className="material-symbols-outlined">accessibility_new</span>
            </button>
          </div>
          <div className="flex items-center gap-3 justify-end group">
            <span className="text-white text-[10px] font-medium bg-black/60 px-2 py-1 rounded border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">Centrar</span>
            <button className="flex size-12 items-center justify-center rounded-full bg-white text-black shadow-2xl">
              <span className="material-symbols-outlined">center_focus_strong</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 mt-auto">
          <div className="bg-black/40 backdrop-blur-xl rounded-full p-1.5 border border-white/10 flex flex-col items-center gap-1 shadow-lg">
            <button onClick={() => setZoom(z => Math.min(100, z + 5))} className="size-10 flex items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors"><span className="material-symbols-outlined">add</span></button>
            <div className="h-24 w-1.5 bg-white/10 rounded-full relative my-1 overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full bg-primary rounded-full" style={{ height: `${zoom}%` }}></div>
            </div>
            <button onClick={() => setZoom(z => Math.max(0, z - 5))} className="size-10 flex items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors"><span className="material-symbols-outlined">remove</span></button>
          </div>
          <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest bg-black/40 px-2 py-0.5 rounded border border-white/5">Zoom</span>
        </div>
      </aside>

      <footer className="absolute bottom-0 w-full z-50 bg-gradient-to-t from-background-dark via-background-dark/95 to-transparent pt-16 pb-8 px-6 rounded-t-[2.5rem] border-t border-white/5">
        <div className="mb-8 space-y-3">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-primary/20 text-primary px-2.5 py-1 rounded text-[10px] font-bold tracking-wider uppercase border border-primary/20">Postura Clave</span>
            <span className="text-white/60 text-xs">Paso 3 de 12</span>
          </div>
          <h2 className="text-white text-3xl font-bold leading-tight">Despliega sus alas</h2>
          <p className="text-white/70 text-sm font-light leading-relaxed max-w-sm line-clamp-2">
            Mantén la espalda recta y relaja los hombros mientras transfieres el peso a la pierna derecha.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4 px-1">
            <span className="text-white/50 text-xs font-mono">00:12</span>
            <div className="relative flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-primary" style={{ width: '35%' }}></div>
              <div className="absolute top-1/2 left-[35%] -translate-y-1/2 size-4 bg-white rounded-full shadow-lg cursor-pointer"></div>
            </div>
            <span className="text-white/50 text-xs font-mono">00:45</span>
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div className="flex flex-col items-start gap-1.5">
              <span className="text-[9px] text-white/40 uppercase tracking-widest font-bold ml-1">Velocidad</span>
              <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/5">
                <button className="px-3 py-1.5 text-xs font-bold text-background-dark bg-primary rounded-full">1.0x</button>
              </div>
            </div>
            <div className="flex items-center gap-6 justify-center">
              <button className="text-white/70 hover:text-white transition-all"><span className="material-symbols-outlined text-[32px]">skip_previous</span></button>
              <button className="flex items-center justify-center size-16 rounded-full bg-white text-background-dark shadow-2xl"><span className="material-symbols-outlined text-[40px] ml-1 filled">play_arrow</span></button>
              <button className="text-white/70 hover:text-white transition-all"><span className="material-symbols-outlined text-[32px]">skip_next</span></button>
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <span className="text-[9px] text-white/40 uppercase tracking-widest font-bold mr-1">Guardar</span>
              <button className="size-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80"><span className="material-symbols-outlined text-[20px]">bookmark_border</span></button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Visualizer3DView;
