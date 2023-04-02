import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://twitter.com/SamurluEmre" target="_blank">
        Emre Samurlu
      </Link>
    </footer>
  );
}

export default Footer;
