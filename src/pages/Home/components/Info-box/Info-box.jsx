import styles from './Info-box.module.css'

export default function InfoBox() {
  return (
    <>
      <div className={`${styles.wrapper} fadeUp`} style={{ '--delay': '4' }}>
        <h3 className={styles.heading}>Phoenix</h3>
        <p className={styles.para}>I'm Phoenix, one of Krampus's... judge, of sorts.
          Standing around's a little tiring—mind if I sit?</p>
      </div>
    </>
  );
}
