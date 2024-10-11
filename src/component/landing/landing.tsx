import styles from "./landing.module.scss";
import { useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../../assets/Logo.svg";

const Landing = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [modal, setModal] = useState(false);
  //   let navigate = useNavigate();

  const toggle = () => {
    setModal(!modal);
    setShowMenu(!showMenu);
  };
  const gotoHome = () => {};
  return (
    <div className={styles.background}>
      <div className={styles.header} id="top">
        <div className={styles.logoParent} onClick={gotoHome}>
          <img src={Logo} className={styles.logo} alt="horse" />
        </div>
        <div className={styles.pagesDiv}>
          <Link className={styles.title} to="/home#whoweare" smooth>
            Product
          </Link>
          <Link className={styles.title} to="/home#vision">
            Services
          </Link>
          <Link className={styles.title} to="/discover">
            About
          </Link>
          <button className={styles.btn}>Log In</button>
        </div>

        {/* <motion.div
          className={styles.btnDiv}
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px(255,255,255)",
            boxShadow: "0px 0px 8px(255,255,255)",
          }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 10,
            duration: 4,
          }}
        >
          <a
            href="https://ultainfinityairdrop.com"
            rel="noreferrer"
            target={"_blank"}
          >
            {" "}
            <button>Login</button>
          </a>
        </motion.div>
        <div onClick={toggle} className={styles.menuDiv}>
          <AiOutlineMenu className={styles.menu} />
        </div>

        <Modal isOpen={modal} toggle={toggle} fullscreen>
          <ModalBody className={styles.modalParent}>
            <div onClick={toggle} className={styles.modalClose}>
              {" "}
              <AiOutlineClose className={styles.menu} />
            </div>
            <div className={styles.modalMenu}>
              <motion.div
                className={styles.modalMenufirst}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, type: "spring", duration: 7 }}
              >
                <Link
                  onClick={toggle}
                  className={styles.titleModal}
                  to="/home#whoweare"
                  smooth
                >
                  Who We Are
                </Link>
                <Link
                  onClick={toggle}
                  className={styles.titleModal}
                  to="/home#vision"
                >
                  Our Vision
                </Link>
                <Link
                  onClick={toggle}
                  className={styles.titleModal}
                  to="/discover"
                >
                  Discover
                </Link>
                <Link
                  onClick={toggle}
                  className={styles.titleModal}
                  to="/home#wealth"
                >
                  Wealth Creation
                </Link>
              </motion.div>

              <motion.div
                className={styles.modalMenufirst}
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, type: "spring", duration: 7 }}
              >
                <Link
                  onClick={toggle}
                  className={styles.titleModal}
                  to="/home#cryptocurrencies"
                  smooth
                >
                  Cryptocurrencies
                </Link>
                <Link
                  onClick={toggle}
                  className={styles.titleModal}
                  to="https://brochure.ultainfinityglobalgroup.com"
                >
                  Investor Brochure
                </Link>
                <Link
                  onClick={toggle}
                  className={styles.titleModal}
                  to="/allblogs"
                >
                  Bloq
                </Link>
                <Link onClick={toggle} className={styles.titleModal} to="/faq">
                  FAQ
                </Link>
              </motion.div>
            </div>
          </ModalBody>
        </Modal> */}
      </div>

      <div className={styles.contentDiv}>
        <div className={styles.about}>About</div>
        <div className={styles.top}>
          <div className={styles.content}>We love to make great</div>
          <div className={styles.content}>things, things that matter.</div>
        </div>
        <div className={styles.top}>
          <div className={styles.desc}>
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage
          </div>
          <div className={styles.desc}>
            innovator success deployment non-disclosure.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
