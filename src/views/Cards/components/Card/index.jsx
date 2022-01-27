import styles from "./style.module.css";
function Card(props) {
  const { data } = props;
  return (
    <div className={styles.card} >
      <img src={data.image} alt="" />
      <div className={styles.card__text}>
        <h2>Name:</h2>
        <h2> {data.name}</h2>
        <h2>Location:</h2>
        <h2>{data.location.name}</h2>
        <h2>Status: {data.status}</h2>
        <h2>Specie: {data.species}</h2>
        
      </div>
    </div>
  );
}
export { Card };
