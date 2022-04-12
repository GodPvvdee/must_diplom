import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SecondHero from '../components/Hero/second'
import Card from '../components/Card'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <SecondHero/>
    <h2 className="text-2xl text-center font-extrabold text-gray-900">вэб загварууд</h2>

    <Card/>
    <Card/>
    <Footer/>
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    </div>
    </>
  )
}
