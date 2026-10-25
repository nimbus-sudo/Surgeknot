import styles from './AgentDisplay.module.css'

export default function AgentDisplay() {
  return (
    <>
      <div className={styles.wrapper}>
        <img src='image/miyabi-portrait.png' alt="Miyabi" className={styles.portrait} />
        <img src='image/pheonix_portrait.png' alt="Pheonix" className={styles.portrait} style={{ display: 'none' }} />
      </div>
    </>
  );
}
