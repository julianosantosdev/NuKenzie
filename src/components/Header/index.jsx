import { Logo } from "../Logo";
import styles from "./index.module.css";

function Header({ handleLogout }) {
  return (
    <header className={styles.header}>
      <nav className="container">
        <Logo />
        <button
          onClick={() => {
            handleLogout();
          }}
          className="button--logout"
        >
          Início
        </button>
      </nav>
    </header>
  );
}
export { Header };
