/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps} from 'next'
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import styles from '../styles/Home.module.css'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchExperience } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProject } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocial } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;  
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({ pageInfo, skills, experience, socials, projects }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/50">
      <Head>
        <title>{pageInfo?.name} - Portfolio</title>
      </Head>

     {/* Header */}
     <Header socials={socials} />

     {/* Hero */}
     <section id='hero' className='snap-start'>
      <Hero pageInfo={pageInfo} />
     </section>

     {/* About */}
     <section id='about' className='snap-center'>
      <About pageInfo={pageInfo} />
     </section>

     {/* Experience */}
     <section id='experience' className='snap-center'>
     <WorkExperience experiences={experience} />
     </section>

     {/* Skills */}
     <section id='skills' className='snap-start'>
      <Skills skills={skills} />
     </section>

     {/* Projects */}
      <section id='projects' className='snap-start'>
      <Projects projects={projects}/>
      </section>

     {/* Contact Me */}
     <section id='contact' className='snap-start'>
       <ContactMe />
     </section>
     
     <Link href='#hero'>
       <footer className='sticky top-5 sm:top-1 bottom-5 sm:bottom-1 h-0 sm:h-12 w-full cursor-pointer'>
        <div className="flex items-center justify-center">
          <img 
             src="https://media-exp1.licdn.com/dms/image/C4D03AQGeY1YKe3--_g/profile-displayphoto-shrink_200_200/0/1629215262522?e=2147483647&v=beta&t=lo0CgIHMWETj0o6tAPgcvTasngWl77KPrV3VECRIK14" 
             alt="" 
             className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" 
          />
        </div>
       </footer>
     </Link>

    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo= await fetchPageInfo()
  const experience: Experience[] = await fetchExperience()
  const skills: Skill[] = await fetchSkills()
  const projects: Project[] = await fetchProject()
  const socials: Social[] = await fetchSocial()

  return {
    props: {
      pageInfo,
      experience,
      skills,
      projects,
      socials,
    },
    // Next.sj will attempt to re-generate the page:
    //- When a request comes in
    //-At most once every 10 seconds
    revalidate: 10, 
  }

}
