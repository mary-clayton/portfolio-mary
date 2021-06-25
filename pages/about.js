import styles from '../styles/About.module.css'
import Navbar from '../comps/Navbar'
const About = () => {
    return ( 
        <div>
            <Navbar/>
            <h1 className={styles.about}>About</h1>
        </div>
     );
}
 
export default About;