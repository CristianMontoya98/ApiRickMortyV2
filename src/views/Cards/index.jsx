import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import styles from './style.module.css';
function Cards() {
  const [listCharacters, setListCharacters] = useState([]);
  useEffect(() => {
    const consumeApi = async () => {
      fetch("https://rickandmortyapi.com/api/character")
        .then((result) => result.json())
        .then((data) => {
          setListCharacters(data.results);
        });
    };
    consumeApi();
  },[]);
    return (
      <div className={styles.container}>
      {listCharacters?.map((val) => (
        <Card key={val.id} data={val} />
      ))}
    </div>
  );
}
export { Cards };