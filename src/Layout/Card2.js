import styles from "./Styles/Card2.module.css";

const Card2 = (props) => {
  return (
    <div className={styles.cardContainer}>
      <img src={props.img} alt="first" />
      <div className={styles.cardBody}>
        <h2>{props.name}</h2>
        <p>{props.price}</p>
        <p>{props.description}</p>
        <div className={styles.cardBtn}>
          <button>Mais detalhes</button>
        </div>
      </div>
    </div>
  );
};

export default Card2;
