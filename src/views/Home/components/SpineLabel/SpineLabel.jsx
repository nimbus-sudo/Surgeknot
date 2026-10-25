import styles from './SpineLabel.module.css'

export default function SpineLabel() {
  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={`${styles.heading} ${styles.record}`}>RECORD</h2>
        <h3 className={`${styles.heading} ${styles.agent}`}>AGENT✦</h3>
      </div>
    </>
  );
}
