import { useState } from 'react';
import Home from './components/Home';
import ModuleMenu from './components/ModuleMenu';
import ExerciseScreen from './components/ExerciseScreen';
import VocabularyCards from './components/VocabularyCards';
import WritingPractice from './components/WritingPractice';
import ErrorReview from './components/ErrorReview';
import { useProgress } from './hooks/useProgress';
import {
  presenteExercises,
  quiQueExercises,
  codExercises,
  preguntasExercises,
} from './data/exercises';

const MODULE_META = {
  presente:    { title: 'Presente',       desc: 'Completa con être, avoir o aller.',   exercises: presenteExercises },
  quique:      { title: 'Qui / Que',      desc: 'Elige el pronombre relativo correcto.', exercises: quiQueExercises },
  cod:         { title: 'COD',            desc: 'Sustituye el CD por le/la/les/l\'.',  exercises: codExercises },
  preguntas:   { title: 'Preguntas',      desc: 'Elige el interrogativo correcto.',    exercises: preguntasExercises },
};

export default function App() {
  const { progress, errorList, recordAnswer, saveSession } = useProgress();
  const [screen, setScreen] = useState('home');   // home | menu:id | practice:id | exam:id | vocab | redaccion | errores
  const [activeModule, setActiveModule] = useState(null);

  function navigate(dest) {
    if (['vocabulario', 'redaccion', 'errores'].includes(dest)) {
      setScreen(dest);
    } else {
      setActiveModule(dest);
      setScreen(`menu:${dest}`);
    }
  }

  function goHome() {
    setScreen('home');
    setActiveModule(null);
  }

  // Home
  if (screen === 'home') {
    return (
      <Home
        onNavigate={navigate}
        moduleStats={progress.moduleStats}
        errorCount={errorList.length}
        sessions={progress.sessions}
      />
    );
  }

  // Module menu
  if (screen.startsWith('menu:')) {
    const mod = MODULE_META[activeModule];
    return (
      <ModuleMenu
        title={mod.title}
        desc={mod.desc}
        onPractice={() => setScreen(`practice:${activeModule}`)}
        onExam={() => setScreen(`exam:${activeModule}`)}
        onHome={goHome}
      />
    );
  }

  // Practice / Exam exercise screens
  if (screen.startsWith('practice:') || screen.startsWith('exam:')) {
    const [modePrefix, modId] = screen.split(':');
    const mod = MODULE_META[modId];
    return (
      <ExerciseScreen
        key={screen}
        moduleId={modId}
        exercises={mod.exercises}
        mode={modePrefix}
        onHome={goHome}
        onRecord={recordAnswer}
        onSaveSession={saveSession}
      />
    );
  }

  // Vocabulary
  if (screen === 'vocabulario') {
    return (
      <VocabularyCards
        onHome={goHome}
        onRecord={recordAnswer}
        onSaveSession={saveSession}
      />
    );
  }

  // Writing
  if (screen === 'redaccion') {
    return <WritingPractice onHome={goHome} />;
  }

  // Error review
  if (screen === 'errores') {
    return (
      <ErrorReview
        errorList={errorList}
        onHome={goHome}
        onRecord={recordAnswer}
        onSaveSession={saveSession}
      />
    );
  }

  return null;
}
