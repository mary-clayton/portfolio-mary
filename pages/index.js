import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Navbar from '../comps/Navbar'
import Link from 'next/link'
import Footer from '../comps/Footer'

export default function Home() {
  return (
    <div>
    <div className={styles.container}>
    <div className={styles.mainnav}>
        <nav className= {styles.navbar}>
            <Link href="/">
                <a className={styles.link}>Home</a>
                </Link>
            <Link href="/about">
                <a className={styles.link}>About</a>
                </Link>
            <Link href="/projects">
                <a className={styles.link}>Projects</a>
                </Link>
            <Link href="/contact">
                <a className={styles.link}>Contact</a>
                </Link>
            <Link href="/blog">
                <a className={styles.link}>Blog</a>
                </Link>
        </nav>
        </div>
        <img className= {styles.profile} src="/me.png"/>
        <h2 className={styles.headPage}>Hello. I am  Mary.</h2>
    </div>
    <Footer />
     </div>
  )
}
