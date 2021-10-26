// Styles
import styles from './Home.module.scss'


const Home = props => {
    return (
        <div className={styles.home}>
            <h2 className={styles.text}>Welcome to Inspigo World!</h2>
        </div>
    )
}

export default Home