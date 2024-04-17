import css from './Card.module.css';

const Card = ({
  text,
  background,
  width,
  height,
  linewidth,
  lineheight,
  linecolor,
  top,
}) => {
  return (
    <>
      <div className="container card">
        <div
          className={css.cardBox}
          style={{
            backgroundColor: background,
            width: width,
            height: height,
          }}
        >
          <div
            className={css.line}
            style={{
              width: linewidth,
              height: lineheight,
              backgroundColor: linecolor,
              marginTop: top,
            }}
          />
          <div className={css.cardChild}>
            <div className={css.circle} />
            <h1>{text}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
