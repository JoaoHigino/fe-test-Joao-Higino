import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_FILM_INFO } from '../graphql/queries';
const MovieInfo = ({ id, close }) => {

  const { loading, error, data } = useQuery(GET_FILM_INFO, {
    variables: {
      id
    }
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error : {error.message}</p>;
  }

  return <div style={{
    position: "fixed",
    left: "50%",
    top: "44%",
    transform: "translate(-50%, -50%)",
    backgroundColor:"black",
    color:"white",
    maxHeight:"100%",
    padding: "25px",
    float: "top",
    fontFamily: "cursive"
    }}>
    <span onClick={close}>Close</span>
    <h2 style={{
      color: "red",
      textAlign: "center"
      }}>{data.film.title}
    </h2>
    <h3 style={{
      color: "whitesmoke",
      textAlign: "center"
      }}>{data.film.openingCrawl}
    </h3>
    <h3 style={{
      color: "red",
      textAlign: "center"
      }}>Planets in the movie:<br></br>
      {data.film.planetConnection.planets.map(film => (  
        <li style={{
          fontSize: "15px"
        }} >  
          {film.name}  
        </li>  
      ))}  
    </h3>
  </div>;

}
export default MovieInfo;