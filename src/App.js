import styles from './App.module.css';
import { Cards } from './views/Cards'; 
function App() {
  return (
    <div className={styles.App}>
      <h1>Api Rick and Morty</h1>
      <Cards/>
    </div>
  );
}

export default App;
