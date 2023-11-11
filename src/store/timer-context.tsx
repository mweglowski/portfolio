import { createContext, useContext, useState, type ReactNode } from 'react';

type TimerContextValue = {
  startTime: Date;
  setStartTime: (date: Date) => void;
}

export const TimerContext = createContext<TimerContextValue | null>(null);

export const useTimerContext = () => {
  const timerCtx = useContext(TimerContext);

  if (timerCtx === null) {
    throw new Error('Timer ctx should not be equal to null!')
  }

  return timerCtx;
}

type TimerContextProviderProps = {
  children: ReactNode;
}

const TimerContextProvider = ({ children }: TimerContextProviderProps) => {
  const [startTime, updateStartTime] = useState<Date>(new Date());

  const ctx: TimerContextValue = {
    startTime: new Date(),
    setStartTime(date) {
      updateStartTime(date);
    }
  }

  return <TimerContext.Provider value={ctx}>{children}</TimerContext.Provider>
}

export default TimerContextProvider;