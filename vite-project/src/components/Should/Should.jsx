import Contant from './Contant';
import css from './Should.module.css';
import ShouldImg from './ShouldImg';
import linkedin from './../../assets/img/linkedin-sales-navigator-402831.png'

const Should = ({ img, title, text, ftext }) => {
  return (
    <>
      <div className="container should-main">
        <div className={css.shouldPapa}>
          <ShouldImg  img={linkedin}  />
          <Contant
            title={'YOU SHOULD ALSO KNOW'}
            text={
              'MDD affects more than 16.1 million American adults, or about 6.7%of the U.S. population age 18 and older in a given year. We at ThriveTalk can help you.'
            }
            ftext={'GET HELP NOW'}
          />
        </div>
      </div>
    </>
  );
};

export default Should;
