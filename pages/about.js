import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
const About = () => {
    return ( 
        <div>
             <Navbar/>
        <div className={styles.about}>
            <section className={styles.head}>
            <h1>About</h1>
            <p className={styles.para1}>I am a software developer located in Phoenix, AZ, currently seeking a career back in Software Development and cloud development.
                I am AWS-certified as a Cloud Practioner and a systems Ops Associate. I currently am working towards a Bachelors in Computer Science
                in University of the People and a certification in System Design and Solutions at DeVry University.
            </p>
            <button>Resume</button>
            </section>

        </div>
        <Footer />
        </div>
     );
}
 
export default About;