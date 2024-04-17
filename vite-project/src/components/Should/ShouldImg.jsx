import css from "./Should.module.css"

const ShouldImg = ({img}) => {
    return (
        <>
        <div className={css.img}>
            <img src={img} alt="img" />
          </div>
        </>
    )
}

export default ShouldImg;