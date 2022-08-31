import styles from "./layout.module.css";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>{children}</div>
    </div>
  );
}
