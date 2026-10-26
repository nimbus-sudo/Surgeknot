import styles from './AgentDisplay.module.css'

export default function AgentDisplay() {
  return (
    <>
      <div className={styles.wrapper}>
        <img src='image/miyabi-portrait.png' alt="Miyabi" loading='lazy' className={`${styles.portrait} ${styles.slideUp}`} />
        <img src='image/pheonix_portrait.png' alt="Pheonix" loading='lazy' className={styles.portrait} style={{ display: 'none' }} />
      </div>
    </>
  );
}
