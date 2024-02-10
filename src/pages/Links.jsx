import styles from "./Links.module.scss";

import { IoLogoGithub } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";

function Links() {
  return (
    <section className={styles.container}>
      <h1>Links of the creators</h1>
      <div className={styles.personContainer}>
        <div className={styles.person}>
          <img src="/images/milo-avatar.jpeg" alt="Milo" />
          <h2>Milo</h2>
          <div className={styles.linksContainer}>
            <IoLogoGithub className={styles.icon} />
            <button className={styles.link}>Github</button>
          </div>
          <div className={styles.linksContainer}>
            <FaTelegram className={styles.icon} />
            <button className={styles.link}>Telegram</button>
          </div>
        </div>
        <div className={styles.person}>
          <img src="/images/hreewx-avatar.jpeg" alt="Milo" />
          <h2>Hreewx</h2>
          <div className={styles.linksContainer}>
            <IoLogoGithub className={styles.icon} />
            <button className={styles.link}>Github</button>
          </div>
          <div className={styles.linksContainer}>
            <FaTelegram className={styles.icon} />
            <button className={styles.link}>Telegram</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Links;
