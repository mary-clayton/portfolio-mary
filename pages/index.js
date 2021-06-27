import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
     <Navbar />
     <div className={styles.bg}>
     <div className={styles.into}>
       <div className={styles.words}>
     <h2>Hi, My name is Mary Clayton.</h2>
     <p>An AWS Certified Software Engineer who is proficient in Full-stack Web Applications.</p>
     </div>
     <img className= {styles.profile} src="/me.jpg"/>
     </div>
     <Footer />
     </div>
    </div>
  )
}
