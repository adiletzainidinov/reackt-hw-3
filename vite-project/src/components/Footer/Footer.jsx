import css from "./Footer.module.css"

const Footer = () => {
  return (
    <>
      <div className="container footer">
        <div className={css.footerCopiright}><h2>© Copyright - ThriveTalk  2017</h2></div>
      </div>
    </>
  );
};

export default Footer;