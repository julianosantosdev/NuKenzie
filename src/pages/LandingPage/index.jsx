import styles from "./index.module.css";
import illustration from "./../../assets/img/illustration.svg";
import { Logo } from "../../components/Logo";

function LandingPage({ handleLogin }) {
  return (
    <section className={`${styles.landingPageContainer}`}>
      <div className={`${styles.content__container} container`}>
        <div className={styles.sloganContainer}>
          <Logo />
          <h1>Centralize o controle das suas finanças</h1>
          <p>de forma rápida e segura</p>
          <button
            onClick={() => handleLogin()}
            className={`button--general ${styles.buttonStart}`}
          >
            Iniciar
          </button>
        </div>
        <div className={styles.illustration__container}>
          <img
            className={styles.ImgIllustration}
            src={illustration}
            alt="app illustration"
          />
        </div>
      </div>
    </section>
  );
}
export { LandingPage };
