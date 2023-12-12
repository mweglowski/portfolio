import { useProjectPreviewContext } from "../store/project-preview-context";
import Backdrop from "./UI/Backdrop";

const ProjectPreview = () => {
  const { image, isDisplayed: isProjectPreviewDisplayed } =
    useProjectPreviewContext();

  return isProjectPreviewDisplayed ? (
    <div>
      <Backdrop>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl">Preview</h2>
          <img src={image} alt="project-preview" className="h-full rounded-lg mt-[4em] max-h-[500px] animate-slide-down" />
        </div>
      </Backdrop>
    </div>
  ) : null;
};

export default ProjectPreview;
