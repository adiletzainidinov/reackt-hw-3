import css from './Should.module.css';

const Contant = ({ color, title, text, ftext, hthree,background }) => {
  return (
    <>
      <div className={css.contant} style={{ backgroundColor: background }}>
        <h2 style={{ color: color }}>{title}</h2>
        <p style={{ color: color }}>{text}</p>
        <h3 style={{ color: hthree }}>{ftext}</h3>
      </div>
    </>
  );
};

export default Contant;
