import styles from "./navbar.module.css";
import Link from "next/link";

const Navber = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navbar}>
        <Link href="/">Dwelz</Link>
        <div className={styles.nav_menu}></div>
        <button className={styles.contact_btn}>Contact Us</button>
      </div>
    </nav>
  );
};

export default Navber;
