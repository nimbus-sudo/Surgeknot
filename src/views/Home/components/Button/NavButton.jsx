import styles from './NavButton.module.css'

export default function NavButton() {
  return (
    <>
      <button className={styles.btn}>
        <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 148.399 267.057"><path d="M0 11.027v244.427a10.17 10.17 0 0 0 6.28 9.4l2.601 1.077a14.79 14.79 0 0 0 16.12-3.207l119.24-119.239a14.197 14.197 0 0 0 0-20.077L25.433 4.6A15.71 15.71 0 0 0 8.317 1.196l-2.417 1A9.56 9.56 0 0 0 0 11.028" /></svg>
      </button>
    </>
  );
}
