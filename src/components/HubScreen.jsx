import { useNavigate } from 'react-router-dom';
import Cornerstone from './Cornerstone';
import FeaturedRotator from './FeaturedRotator';
import { zones } from '../data/content';
import styles from '../styles/HubScreen.module.css';

const ICONS = {
  droplet: '💧',
  flame: '🔥',
  stethoscope: '🩺',
  users: '👥',
};

export default function HubScreen() {
  const navigate = useNavigate();
  const published = zones.map(z => ({
    ...z,
    count: z.articles.filter(a => a.status === 'published').length,
  }));

  return (
    <main className={styles.hub}>
      <header className={styles.header}>
        <Cornerstone size={64} />
        <div className={styles.wordmark}>
          <h1 className={styles.title}>Owen's Applied Thinking</h1>
          <p className={styles.tagline}>Engineering · Evidence · Empiricism</p>
        </div>
      </header>

      <section className={styles.featured} aria-label="Featured articles">
        <FeaturedRotator />
      </section>

      <section className={styles.zones} aria-label="Content zones">
        <div className={styles.grid}>
          {published.map(zone => (
            <button
              key={zone.id}
              className={styles.tile}
              data-series={zone.id}
              style={{ '--accent': zone.accentColor }}
              onClick={() => navigate(`/${zone.id}`)}
              aria-label={`${zone.name} — ${zone.count} articles`}
            >
              <span className={styles.icon}>{ICONS[zone.icon]}</span>
              <span className={styles.zoneName}>{zone.name}</span>
              <span className={styles.count}>{zone.count}</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
