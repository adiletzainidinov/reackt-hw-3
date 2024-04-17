import Thrive from "./Thrive";
import css from "./ThriveImg.module.css"

const ThriveImg = ({src}) => {
  return (
    <>
      <div className={css.thriveimg}>
        <img src={src} alt="img" />
      </div>
    </>
  );
};

export default ThriveImg;
