import styles from './Heading.module.css'

export default function Heading() {
  return (
    <>
      <div className={`${styles.wrapper} fadeUp`} style={{ '--delay': '1' }}>
        <div className={styles.sticker}>
          <h3 className={styles.left_num}>3.</h3>
          <h3 className={styles.right_num}>2</h3>
        </div>

        <h2 className={styles.heading}>EXCLUSIVE CHANNEL</h2>
      </div>
    </>
  );
}
