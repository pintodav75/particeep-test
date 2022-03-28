import { connect } from 'react-redux'
import { deleteMovie, deleteLastMovie } from '../redux/actions'

const lastMovieInCategory = (movies, category) => {
    const categories = movies.filter(m => m.category === category)
    return categories.length === 1;
}

const MovieList = ({  movies, filter, deleteSimple, deleteLast }) => {
    const moviesFiltered = movies.filter(m => {
        if (filter === '') return true;
        return (m.category === filter)
    })

    return (
    <div>
        List de films
        {moviesFiltered.map((m) => {
            return (
            <div key={m.id} >
                {m.title} [{m.category}] -{m.dislikes}  +{m.likes} 
                <button onClick={() => {
                    if (lastMovieInCategory(movies, m.category))
                        deleteLast(m.id)
                    else
                        deleteSimple(m.id)
                }}>Delete</button>
            </div>
            )
        })}
    </div>
    );
}

const mapStateToProps = (state) => ({
    movies: state.movies,
    filter : state.filter,
    pagination: state.pagination,
})

export default connect(
    mapStateToProps,
    { deleteSimple: deleteMovie,  deleteLast: deleteLastMovie },
)(MovieList);
