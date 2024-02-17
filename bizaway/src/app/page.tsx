import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.textContainer} >
        <h2 className={styles.title}> Welcome </h2>
        <button className={styles.button}> Start </button>
      </div>
    </main>
  );
}
