import styles from "./story.module.scss";
import Img1 from "../../assets/img1.svg";
import Img2 from "../../assets/‫img2.svg";
import Img3 from "../../assets/img3.svg";
import Img4 from "../../assets/img4.svg";
import Img5 from "../../assets/img5.svg";

const Story = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <div className={styles.leftImages}>
          <img className={styles.photoside} src={Img1} alt="Left 1" />
          <img style={{paddingTop:'2rem'}} className={styles.photoside} src={Img2} alt="Left 2" />
        </div>
        <div className={styles.middleImage}>
          <img src={Img3} alt="Middle" />
        </div>
        <div className={styles.rightImages}>
          <img className={styles.photoside} src={Img4} alt="Right 1" />
          <img style={{paddingTop:'2rem'}} className={styles.photoside} src={Img5} alt="Right 2" />
        </div>
      </div>

      <div className={styles.storyMain}>
        <div className={styles.ourstory}>Our story</div>
        <div className={styles.storyHeader}>Handshake infographic mass market</div>
        <div className={styles.storyHeader}>crowdfunding iteration.</div>
        <div className={styles.desc}>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer. </div>
      </div>
    </div>
  ); 
};

export default Story;
