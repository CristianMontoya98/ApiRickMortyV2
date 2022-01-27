import styles from "./style.module.css";
function Button(props) {
  const { name, clickCont } = props;
  return (
    <div>
      <button className={styles.button} onClick={()=>clickCont()}>
        {name}
      </button>
    </div>
  );
}
export { Button };
