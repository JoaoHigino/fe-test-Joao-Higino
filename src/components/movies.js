import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { GET_ALL_FILMS } from '../graphql/queries';
import MovieInfo from './movieInfo';

const Movies = () => {
  const [movieInfoModal, setMovieInfoModal] = useState(null);
  const { loading, error, data } = useQuery(GET_ALL_FILMS);


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error : {error.message}</p>;
  }

return (<>
    <h1 style={{
      color: "black",
      padding: "10px",
      fontFamily: "Arial",
      textAlign: "center"
    }}>Star Wars Movies</h1>
    <table style={{
      borderSpacing: "30px",
      paddingLeft: "300px",
      color: 'black', 
      lineHeight: 2,  
      }}>
      <thead>
        <tr style={{
          color: "red",
        }}>
          <th >Title</th>
          <th>Released</th>
          <th>Director</th>
          <th>Years Since Released</th>
          
        </tr>
      </thead>
      <tbody style={{
        textAlign: "center"
      }}>
        {data.allFilms.films.map(film => <tr key={film.id}>
          <td onClick={() => setMovieInfoModal(film.id)}>{film.title}</td>
          <td>{film.releaseDate}</td>
          <td>{film.director}</td>
          {/* <td>{convertDate(film.releaseDate)}</td> */}
          {/* <td>{film.releaseDate.planets.map(film => ( {releaseDate}  
        
      ))}  </td> */}

        </tr>)}
      </tbody>
    </table>

    {movieInfoModal && <MovieInfo id={movieInfoModal} close={() => setMovieInfoModal(null)} />}
    
  </>);
}

export default Movies;