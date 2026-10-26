import { useEffect, useState } from 'react'
import styles from './Tooltip.module.css'

export function Tooltips({ status }) {
  const [data, setData] = useState('nothing');
  const [style, setStyle] = useState(null);

  useEffect(() => {
    const slideUp = `${styles.slideUp}`;

    switch (status) {
      case 'attribute':
        if (style === null) {
          setData(status);
          return setStyle(slideUp);
        }
        if (style === slideUp) {
          return setData(status);
        } else {
          setData(status);
          return setStyle(slideUp);
        };

      case 'specialty':
        if (style === null) {
          setData(status);
          return setStyle(slideUp)
        }
        if (style === slideUp) {
          return setData(status);
        } else {
          setData(status);
          return setStyle(slideUp);
        };

      default:
        if (style === slideUp) return setStyle(`${styles.slideDown}`);
    }
  }, [status]);


  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.hidden}>
          <div className={`${styles.card} ${style}`}>
            <p className={styles.desc}>{data}</p>
          </div>
        </div>
      </div>
    </>
  )
}
