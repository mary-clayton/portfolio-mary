import Link from 'next/link';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';

const Alink = styled.a `
padding: 0 30%;
`
const Navbar = () => {
    return ( 
        <div className={styles.mainnav}>
             <div className={styles.logo}>
                <h1>Mary Clayton</h1>
            </div>
        <nav className= {styles.navbar}>
            <Link href="/">
                <Alink>Home</Alink>
                </Link>
            <Link href="/about">
                <Alink>About</Alink>
                </Link>
            <Link href="/projects">
                <Alink>Projects</Alink>
                </Link>
            <Link href="/contact">
                <Alink>Contact</Alink>
                </Link>
            <Link href="/blog">
                <Alink>Blog</Alink>
                </Link>
        </nav>
        </div>
    );
}
 
export default Navbar;