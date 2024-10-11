import styles from "./team.module.scss";
import Person1 from "../../assets/person1.svg";
import Person2 from "../../assets/person2.svg";
import Person3 from "../../assets/person3.svg";

const Team = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.storyMain}>
        <div className={styles.ourstory}>Our team</div>
        <div className={styles.storyHeader}>The leadership team</div>
        <div className={styles.desc}>
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.box}>
          <img src={Person3} alt="Middle" />
          <div className={styles.name}>Michael Scott</div>
          <div className={styles.role}>General Manager</div>
        </div>
        <div className={styles.box}>
          <img src={Person2} alt="Middle" />
          <div className={styles.name}>Michael Scott</div>
          <div className={styles.role}>General Manager</div>
        </div>
        <div className={styles.box}>
          <img src={Person1} alt="Middle" />
          <div className={styles.name}>Michael Scott</div>
          <div className={styles.role}>General Manager</div>
        </div>
      </div>
    </div>
  );
};

export default Team;
