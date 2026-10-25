import styles from './Button.module.css'

export default function Button() {
  return (
    <>
      <div className={styles.wrapper}>
        <button className={styles.btn}>DEMO</button>
        <button className={styles.btn}>DETAILS</button>
      </div>
    </>
  );
}
