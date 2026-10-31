import styles from './Portrait.module.css'

export default function Portrait() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.portrait}>
          <img src="image/Agent-Phoenix-Reffaella-Portrait.webp" alt="Phoenix" className={`${styles.img} fadeUp`} style={{ '--delay': '2', '--speed': '600ms' }} />
        </div>
      </div>
    </>
  );
}
