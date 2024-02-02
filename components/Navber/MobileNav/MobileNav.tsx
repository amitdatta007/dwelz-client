"use client";

import Image from "next/image";
import menuBtn from "@/assets/icons/menu-open.svg";
import crossBtn from "@/assets/icons/menu-close.svg";
import styles from "./MobileNav.module.css";
import { useState } from "react";
import { navList } from "@/constants/navlist";
import NavLink from "../NavLink/NavLink";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        className={styles.menu_btn}
        onClick={() => setIsOpen((state) => !state)}
      >
        {
            isOpen ? <Image alt="" src={crossBtn} /> : <Image alt="" src={menuBtn} />
        }
      </button>

      <div
        className={`${styles.mobile_menu} ${
          isOpen ? styles.mobile_menu_open : null
        }`}
      >
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
        <button className={styles.contact_btn}>Contact Us</button>
      </div>
    </>
  );
};

export default MobileNav;
