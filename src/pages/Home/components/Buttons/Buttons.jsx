import styles from './Buttons.module.css'

export default function Buttons() {
  return (
    <>
      <div className={`${styles.wrapper} fadeUp`} style={{ '--delay': '5' }}>
        <button className={`${styles.btn} ${styles.demo}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 148.399 267.057"><path d="M0 11.027v244.427a10.17 10.17 0 0 0 6.28 9.4l2.601 1.077a14.79 14.79 0 0 0 16.12-3.207l119.24-119.239a14.197 14.197 0 0 0 0-20.077L25.433 4.6A15.71 15.71 0 0 0 8.317 1.196l-2.417 1A9.56 9.56 0 0 0 0 11.028" /></svg>
        </button>
        <button className={`${styles.btn} ${styles.detail}`}>DETAIL</button>
      </div>
    </>
  );
}
