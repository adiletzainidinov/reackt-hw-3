import css from "./Nutritional.module.css"

const Nutritional = ({ title, text }) => {
  return (
    <>
      <div className={css.nutritionalstag}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </>
  );
};

export default Nutritional;
