'use client'
import Link from "next/link";
import React from "react";
import styles from "./menuLink.module.css";
import { usePathname } from "next/navigation";

interface Items {
  path: string,
  icon: React.ReactNode,
  title: string
}
type IProps = {
  item: Items
}
const MenuLink = ({item}: IProps) => {

  const pathname = usePathname();

  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path ? styles.active : ''}`}>
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
