import { createContext, useContext, useState, type ReactNode } from "react";

type ModalContextValue = {
  isDisplayed: boolean;
  toggleDisplay: () => void;
}

// CONTEXT
export const ModalContext = createContext<ModalContextValue | null>(null);

// HOOK
export const useModalContext = () => {
  const modalCtx = useContext(ModalContext);

  if (modalCtx === null) {
    throw new Error('Modal ctx should not be equal to null!')
  }

  return modalCtx
}

// CONTEXT PROVIDER PROPS
type ModalContextProviderProps = {
  children: ReactNode;
}

// CONTEXT PROVIDER
const ModalContextProvider = ({ children }: ModalContextProviderProps) => {
  const [isDisplayed, setDisplay] = useState<boolean>(false);

  const ctx: ModalContextValue = {
    isDisplayed: false,
    toggleDisplay() {
      setDisplay((prevDisplay) => !prevDisplay)
    }
  }

  return <ModalContext.Provider value={ctx}>{children}</ModalContext.Provider>
}

export default ModalContextProvider;