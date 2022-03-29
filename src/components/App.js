import MovieFilter from "./movieFilter";
import MovieList from "./movieList";
import Pagination from "./pagination";
import '../css/main.css'

const App = () => {
  return (
    <>
      <MovieFilter />
      <MovieList />
      <Pagination />
    </>
  )
}

export default App;