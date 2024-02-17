import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.textContainer} >
        <h2 className={styles.title}> Welcome to Bizamaps! </h2>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/galicia.svg" alt="icon"/>
        <a href= '/form'>
          <button className={styles.button} > Start grouping people </button>
        </a>
      </div>
    </main>
  );
}
