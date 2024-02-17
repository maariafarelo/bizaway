import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.textContainer} >
        <h2 className={styles.title}> Welcome to (nom xd)!</h2>
        <a href= '/form'>
          <button className={styles.button} > Start </button>
        </a>
      </div>
    </main>
  );
}
