import React from 'react';
import styles from '../styles/DetailCard.module.css'
import Link from 'next/link';

const DetailCard = ({id, title, sinopse, image, releaseDate}) => {
  return (
    <section className={styles.container}>
      <div>
        <div><img src={image} alt={title} className={styles.img}/></div>
      </div>
      <div className={styles.details}>
        <h1>{title}</h1>
        <p><span>Sinopse: </span>{sinopse}</p>
        <p><span>Data de lançamento: </span>{releaseDate}</p>
        <Link href="/" className={styles.button}>Go Back</Link>
      </div>
    </section>
  )
}

export default DetailCard