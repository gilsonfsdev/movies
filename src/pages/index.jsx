import Head from 'next/head'
import Link from 'next/link';

// styles
import styles from '@/styles/Movies.module.css'

// ícones 
import { BiCamera, BiCameraMovie} from 'react-icons/bi';
import { BsFillPlayCircleFill } from 'react-icons/bs';

// components
import Container from '@/components/Container';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Movies</title>
        <meta name="description" content="aplicação que dá acesso a uma database de filmes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header  />
      <main>
        <Container />
      </main>
    </>
  )
}