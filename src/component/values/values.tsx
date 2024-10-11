import styles from "./values.module.scss";
import Icon1 from "../../assets/icon1.svg";
import Icon2 from "../../assets/icon2.svg";
import Icon3 from "../../assets/icon3.svg";

const Values = () => {
  return (
    <div className={styles.background}>
      <div className={styles.storyMain}>
        <div className={styles.ourstory}>Our values</div>
        <div className={styles.storyHeader}>Things in we believe </div>
        <div className={styles.desc}>
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.
        </div>

        <div className={styles.top}>
          <div className={styles.row}>
            <div>
              <img src={Icon1} alt="Middle" className={styles.icon} />{" "}
            </div>
            <div className={styles.contentDiv}>
              <div className={styles.title}>We are commited.</div>
              <div className={styles.subTitle} style={{ paddingTop: "1rem" }}>
                Conversion angel investor entrepreneur first mover advantage.
              </div>
              <div className={styles.subTitle}>
                Handshake infographic mass market crowdfunding iteration.
              </div>
            </div>
          </div>

          <div className={styles.row}>
            <div>
              <img src={Icon2} alt="Middle" className={styles.icon} />{" "}
            </div>
            <div className={styles.contentDiv}>
              <div className={styles.title}>We are responsible.</div>
              <div className={styles.subTitle} style={{ paddingTop: "1rem" }}>
                Conversion angel investor entrepreneur first mover advantage.
              </div>
              <div className={styles.subTitle}>
                Handshake infographic mass market crowdfunding iteration.
              </div>
            </div>
          </div>

          <div className={styles.row}>
            <div>
              <img src={Icon3} alt="Middle" className={styles.icon} />{" "}
            </div>
            <div className={styles.contentDiv}>
              <div className={styles.title}>We aim for progress.</div>
              <div className={styles.subTitle} style={{ paddingTop: "1rem" }}>
                Conversion angel investor entrepreneur first mover advantage.
              </div>
              <div className={styles.subTitle}>
                Handshake infographic mass market crowdfunding iteration.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
