import Head from 'next/head'
import Link from 'next/link';

// styles
import styles from '@/styles/Home.module.css'

// ícones 
import { BiCamera, BiCameraMovie} from 'react-icons/bi';
import { BsFillPlayCircleFill } from 'react-icons/bs';

// components
import SearchForm from '../components/SearchForm';
import Container from '@/components/Container';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="aplicação que dá acesso a uma database de filmes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <h1 className={styles.title}>m<span className={styles.title_icon}><BsFillPlayCircleFill/></span>vies</h1>
            <BiCameraMovie/>
          </div>
          <SearchForm />
        </nav>
      </header>
      <main>
        <Container />
      </main>
    </>
  )
}
