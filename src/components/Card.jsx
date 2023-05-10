import React from 'react';
import styles from '../styles/Card.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({id,imagem, title,vote}) => {
  return (
    <div className={styles.container}>
      <Link href={`/details/${id}`}><img src={imagem} alt={title} /></Link>
      <span className={styles.line}></span>
      <div className={styles.container_description}>
        <h1>{title}</h1>
        <p>IMDB: <span>{vote}</span></p>
      </div>
    </div>
  )
}

export default Card