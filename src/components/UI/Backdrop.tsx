import { type ReactNode } from "react";
import { useProjectPreviewContext } from "../../store/project-preview-context";

type BackdropProps = {
  children: ReactNode;
};

const Backdrop = ({ children }: BackdropProps) => {
  const { toggleDisplay } = useProjectPreviewContext();

  return (
    <div className="z-50 p-5 backdrop-blur-[10px] h-full w-full flex flex-col fixed" onClick={toggleDisplay}>
      {children}
    </div>
  );
};

export default Backdrop;
