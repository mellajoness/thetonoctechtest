import styles from "./footer.module.scss";
import Logo from "../../assets/Logoblack.svg";

const Footer = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <div className={styles.curvedCorner}></div>
        <div className={styles.content}>
          <div className={styles.title}>An enterprise template to ramp</div>
          <div className={styles.title}> up your company website</div>
          <div className={styles.inputBtnRow}>
            <input placeholder="Your email address" className={styles.input} />
            <button className={styles.btn}>Start now</button>
          </div>
        </div>
      </div>

      <div className={styles.LowerfooterParent}>
        <div className={styles.parentRow}>
          <div className={styles.rowOne}>
            <div className={styles.logoParent}>
              <div>
                {" "}
                <img src={Logo} className={styles.Icon} alt="horse" />
              </div>
            </div>
            <div className={styles.footerdesc}>
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </div>
            <div className={styles.footerdesc} style={{paddingTop:'5rem'}}>All rights reserved.</div>
          </div>

          <div className={styles.rowTwo}>
            <div className={styles.section}>
              <div
                className={styles.footerdesc}
                style={{ color: "black", fontWeight: "bold" }}
              >
                Landing
              </div>
              <div className={styles.top}>
                <div className={styles.contentTitle}>
                  <a className={styles.contentTitle} href="#whoweare">
                    Home
                  </a>
                </div>
                <div className={styles.contentTitle}>
                  <a className={styles.contentTitle} href="#blog">
                    Product
                  </a>
                </div>
                <div className={styles.contentTitle}>Services</div>
              </div>
            </div>

            <div className={styles.section}>
              <div
                className={styles.footerdesc}
                style={{ color: "black", fontWeight: "bold" }}
              >
                Company
              </div>
              <div className={styles.top}>
                <div className={styles.contentTitle}>Home</div>
                <div className={styles.careerRow}>
                  <div className={styles.contentTitle}>Careers</div>
                  <button className={styles.hireBtn}>Hiring !</button>
                </div>
                <div className={styles.contentTitle}>Services</div>
              </div>
            </div>

            <div className={styles.sectionTwo}>
              <div
                className={styles.footerdesc}
                style={{ color: "black", fontWeight: "bold" }}
              >
               Resources
              </div>
              <div className={styles.top}>
                <div className={styles.contentTitle}>
                  <a
                    className={styles.contentTitle}
                    target={"_blank"}
                    rel={"noreferrer"}
                    href="https://ultainfinitywealthlaunchpad.com"
                  >
                   Blog
                  </a>
                </div>
                <div className={styles.contentTitle}>
                  <a
                    className={styles.contentTitle}
                    target={"_blank"}
                    rel={"noreferrer"}
                    href="notavailable"
                  >
                    Product
                  </a>
                </div>
                <div className={styles.contentTitle}>
                  <a
                    className={styles.contentTitle}
                    target={"_blank"}
                    rel={"noreferrer"}
                    href="https://ultainfinityairdropandbounty.com"
                  >
                    Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
