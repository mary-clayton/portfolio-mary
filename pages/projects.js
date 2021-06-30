import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
const Projects = () => {
    return ( 
        <div>
            <Navbar/>
            <div className={styles.maindiv}>
            <section className={styles.head}>
            <h1>Projects</h1>
            <div className= {styles.card}>
            <h3>Food Truck Trackr</h3>
            <img className= {styles.cardimage} src="./tablet_foodtruck.png"/>
            <button className={styles.codebutton}><a href="https://github.com/BW-WEBPT15-FoodTruckTrackR4">View Code</a></button>
            </div>
            </section>
            
            
            <section className={styles.head}>
            <div className= {styles.card}>
            <h3>Restaurant Passport</h3>
            <img className= {styles.cardimage} src=""/>
            <button className={styles.codebutton}><a href="">View Code</a></button>
            </div>
            </section>
           

           
            <section className={styles.head}>
            <div className= {styles.card}>
            <h3>KidsFly</h3>
            <img className= {styles.cardimage} src=""/>
            <button className={styles.codebutton}><a href="">View Code</a></button>
            </div>
            </section>
           </div>
        </div>
     );
}
 
export default Projects;