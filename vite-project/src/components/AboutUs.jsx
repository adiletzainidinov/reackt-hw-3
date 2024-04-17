import HtwoAboutUs from './HtwoAboutUs';
import PAboutUs from './PAboutUs';
import WeHelp from './WeHelp';

const AboutUs = () => {
  return (
    <>
      <div className="container about-us">
        <div>
          <div className="pandh-about-us">
            {' '}
            <HtwoAboutUs />
            <PAboutUs />
          </div>
          <div>
            <WeHelp />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
