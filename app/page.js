import Countdown from '../components/Countdown/Countdown';
import styles from '../styles/home.module.css'
const Home = () => {
  // Set your target date (in milliseconds)
  //const targetDate = new Date('October 31, 2023 00:00:00').getTime();

  return (
    <div className={styles.body}>
      <h1 className={styles.heading}>Countdown Timer</h1>
      <p>"Time is a created thing. To say 'I don't have time,' is like saying, 'I don't want to.'" - Lao Tzu</p>
      
      <div className={styles.container}>
      <Countdown />
      </div>
    </div>
  );
};

export default Home;