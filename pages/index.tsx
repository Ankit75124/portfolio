import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

// import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Ankit Portfolio</title>
        
      </Head>

      {/* <h1 className="p-10 text-red-500">My Portfolio</h1>
       */}

       {/* Header */}
      <Header/>

       {/* HERO */}
        <section id="hero" className="snap-cener">

          <Hero/>

        </section>

       {/* About */}


       {/* Experience */}


       {/* Skills */}

       {/* Projects */}

       {/* Contact Me */}
       
    </div>
  )
}

export default Home
