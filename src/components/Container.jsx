import { useEffect, useState } from 'react';
import styles from '../styles/Container.module.css';
import Card from './Card';
import { APIkey } from '@/config/key';


const Container = () => {

  const [movies, setMovies ] = useState([]);
  const image_path = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    fetch (`
    https://api.themoviedb.org/3/movie/top_rated?api_key=${APIkey}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => setMovies(data.results))
  },[])


  return (
    
    <section className={styles.container}>
        {movies?.map((movie) => {
          return (
            <Card 
              key={movie.id}
              id={movie.id}
              imagem={`${image_path}${movie.poster_path}`}
              title={movie.title}
              vote={movie.vote_average}
            />)
        })}
    </section>
  )
}

export default Container