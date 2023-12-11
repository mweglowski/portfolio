import { useProjectPreviewContext } from "../store/project-preview-context";
import Backdrop from "./UI/Backdrop";

const ProjectPreview = () => {
  const { image, isDisplayed: isProjectPreviewDisplayed } =
    useProjectPreviewContext();

  return isProjectPreviewDisplayed ? (
    <div>
      <Backdrop>
        <div>siema</div>
        <img
          src={image}
          alt="project-preview"
          width={100}
          height={100}
        />
      </Backdrop>
    </div>
  ) : null;
};

export default ProjectPreview;
