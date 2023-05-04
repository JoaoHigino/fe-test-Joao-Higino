import React, { useEffect, useState } from 'react';
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


  return <div>
    <h1 style={{
      color: "#fff",
      padding: "10px",
      fontFamily: "Arial",
      textAlign: "center",
      fontSize: "35px"
    }}>Star Wars Movies</h1>
    <table style={{
      borderSpacing: "30px",
      paddingLeft: "300px",
      color: "#fff",
      lineHeight: 2,
      fontFamily: "sans-serif",
      borderColor: "red",
    }}>
      <thead>
        <tr style={{
          color: "#fff",
          fontSize: "25px"
        }}>
          <th >Title</th>
          <th>Released</th>
          <th>Director</th>
          <th>Years Since Released</th>

        </tr>
      </thead>
      <tbody style={{
        textAlign: "center",
        fontSize: "20px"
      }}>
        {data.allFilms.films.map(film => <tr key={film.id}>
          <td onClick={() => setMovieInfoModal(film.id)}>{film.title}</td>
          <td style={{
            color: "#fff",
            textAlign: "center",
            fontSize: "20px"
          }}>{film.releaseDate}</td>
          <td>{film.director}</td>
          <td style={{
            color: "#fff",
            textAlign: "center",
            fontSize: "20px"
          }}>{functions.sinceReleased(new Date(film.releaseDate))}</td>
        </tr>)}
      </tbody>
    </table>

    {movieInfoModal && <MovieInfo id={movieInfoModal} close={() => setMovieInfoModal(null)} />}
  </div>;
}
export default Movies;