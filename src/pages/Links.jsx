import styles from "./Links.module.scss";

import { IoLogoGithub } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";

function Links() {
  function handleNavigateGithub(link) {
    window.open(link);
  }

  function handleNavigateTelegram(link) {
    window.open(link);
  }
  return (
    <section className={styles.container}>
      <h1>Ссылки на создателей</h1>
      <div className={styles.personContainer}>
        <div className={styles.person}>
          <img src="/images/milo-avatar.jpeg" alt="Milo" />
          <h2>Milo</h2>
          <div className={styles.linksContainer}>
            <IoLogoGithub className={styles.icon} />
            <button
              onClick={() =>
                handleNavigateGithub("https://github.com/Mikhailosev")
              }
              className={styles.link}
            >
              Github
            </button>
          </div>
          <div className={styles.linksContainer}>
            <FaTelegram className={styles.icon} />
            <button
              onClick={() => handleNavigateTelegram("https://t.me/mikhailosev")}
              className={styles.link}
            >
              Telegram
            </button>
          </div>
        </div>
        <div className={styles.person}>
          <img src="/images/hreewx-avatar.jpeg" alt="Milo" />
          <h2>Hreewx</h2>
          <div className={styles.linksContainer}>
            <IoLogoGithub className={styles.icon} />
            <button
              onClick={() => handleNavigateGithub("https://github.com/Hreewx")}
              className={styles.link}
            >
              Github
            </button>
          </div>
          <div className={styles.linksContainer}>
            <FaTelegram className={styles.icon} />
            <button
              onClick={() => handleNavigateTelegram("https://t.me/hreewxi")}
              className={styles.link}
            >
              Telegram
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Links;
