import { useEffect } from 'react';
import styles from './Icon-box.module.css'

export default function IconBox({ onClick, status }) {
  useEffect(() => {
    function toggleHandler(event) {
      const condition = event.target.getAttribute('data-group') === 'Info-box';

      if (!condition) onClick('agent');

      console.log(event);
    };

    window.addEventListener('click', toggleHandler);

    return () => window.removeEventListener('click', toggleHandler);
  }, []);

  function toggleHandl(setStatus) {
    if (status === setStatus) {
      onClick('agent');
    } else {
      onClick(setStatus);
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={`${styles.icon__container} fadeUp`} style={{ '--delay': '3' }}>
          <div className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208.348 208.348"><path d="M0 3.108V205.24a3.11 3.11 0 0 0 3.108 3.108h45.74a3.11 3.11 0 0 0 3.109-3.108V92.64a1.18 1.18 0 0 1 2.013-.834l95.56 95.56a3.11 3.11 0 0 0 4.396 0l33.44-33.441a3.11 3.11 0 0 0 0-4.396L91.808 53.97a1.18 1.18 0 0 1 .834-2.013H205.24a3.11 3.11 0 0 0 3.108-3.108V3.109A3.11 3.11 0 0 0 205.24 0H3.108A3.11 3.11 0 0 0 0 3.108" /></svg>
          </div>

          <button
            className={`${styles.icon} ${styles.btn}`}
            data-group='Info-box'
            onClick={() => toggleHandl('attribute')}
          >
            <img src="icons/Icon_Frost_dark.webp" alt="Frost Atrribte" />
          </button>
          <button
            className={`${styles.icon} ${styles.btn}`}
            data-group='Info-box'
            onClick={() => toggleHandl('specialty')}
          >
            <img src="icons/Icon_Anomaly_dark.webp" alt="Frost Atrribte" />
          </button>
        </div>
      </div>
    </>
  );
}
