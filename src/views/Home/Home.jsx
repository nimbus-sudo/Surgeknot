import styles from './Home.module.css'
import { AgentDisplay, Content, SpineLabel, Button, NavButton } from './components'

export default function Home() {
  return (
    <>
      <main className={styles.wrapper}>
        <div className={`${styles.card} ${styles.fadeInDown}`}>
          <AgentDisplay />

          <SpineLabel />

          <Content />

          <Button />
          <NavButton />
        </div>
      </main >
    </>
  );
}
