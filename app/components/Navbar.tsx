"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const links = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/posts", label: "Posts" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <span className={styles.marca}>🧭 Bússola do Emagrecimento</span>
      <div className={styles.links}>
        {links.map((link) => {
          const ativo =
            link.href === "/"
              ? pathname === "/"
              : pathname === link.href || pathname.startsWith(`${link.href}/`);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={ativo ? `${styles.link} ${styles.ativo}` : styles.link}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
