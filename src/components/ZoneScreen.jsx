import { useParams, useNavigate } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import ArticleCard from './ArticleCard';
import WidgetSlot from './WidgetSlot';
import { zones } from '../data/content';
import styles from '../styles/ZoneScreen.module.css';

export default function ZoneScreen() {
  const { zoneId } = useParams();
  const navigate = useNavigate();
  const zone = zones.find(z => z.id === zoneId);

  if (!zone) {
    return (
      <main className={styles.zone}>
        <p>Zone not found.</p>
        <button onClick={() => navigate('/')}>Back</button>
      </main>
    );
  }

  const articles = zone.articles.filter(a => a.status === 'published');

  return (
    <main className={styles.zone} style={{ '--accent': zone.accentColor }}>
      <Breadcrumb zone={zone.name} />
      <p className={styles.description}>{zone.description}</p>
      <WidgetSlot zoneId={zoneId} />
      <section className={styles.list} aria-label={`${zone.name} articles`}>
        {articles.length === 0
          ? <p className={styles.empty}>No published articles yet.</p>
          : articles.map((a, i) => <ArticleCard key={i} article={a} />)
        }
      </section>
    </main>
  );
}
