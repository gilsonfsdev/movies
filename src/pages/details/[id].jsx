import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { APIkey } from '@/config/key';
import DetailCard from '@/components/DetailCard';
import Header from '@/components/Header';
import styles from '../../styles/DetailCard.module.css'

const Details = () => {

  const router = useRouter();
  const id = router.query.id;

  const image_path = 'https://image.tmdb.org/t/p/w500/';
  
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=${APIkey}&language=en-US`)
      .then(response => response.json())
      .then(data => {

        const movie = {
          id,
          title: data.title,
          sinopse: data.overview,
          image: `${image_path}${data.poster_path}`,
          releaseDate: data.release_date
        }

        setMovie(movie)

      })
  }, [id])
  
  return (
    <>
      <Header />
        <DetailCard 
          id={movie.id} 
          title={movie.title} 
          sinopse={movie.sinopse}
          image={movie.image}
          releaseDate={movie.releaseDate}
        />
    </>
  )
}

export default Details