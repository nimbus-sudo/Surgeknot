import { useState } from 'react';
import { Tooltips } from './Tooltip'
import styles from './Content.module.css'

export default function Content() {
  const [active, setActive] = useState(null);

  function tooltipHandl(status) {
    switch (status) {
      case status:
        if (active === null) return setActive(status);
        if (status === active) return setActive(null);
      default:
        return setActive(status);
    }
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content__card}>
          <div className={styles.content__container}>
            <div className={`${styles.content} ${styles.fadeUpIn}`}>
              <h3 className={`${styles.heading} ${styles.name}`}>Miyabi</h3>
              <p className={styles.para}><q>Order cannot be broken.</q></p>
            </div>
          </div>

          <Tooltips status={active} />

          <div className={styles.btn__container}>
            <button className={styles.btn} onClick={() => tooltipHandl('attribute')}>
              <img className={styles.btn_img} src="icons/Icon_Frost_dark.webp" alt="Frost Attribute" />
            </button>
            <button className={styles.btn} onClick={() => tooltipHandl('specialty')}>
              <img className={styles.btn_img} src="icons/Icon_Anomaly_dark.webp" alt="Anomaly" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
