import { Logo } from '../../assets/Logo';
import igniteLogo from './../../assets/Ignite-simbol.svg'
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <Logo alt="Logotipo do canal"/>
      {/**<img src={igniteLogo} />*/}
        {/**<h3>Ignite Feed</h3>*/}
    </header>
  );
}
