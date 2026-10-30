import { useEffect, useState } from 'react';
import styles from './Info-box.module.css'

export default function InfoBox({ activeInfo }) {
  const data = {
    agent: {
      name: 'Phoenix',
      desc: "I'm Phoenix, one of Krampus's... judge, of sorts. Standing around's a little tiring—mind if I sit?"
    },
    attribute: {
      name: 'Fire',
      desc: 'Dealing <b>Fire DMG</b> to enemies.'
    },
    specialty: {
      name: 'Anomaly',
      desc: 'Quickly accumulating <b>Anomaly Buildup</b>, and triggering massive <b>Attribute Anomaly DMG</b>.'
    }
  };
  const [info, setInfo] = useState(data.agent);

  useEffect(() => {
    switch (activeInfo) {
      case 'attribute':
        return setInfo(data.attribute);
      case 'specialty':
        return setInfo(data.specialty);
      default:
        return setInfo(data.agent);
    }

  }, [activeInfo]);

  return (
    <>
      <div className={`${styles.wrapper} fadeUp`} style={{ '--delay': '4' }}>
        <h3 className={styles.heading}>{info.name}</h3>
        <p className={styles.para} dangerouslySetInnerHTML={{ __html: info.desc }} />
      </div >
    </>
  );
}
