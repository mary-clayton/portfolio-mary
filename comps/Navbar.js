import Link from 'next/link';
import styles from '../styles/Nav.module.css'


const Navbar = () => {
    return ( 
        <div className={styles.mainnavbar}>
             <div className={styles.logo}>
                <h1>Mary Clayton</h1>
            </div>
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
    );
}
 
export default Navbar;