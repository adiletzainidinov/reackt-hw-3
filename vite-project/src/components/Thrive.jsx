import ThriveImg from './ThriveImg.jsx';
import WhyThrive from './WhyThrive.jsx';
import cristofer from "../assets/img/christopher-campbell-40367.png"

const Thrive = () => {
  return (
    <>
      <div className="container thrive">
        <WhyThrive />
        <ThriveImg src={cristofer} />
      </div>
    </>
  );
};

export default Thrive;
