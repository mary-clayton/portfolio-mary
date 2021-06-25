import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
     <Navbar />
     <Footer />
    </div>
  )
}
