import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
const About = () => {
    return ( 
        <div>
             <Navbar/>
        <div className={styles.maindiv}>
            <section className={styles.head}>
            <h1>About</h1>
            <p className={styles.para1}>I am a software developer and designer located in Phoenix, AZ, currently seeking a career in Software Development, design, and cloud development.
                I am AWS-certified as a Cloud Practioner and a systems Ops Associate. I currently am working towards a Bachelors in Computer Science
                in University of the People and a certification in System Design and Solutions at DeVry University. I currently hold a Bachelors of Art
                in Digital Design from Grand Canyon University.
            </p>
            <p className={styles.para1}> I am a technical and design-oriented person who enjoys creating and helping others achieve a common
            goal. I am a fast learner who is able to pick up on skills and pick up multiple tasks at once with ease.
            </p>
            <button> <a href="https://drive.google.com/file/d/10ZJJVH3okRTzUkAN1Qak1fmey8soAe0T/view?usp=sharing">Resume</a></button>
            </section>

        </div>
        <Footer />
        </div>
     );
}
 
export default About;