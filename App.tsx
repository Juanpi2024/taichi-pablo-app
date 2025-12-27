
import React, { useState } from 'react';
import { AppView } from './types';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import DashboardView from './views/DashboardView';
import LevelDetailView from './views/LevelDetailView';
import ExerciseDetailView from './views/ExerciseDetailView';
import AIFeedbackView from './views/AIFeedbackView';
import Visualizer3DView from './views/Visualizer3DView';
import CustomPlanView from './views/CustomPlanView';
import OfflineManagerView from './views/OfflineManagerView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>('login');

  const renderView = () => {
    switch (currentView) {
      case 'login': return <LoginView onNavigate={setCurrentView} />;
      case 'register': return <RegisterView onNavigate={setCurrentView} />;
      case 'dashboard': return <DashboardView onNavigate={setCurrentView} />;
      case 'levels': return <DashboardView onNavigate={setCurrentView} initialTab="levels" />;
      case 'level-detail': return <LevelDetailView onNavigate={setCurrentView} />;
      case 'exercise-detail': return <ExerciseDetailView onNavigate={setCurrentView} />;
      case 'ai-feedback': return <AIFeedbackView onNavigate={setCurrentView} />;
      case 'visualizer-3d': return <Visualizer3DView onNavigate={setCurrentView} />;
      case 'custom-plan': return <CustomPlanView onNavigate={setCurrentView} />;
      case 'offline-manager': return <OfflineManagerView onNavigate={setCurrentView} />;
      default: return <LoginView onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full bg-slate-950 font-body">
      <div className="relative flex h-full w-full max-w-md flex-col bg-background-dark shadow-2xl overflow-hidden sm:rounded-[2rem] sm:h-[90vh] sm:border-4 sm:border-gray-800">
        {renderView()}
      </div>
    </div>
  );
};

export default App;
