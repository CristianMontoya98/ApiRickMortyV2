import { useEffect, useState } from "react";
import { Button } from "./components/Button";
/* import { Button } from "./components/Button"; */
import { Card } from "./components/Card";

import styles from "./style.module.css";
function Cards() {
  const [listCharacters, setListCharacters] = useState([]);
  const [cont, setCont] = useState(1);
  const nextPag = () => {
    setCont(cont + 1);
  };
  const prevPag = () => {
    if (cont > 1) {
      setCont(cont - 1);
    }
  };

  useEffect(() => {
    const consumeApi = async () => {
      fetch(`https://rickandmortyapi.com/api/character?page=${cont}`)
        .then((result) => result.json())
        .then((data) => {
          setListCharacters(data.results);
        });
    };
    consumeApi();
  }, [cont]);

  return (
    <div>
      <div className={styles.container}>
        {listCharacters?.map((val) => (
          <Card key={val.id} data={val} />
        ))}
      </div>
      <div className={styles.buttons}>
        <Button name="<< PREV" clickCont={prevPag} />
        <h2 className={styles.buttons__pag}>{cont}</h2>
        <Button name="NEXT >>" clickCont={nextPag} />
      </div>
    </div>
  );
}
export { Cards };
