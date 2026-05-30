import styles from '../styles/ArticleCard.module.css';

export default function ArticleCard({ article }) {
  const { title, series, part, date, url } = article;
  const label = part && part !== 'guide' && part !== 'manifesto'
    ? `${series} · Part ${part}`
    : series;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
      aria-label={`${title} — opens in new tab`}
    >
      <div className={styles.meta}>
        <span className={styles.label}>{label}</span>
        <span className={styles.date}>{date}</span>
      </div>
      <div className={styles.title}>{title}</div>
      <span className={styles.ext} aria-hidden="true">↗</span>
    </a>
  );
}
