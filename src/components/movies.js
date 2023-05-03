import React, { useEffect, useState } from 'react';
import styles from "../styles/movies.module.css";
import { useQuery } from '@apollo/client';
import { GET_ALL_FILMS } from '../graphql/queries';
import MovieInfo from './movieInfo';
import sinceReleased from '../utils/functions';

const Movies = () => {
  const [movieInfoModal, setMovieInfoModal] = useState(null);
  const { loading, error, data } = useQuery(GET_ALL_FILMS);


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error : {error.message}</p>;
  }

  let functions = require('../utils/functions');
  

  return <div className={styles.Movies}>
    <h1 >Star Wars Movies</h1>
    <table>
      <thead>
        <tr>
          <th >Title</th>
          <th>Released</th>
          <th>Director</th>
          <th>Years Since Released</th>
          
        </tr>
      </thead>
      <tbody>
        {data.allFilms.films.map(film => <tr key={film.id}>
          <td onClick={() => setMovieInfoModal(film.id)}>{film.title}</td>
          <td>{film.releaseDate}</td>
          <td>{film.director}</td>
          <td>{functions.sinceReleased(new Date(film.releaseDate))}</td>
        </tr>)}
      </tbody>
    </table>

    {movieInfoModal && <MovieInfo id={movieInfoModal} close={() => setMovieInfoModal(null)} />}
  </div>;
}
export default Movies;