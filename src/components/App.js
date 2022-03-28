import MovieFilter from "./movieFilter";
import MovieList from "./movieList";
import Pagination from "./pagination";

const App = () => {
  return (
    <div>
      <MovieFilter />
      <MovieList />
      <Pagination />
    </div>
  )
}

export default App;