"use client";

import Image from "next/image";
import menuBtn from "@/assets/icons/menu-open.svg";
import crossBtn from "@/assets/icons/menu-close.svg";
import styles from "./MobileNav.module.css";
import { useEffect, useState } from "react";
import { navList } from "@/constants/navlist";
import NavLink from "../NavLink/NavLink";
import { useScrollLock } from "@/hooks/useScrollLock";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [res, setRes] = useState<number>(0)

  const { lockScroll, unlockScroll } = useScrollLock();

  // console.log(window.screen.width)

  useEffect(() => {
    if (isOpen) {
      lockScroll()
    } else {
      unlockScroll();
    }
  }, [isOpen, lockScroll, unlockScroll])

  useEffect(() => {
    if (res > 767) {
      setIsOpen(false)
    }
  }, [res])

  

  if (typeof window !== "undefined") {
    window.addEventListener('resize', () => {
      setRes(window.screen.width)
    })
  }


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
        className={`${styles.mobile_menu} ${isOpen ? styles.mobile_menu_open : null
          }`}
      >
        {navList.map((item) => (
          <NavLink
            key={item.path}
            href={item.path}
            className={styles.nav_item}
            activeClassName={styles.nav_menu_active}
            exact={item.path === "/"}
            onClick={() => setIsOpen((state) => !state)}
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
