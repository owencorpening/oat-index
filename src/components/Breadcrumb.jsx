import { Link } from 'react-router-dom';
import styles from '../styles/Breadcrumb.module.css';

export default function Breadcrumb({ zone }) {
  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <Link to="/" className={styles.home}>OAT</Link>
      <span className={styles.sep} aria-hidden="true">›</span>
      <span className={styles.current}>{zone}</span>
    </nav>
  );
}
