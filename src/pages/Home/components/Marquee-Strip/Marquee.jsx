import styles from './Marquee.module.css'

export default function Marquee() {
  return (
    <>
      <div className={styles.wrapper} aria-hidden='true'>
        <div className={styles.text_container}>
          <span>✦ DISPLAY ONLY ✦ ZENLESS ZONE ZERO </span>
          <span>✦ DISPLAY ONLY ✦ ZENLESS ZONE ZERO </span>
        </div>
      </div>
    </>
  );
}
