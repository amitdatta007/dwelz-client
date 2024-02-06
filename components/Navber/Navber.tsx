import { navList } from "@/constants/navlist";
import styles from "./navbar.module.css";
import Link from "next/link";
import NavLink from "./NavLink/NavLink";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import MobileNav from "./MobileNav/MobileNav";

const Navber = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          <Image alt="" src={logo} />
          <span>Dwelz</span>
        </Link>
        <div className={styles.nav_menu}>
          {navList.map((item) => (
            <NavLink
              key={item.path}
              href={item.path}
              className={styles.nav_item}
              activeClassName={styles.nav_menu_active}
              exact={item.path === "/"}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
        <Link href='/contact-us' className={styles.contact_btn}>Contact Us</Link>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navber;
