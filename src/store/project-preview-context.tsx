import { createContext, useContext, useState, type ReactNode } from "react";

type ProjectPreviewContextValue = {
  isDisplayed: boolean;
  image: string;
  toggleDisplay: () => void;
  setImageSource: (image: string) => void;
}

// CONTEXT
export const ProjectPreviewContext = createContext<ProjectPreviewContextValue | null>(null);

// HOOK
export const useProjectPreviewContext = () => {
  const ProjectPreviewCtx = useContext(ProjectPreviewContext);

  if (ProjectPreviewCtx === null) {
    throw new Error('ProjectPreview ctx should not be equal to null!')
  }

  return ProjectPreviewCtx
}

// CONTEXT PROVIDER PROPS
type ProjectPreviewContextProviderProps = {
  children: ReactNode;
}

// CONTEXT PROVIDER
const ProjectPreviewContextProvider = ({ children }: ProjectPreviewContextProviderProps) => {
  const [isDisplayed, setDisplay] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");

  const ctx: ProjectPreviewContextValue = {
    isDisplayed,
    image,
    toggleDisplay() {
      setDisplay((prevDisplay) => {
        if (prevDisplay == true) {
          setImage("");
        }
        return !prevDisplay
      })
    },
    setImageSource(newImage) {
      setImage(newImage)
    }
  }

  return <ProjectPreviewContext.Provider value={ctx}>{children}</ProjectPreviewContext.Provider>
}

export default ProjectPreviewContextProvider;