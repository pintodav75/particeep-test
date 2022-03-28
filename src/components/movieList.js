import { connect } from 'react-redux'
import { deleteMovie, deleteLastMovie } from '../redux/actions'
import LinearProgress from '@mui/material/LinearProgress';


const lastMovieInCategory = (movies, category) => {
    const categories = movies.filter(m => m.category === category)
    return categories.length === 1;
}

const LikeBar = ({ likes, dislikes }) => {
    const votes = likes + dislikes;
    const voteValue = 100 / votes;
    const result = likes * voteValue;

    return (
        <>
            <LinearProgress value={result} variant={'determinate'} />
            <div>{result}</div>
        </>
    )
}

const MovieList = ({  movies, filter, deleteSimple, deleteLast, page }) => {
    const moviesFiltered = movies.filter(m => {
        if (filter === '') return true;
        return (m.category === filter)
    })

    const moviesFilteredPaged = moviesFiltered.splice((page-1)*4, 4)

    return (
    <div>
        List de films
        {moviesFilteredPaged.map((m) => {
            return (
            <div key={m.id} >
                {m.title} [{m.category}] -{m.dislikes}  +{m.likes} 
                <LikeBar likes={m.likes} dislikes={m.dislikes} />
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
    page: state.pagination.page,
})

export default connect(
    mapStateToProps,
    { deleteSimple: deleteMovie,  deleteLast: deleteLastMovie },
)(MovieList);
