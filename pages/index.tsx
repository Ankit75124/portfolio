import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'

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
        <section id="hero" className="snap-start">

          <Hero/>

        </section>

       {/* About */}

        <section id ="about" className="snap-center">
          <About/>

        </section>


      {/* Experience */}
      
        <section id="experience" className="snap-center">
          <WorkExperience />
        </section>

       {/* Skills */}

       <section id ="skills" className="snap-start">
          <Skills/>

        </section>

       {/* Projects */}

       <section id ="projects" className="snap-start">
          <Projects/>

        </section>

       {/* Contact Me */}

        <section id ="contact" className="snap-start">
          <ContactMe/>

        </section>
       
    </div>
  )
}

export default Home
