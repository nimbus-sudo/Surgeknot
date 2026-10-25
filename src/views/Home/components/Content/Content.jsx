import styles from './Content.module.css'

export default function Content() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content__card}>
          <div className={styles.content__text}>
            <h3 className={`${styles.heading} ${styles.name} ${styles.fadeUpIn}`}>MIYABI</h3>
            <p className={`${styles.para} ${styles.fadeUpIn} `} style={{ '--delay': 1 }}><q>Order cannot be broken.</q></p>
          </div>

          <div className={styles.icon__container}>
            <div className={styles.icon}>
              <img className={styles.icon_img} src="icons/Icon_Anomaly_dark.webp" alt="Anomaly" />
            </div>
            <div className={styles.icon}>
              <img className={styles.icon_img} src="icons/Icon_Frost_dark.webp" alt="Frost Attribute" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
