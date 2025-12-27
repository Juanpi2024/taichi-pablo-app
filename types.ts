
export type AppView =
  | 'login'
  | 'register'
  | 'dashboard'
  | 'levels'
  | 'level-detail'
  | 'exercise-detail'
  | 'ai-feedback'
  | 'visualizer-3d'
  | 'custom-plan'
  | 'offline-manager';

export interface Exercise {
  id: string;
  name: string;
  style: string;
  duration: string;
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado';
  description: string;
  tags: string[];
  thumbnail: string;
  isLocked?: boolean;
  instructions?: string[];
  videoUrl?: string;
}

export interface Level {
  id: number;
  name: string;
  description: string;
  progress: number;
  status: 'Completado' | 'En curso' | 'Bloqueado';
  exercises: Exercise[];
  thumbnail?: string;
}
