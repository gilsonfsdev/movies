import styles from '../styles/SearchForm.module.css';

import React from 'react'

const SearchForm = () => {
  return (
    <form >
      <input type="text"  className={styles.form} />
      <button type="submit" className={styles.button}>Pesquisar</button>
    </form>
  )
}

export default SearchForm