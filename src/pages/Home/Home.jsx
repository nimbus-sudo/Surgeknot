import styles from './Home.module.css'
import { Buttons, Heading, IconBox, InfoBox, Marquee, Portrait } from './components'

export default function Home() {
  return (
    <>
      <main className={styles.wrapper}>
        <Marquee />
        <Portrait />
        <Heading />

        <div className={styles.content__container}>
          <IconBox />
          <InfoBox />
          <Buttons />
        </div>
      </main >
    </>
  );
}
