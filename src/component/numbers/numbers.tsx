import styles from "./numbers.module.scss";

const Numbers = () => {
  return (
    <div className={styles.background}>
      <div className={styles.ourNumbers}>Our numbers</div>
      <div className={styles.title}>Handshake infographic mass market</div>
      <div className={styles.title}> crowdfunding iteration.</div>
      <div className={styles.row}>
        <div className={styles.box}>
          <div className={styles.time}>120m</div>
          <div className={styles.desc}>Cool feature title</div>
        </div>
        <div className={styles.box}>
          <div className={styles.time}>10.000</div>
          <div className={styles.desc}>Cool feature title</div>
        </div>
        <div className={styles.box}>
          <div className={styles.time}>240</div>
          <div className={styles.desc}>Cool feature title</div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
