import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Movies = ({ url }) => {
  const [movies, setMovies] = useState(false)
  useEffect(() => {
    axios.get(url).then(res => setMovies(res.data.Search))
  }, [url])

  return (
    <>
      {movies ? (
        <ul className='container__ul--movies searchMovies'>
          {
            movies?.map(m => (
              <li key={m.omdbID} className="card">

                <div className="card__container--info">
                  <h3>{m.Title}</h3>
                  <div>
                    <p>{m.Type}</p>
                    <p>{m.Year}</p>
                  </div>
                </div>

                <div className="card__container--poster" >
                  <img src={m.Poster} alt={`Poster of ${m.Poster}`} className="card__poster" />
                </div>

              </li>
            ))
          }
        </ul>
      ) : (<></>)
      }
    </>);
};

export default Movies;

Movies.propTypes = {
  url: PropTypes.string.isRequired,
}