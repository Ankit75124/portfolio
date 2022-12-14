/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import Link from 'next/link';
import { Experience, PageInfo, Project, Skill, Social, Technology } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocials } from '../utils/fetchSocials'
type Props ={
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

// import styles from '../styles/Home.module.css';

const Home = ({pageInfo,
      experiences,
      skills,
      projects,
      socials}: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory z-0  overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Ankit Portfolio</title>
        
      </Head>

      {/* <h1 className="p-10 text-red-500">My Portfolio</h1>
       */}

       {/* Header */}
      <Header
      socials={socials}
      />

       {/* HERO */}
        <section id="hero" className="snap-start">

          <Hero
          pageInfo={pageInfo}
          />

        </section>

       {/* About */}

        <section id ="about" className="snap-center">
          <About
          pageInfo={pageInfo}
          />

        </section>


      {/* Experience */}
      
        <section id="experience" className="snap-center">
          <WorkExperience
          experiences={experiences}
          />
        </section>

       {/* Skills */}

       <section id ="skills" className="snap-start">
          <Skills
          skills={skills}
          />

        </section>

       {/* Projects */}

       <section id ="projects" className="snap-start">
          <Projects
          projects={projects}
          />

        </section>

       {/* Contact Me */}

        <section id ="contact" className="snap-start">
          <ContactMe/>

        </section>
       
       <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className="flex items-center justify-center">
            <img 
            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
            src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png" alt="" />
            </div>
        </footer>
       </Link>
    </div>
  )
}

export default Home;


Home.getInitialProps = async ({ req }: any) => {
  let host: string = "";
  if (req) {
    host = `http://${req.headers.host}`; // will give you localhost:3000
    console.log(req.headers.host);
  }

  const pageInfo: PageInfo = await fetchPageInfo(host);
  const experiences: Experience[] = await fetchExperiences(host);
  const skills: Technology[] = await fetchSkills(host);
  const socials: Social[] = await fetchSocials(host);
  const projects: Project[] = await fetchProjects(host);
  return {
   
      pageInfo,
      experiences,
      skills,
      projects,
      socials,

  } ;

}



