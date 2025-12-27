
import React, { useState, useEffect, useMemo } from 'react';
import { AppView } from '../types';

interface Props {
  onNavigate: (view: AppView) => void;
}

type CorrectionType = 'BACK' | 'HIPS' | 'SHOULDERS' | 'NONE';

interface CorrectionState {
  type: CorrectionType;
  message: string;
  intensity: number; // 0 to 1
}

const AIFeedbackView: React.FC<Props> = ({ onNavigate }) => {
  const [timer, setTimer] = useState(45);
  const [precision, setPrecision] = useState(72);
  const [activeCorrection, setActiveCorrection] = useState<CorrectionState>({
    type: 'NONE',
    message: '',
    intensity: 0
  });

  // Simulate real-time detection logic
  useEffect(() => {
    const cycle = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 45));
      
      // Randomly simulate different posture issues
      const rand = Math.random();
      if (rand > 0.8) {
        setActiveCorrection({
          type: 'HIPS',
          message: 'Baja la cadera',
          intensity: 0.8
        });
        setPrecision(prev => Math.max(60, prev - 5));
      } else if (rand > 0.6) {
        setActiveCorrection({
          type: 'BACK',
          message: 'Endereza la espalda',
          intensity: 0.9
        });
        setPrecision(prev => Math.max(65, prev - 3));
      } else if (rand > 0.4) {
        setActiveCorrection({
          type: 'SHOULDERS',
          message: 'Relaja los hombros',
          intensity: 0.6
        });
        setPrecision(prev => Math.max(75, prev - 2));
      } else {
        setActiveCorrection({ type: 'NONE', message: '¡Excelente postura!', intensity: 0 });
        setPrecision(prev => Math.min(98, prev + 2));
      }
    }, 3000);

    return () => clearInterval(cycle);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Dynamic skeleton path for the spine
  const spinePath = useMemo(() => {
    const isError = activeCorrection.type === 'BACK';
    // If back error, make the spine curved
    return isError 
      ? "M200,230 Q230,340 200,450" // Curved
      : "M200,230 Q200,340 200,450"; // Straight
  }, [activeCorrection.type]);

  return (
    <div className="relative h-full w-full bg-surface-dark overflow-hidden flex flex-col">
      {/* Live Feed Simulator */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center z-0 transition-all duration-700" 
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510832198440-a52376950479?auto=format&fit=crop&q=80&w=800')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
        <div className="scan-line"></div>
      </div>

      {/* Skeleton Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
        <svg className="w-full h-full opacity-90 drop-shadow-[0_0_8px_rgba(18,226,105,0.4)]" viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <filter id="glow">
              <feGaussianBlur result="coloredBlur" stdDeviation="3"></feGaussianBlur>
              <feMerge>
                <feMergeNode in="coloredBlur"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#fbbf24" />
            </marker>
          </defs>

          {/* HEAD & NECK */}
          <circle cx="200" cy="180" fill="#12e269" r="6" filter="url(#glow)"></circle>
          <line x1="200" y1="180" x2="200" y2="230" stroke="#12e269" strokeWidth="4" filter="url(#glow)"></line>

          {/* SHOULDERS */}
          <line 
            x1="200" y1="230" x2="150" y2={activeCorrection.type === 'SHOULDERS' ? "210" : "250"} 
            stroke={activeCorrection.type === 'SHOULDERS' ? "#fbbf24" : "#12e269"} 
            strokeWidth="4" className="transition-all duration-500" 
          ></line>
          <line 
            x1="200" y1="230" x2="250" y2={activeCorrection.type === 'SHOULDERS' ? "210" : "250"} 
            stroke={activeCorrection.type === 'SHOULDERS' ? "#fbbf24" : "#12e269"} 
            strokeWidth="4" className="transition-all duration-500"
          ></line>

          {/* SPINE (Dynamic) */}
          <path 
            d={spinePath} 
            fill="none" 
            stroke={activeCorrection.type === 'BACK' ? "#ef4444" : "#12e269"} 
            strokeWidth="5" 
            className="transition-all duration-500"
            filter="url(#glow)"
          ></path>

          {/* HIPS & LEGS */}
          <line 
            x1="200" y1="450" x2="160" y2="480" 
            stroke={activeCorrection.type === 'HIPS' ? "#ef4444" : "#12e269"} 
            strokeWidth="4"
          ></line>
          <line 
            x1="200" y1="450" x2="240" y2="480" 
            stroke={activeCorrection.type === 'HIPS' ? "#ef4444" : "#12e269"} 
            strokeWidth="4"
          ></line>
          <line x1="160" y1="480" x2="150" y2="620" stroke="#12e269" strokeWidth="4"></line>
          <line x1="240" y1="480" x2="250" y2="620" stroke="#12e269" strokeWidth="4"></line>

          {/* CORRECTION ARROWS */}
          {activeCorrection.type === 'HIPS' && (
            <g className="animate-pulse">
              <line x1="200" y1="420" x2="200" y2="480" stroke="#fbbf24" strokeWidth="3" markerEnd="url(#arrowhead)" />
              <line x1="170" y1="420" x2="170" y2="480" stroke="#fbbf24" strokeWidth="3" markerEnd="url(#arrowhead)" />
              <line x1="230" y1="420" x2="230" y2="480" stroke="#fbbf24" strokeWidth="3" markerEnd="url(#arrowhead)" />
            </g>
          )}

          {activeCorrection.type === 'SHOULDERS' && (
            <g className="animate-bounce">
              <line x1="140" y1="200" x2="140" y2="240" stroke="#fbbf24" strokeWidth="3" markerEnd="url(#arrowhead)" />
              <line x1="260" y1="200" x2="260" y2="240" stroke="#fbbf24" strokeWidth="3" markerEnd="url(#arrowhead)" />
            </g>
          )}

          {activeCorrection.type === 'BACK' && (
            <g className="animate-pulse">
              <path d="M250,340 L210,340" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrowhead)" />
            </g>
          )}
        </svg>
      </div>

      {/* AR Feedback Chips (Floating UI) */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {activeCorrection.type !== 'NONE' && (
          <div 
            className="absolute transition-all duration-500 ease-out"
            style={{ 
              top: activeCorrection.type === 'SHOULDERS' ? '25%' : activeCorrection.type === 'BACK' ? '42%' : '58%',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          >
            <div className={`flex items-center gap-3 rounded-2xl ${activeCorrection.type === 'BACK' ? 'bg-red-500/90' : 'bg-warning/90'} backdrop-blur-md px-4 py-3 shadow-[0_0_20px_rgba(0,0,0,0.4)] border border-white/20 animate-in fade-in zoom-in duration-300`}>
              <div className="bg-white/20 rounded-full p-1.5">
                <span className="material-symbols-outlined text-white text-xl filled">
                  {activeCorrection.type === 'BACK' ? 'priority_high' : 'info'}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-sm font-bold tracking-tight leading-tight">
                  {activeCorrection.message}
                </span>
                <span className="text-white/70 text-[10px] uppercase font-black tracking-widest mt-0.5">
                  Corrección en tiempo real
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main UI Controls */}
      <div className="relative z-30 flex h-full flex-col justify-between">
        <div className="flex items-center justify-between p-4 pt-8 bg-gradient-to-b from-black/90 via-black/40 to-transparent">
          <button onClick={() => onNavigate('exercise-detail')} className="flex size-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl text-white border border-white/10">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="size-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">IA Activa</span>
            </div>
            <h2 className="text-white text-xl font-bold tracking-tight">Grulla Blanca</h2>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-xl px-4 py-2 border border-white/10">
            <span className="material-symbols-outlined text-primary text-[18px] filled">timer</span>
            <p className="text-white text-sm font-mono font-bold">{formatTime(timer)}</p>
          </div>
        </div>

        <div className="w-full bg-glass backdrop-blur-2xl rounded-t-[2.5rem] border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] pb-8 pt-2">
          <div className="flex justify-center py-2">
            <div className="h-1.5 w-12 rounded-full bg-white/10"></div>
          </div>
          
          <div className="px-6 py-4">
            <div className="flex justify-between items-end mb-4">
              <div className="flex flex-col gap-1">
                <p className="text-white/50 text-[10px] font-black uppercase tracking-widest">Precisión del Flujo</p>
                <div className="flex items-baseline gap-1">
                  <h3 className="text-white text-4xl font-display font-bold leading-none tracking-tighter">
                    {Math.floor(precision)}
                  </h3>
                  <span className="text-primary text-xl font-bold">%</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider border shadow-sm transition-colors duration-500
                  ${precision > 80 ? 'bg-primary/20 text-primary border-primary/30' : 'bg-warning/20 text-warning border-warning/30'}`}>
                  <span className="material-symbols-outlined text-[14px] filled">
                    {precision > 80 ? 'verified' : 'pending'}
                  </span>
                  {precision > 80 ? 'Perfecto' : 'Ajustando'}
                </div>
                <p className="text-white/40 text-[10px] font-medium italic">Sigue el ritmo del agua...</p>
              </div>
            </div>
            
            <div className="relative h-4 w-full rounded-full bg-white/5 overflow-hidden border border-white/5 shadow-inner">
              <div 
                className={`absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(18,226,105,0.4)]
                  ${precision > 80 ? 'bg-gradient-to-r from-primary/60 to-primary' : 'bg-gradient-to-r from-orange-500 to-warning'}`} 
                style={{ width: `${precision}%` }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:20px_20px] animate-[move_1s_linear_infinite]"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between px-6 pt-2 gap-5">
            <div className="flex gap-3">
              <button className="flex items-center justify-center size-14 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all active:scale-90">
                <span className="material-symbols-outlined text-[24px]">volume_up</span>
              </button>
              <button className="flex items-center justify-center size-14 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all active:scale-90">
                <span className="material-symbols-outlined text-[24px]">cameraswitch</span>
              </button>
            </div>
            
            <button className="flex-1 h-16 bg-primary hover:bg-[#0fd660] transition-all rounded-2xl flex items-center justify-center gap-3 text-background-dark font-black text-lg shadow-xl shadow-primary/20 active:scale-95 group">
              <span className="material-symbols-outlined text-[28px] filled group-hover:scale-110 transition-transform">pause_circle</span>
              <span>PAUSAR</span>
            </button>

            <button 
              onClick={() => onNavigate('dashboard')}
              className="flex items-center justify-center size-14 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500/20 transition-all active:scale-90"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes move {
          0% { background-position: 0 0; }
          100% { background-position: 40px 0; }
        }
      `}</style>
    </div>
  );
};

export default AIFeedbackView;
