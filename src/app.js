import styles from "./App.module.css";
import MovieInfo from "./components/movieInfo";
import Movies from "./components/movies";

const App = () => {

return  (
  <div className={styles.App}>
    <MovieInfo />
    <Movies />
  </div>
  );
}
export default App;