import React from 'react';
import { BiCameraMovie } from 'react-icons/bi';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import styles from '@/styles/Movies.module.css'


const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <h1 className={styles.title}>m<span className={styles.title_icon}><BsFillPlayCircleFill/></span>vies</h1>
          <BiCameraMovie/>
        </div>
      </nav>
    </header>
  )
}

export default Header