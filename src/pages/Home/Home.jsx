import { useState } from 'react';
import styles from './Home.module.css'
import { Buttons, Heading, IconBox, InfoBox, Marquee, Portrait } from './components'

export default function Home() {
  const [isInfo, setInfo] = useState('agent');
  const btnHandle = (status) => {
    setInfo(status);
  };

  return (
    <>
      <main className={styles.wrapper}>
        <Marquee />
        <Portrait />
        <Heading />

        <div className={styles.content__container}>
          <IconBox onClick={btnHandle} status={isInfo} />
          <InfoBox status={isInfo} />
          <Buttons />
        </div>
      </main >
    </>
  );
}
