import someimg from './../../assets/img/autumn-goodman-242825.png'; 
import css from './SomeInfo.module.css'

const SomeInfo = () => {
  return (
    <>
      <div className="container some-parent">
        <div className={css.someWrapper}>
          <div className={css.someImg}>
            <img src={someimg} alt="img" />
          </div>
          <div className={css.someTextParent}>
            <div className={css.textTop}>
              <h2>SOME INFO</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula.
              </p>
            </div>
            <div className={css.textTop} >
              <h2>ENFOLD HEALTH</h2>
              <p>
                Main Street 1, Olcott Buffalo, United States <br />
                <br />
                +555 283 784 333
              <br />  <span>office@enfold-health.com</span>
              </p>
            </div>
            <div className={css.textTop} >
              <h2>OFFICE HOURS</h2>
              <p>Mo-Fr: 8:00-19:00 Sa: 8:00-14:00 Su: closed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SomeInfo;