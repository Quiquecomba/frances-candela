import { useState, useEffect } from 'react';

const STORAGE_KEY = 'candela_progress';

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function defaultState() {
  return {
    sessions: [],          // [{ date, module, score, total }]
    errors: {},            // { exerciseId: { exercise, failCount, passStreak } }
    moduleStats: {},       // { moduleId: { attempts, correct } }
  };
}

export function useProgress() {
  const [progress, setProgress] = useState(() => load() || defaultState());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  function recordAnswer(exercise, isCorrect, moduleId) {
    setProgress(prev => {
      const next = structuredClone(prev);

      // module stats
      if (!next.moduleStats[moduleId]) next.moduleStats[moduleId] = { attempts: 0, correct: 0 };
      next.moduleStats[moduleId].attempts += 1;
      if (isCorrect) next.moduleStats[moduleId].correct += 1;

      // errors tracking
      if (!isCorrect) {
        const existing = next.errors[exercise.id];
        next.errors[exercise.id] = {
          exercise,
          moduleId,
          failCount: (existing?.failCount ?? 0) + 1,
          passStreak: 0,
        };
      } else if (next.errors[exercise.id]) {
        const streak = (next.errors[exercise.id].passStreak ?? 0) + 1;
        if (streak >= 2) {
          delete next.errors[exercise.id];
        } else {
          next.errors[exercise.id].passStreak = streak;
        }
      }

      return next;
    });
  }

  function saveSession(moduleId, score, total) {
    setProgress(prev => {
      const next = structuredClone(prev);
      next.sessions = [
        { date: new Date().toISOString(), module: moduleId, score, total },
        ...next.sessions.slice(0, 49),
      ];
      return next;
    });
  }

  function clearErrors() {
    setProgress(prev => ({ ...prev, errors: {} }));
  }

  function resetAll() {
    setProgress(defaultState());
  }

  const errorList = Object.values(progress.errors);

  return { progress, errorList, recordAnswer, saveSession, clearErrors, resetAll };
}
