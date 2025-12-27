
import React from 'react';
import { AppView } from '../types';

interface Props {
  onNavigate: (view: AppView) => void;
}

const OfflineManagerView: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col flex-1 h-full bg-background-dark overflow-hidden relative">
      <header className="sticky top-0 z-50 flex items-center bg-background-dark/95 backdrop-blur-md p-4 pb-2 justify-between border-b border-white/5">
        <button onClick={() => onNavigate('dashboard')} className="text-white flex size-10 shrink-0 items-center justify-center hover:bg-white/10 rounded-full">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h2 className="text-white text-lg font-bold flex-1 text-center">Gestión Sin Conexión</h2>
        <div className="w-12 text-right">
          <button className="text-primary text-sm font-bold">Editar</button>
        </div>
      </header>

      <main className="flex-1 flex flex-col p-4 gap-6 overflow-y-auto no-scrollbar">
        <section className="flex flex-col gap-3 rounded-2xl bg-surface-dark p-5 border border-white/5">
          <div className="flex justify-between items-center">
            <p className="text-white text-base font-bold">Almacenamiento Local</p>
            <span className="material-symbols-outlined text-text-muted">sd_storage</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-end">
              <span className="text-3xl font-bold text-white tracking-tight">2.4 <span className="text-sm font-medium text-text-muted">GB Usados</span></span>
              <span className="text-sm font-medium text-text-muted mb-1">5.0 GB Total</span>
            </div>
            <div className="relative w-full h-3 bg-black/40 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-primary rounded-full" style={{ width: '48%' }}></div>
              <div className="absolute top-0 left-[48%] h-full bg-primary/30 w-[15%]"></div>
            </div>
            <div className="flex justify-between mt-1 text-[10px] text-text-muted">
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-primary"></div> Tai Chi App</div>
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-primary/30"></div> Otros</div>
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-black/40"></div> Libre</div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-surface-dark px-4 py-4 border border-white/5 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-xl">cloud_sync</span>
              <p className="text-white text-base font-medium">Descarga Inteligente</p>
            </div>
            <p className="text-text-muted text-xs">Guardar automáticamente tus planes favoritos.</p>
          </div>
          <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary cursor-pointer">
            <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition" />
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between pb-3">
            <h3 className="text-white text-lg font-bold">Descargas Guardadas</h3>
            <button className="text-xs text-text-muted hover:text-white transition-colors">Ordenar</button>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { name: 'Fundamentos de Tai Chi', size: '450 MB', type: 'Video', date: 'Hace 2 días' },
              { name: 'Meditación en Movimiento', size: '120 MB', type: 'Audio', date: 'Hace 1 semana' },
              { name: 'Forma de 108 Movimientos', size: '800 MB', type: 'Serie', date: 'Hace 3 semanas' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-surface-dark p-3 rounded-xl border border-white/5 hover:border-primary/30 transition-all">
                <div className="relative shrink-0">
                  <div className="bg-center bg-cover rounded-lg size-16" style={{ backgroundImage: `url('https://picsum.photos/seed/${item.name}/100/100')` }}></div>
                  <div className="absolute -bottom-1 -right-1 bg-background-dark rounded-full p-0.5">
                    <span className="material-symbols-outlined text-primary text-[14px] filled">check_circle</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold truncate">{item.name}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-primary/10 text-primary border border-primary/20 uppercase">{item.type}</span>
                    <p className="text-text-muted text-xs truncate">{item.size} • {item.date}</p>
                  </div>
                </div>
                <button className="p-2 text-text-muted hover:text-red-400 transition-colors">
                  <span className="material-symbols-outlined text-xl">delete</span>
                </button>
              </div>
            ))}
          </div>
        </section>

        <button className="w-full flex items-center justify-center gap-3 rounded-xl border-2 border-dashed border-white/10 p-4 hover:bg-primary/5 transition-all mt-4 mb-10">
          <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <span className="material-symbols-outlined">add</span>
          </div>
          <div className="text-left">
            <span className="text-white font-bold block">Descargar contenido</span>
            <span className="text-text-muted text-xs">Explora la biblioteca offline</span>
          </div>
        </button>
      </main>
    </div>
  );
};

export default OfflineManagerView;
