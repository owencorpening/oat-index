import { useState, useEffect, useRef } from 'react';
import { featured } from '../data/content';
import styles from '../styles/FeaturedRotator.module.css';

const INTERVAL = 3500;

export default function FeaturedRotator() {
  const [index, setIndex] = useState(0);
  const reduced = useRef(window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  useEffect(() => {
    if (reduced.current) return;
    const id = setInterval(() => setIndex(i => (i + 1) % featured.length), INTERVAL);
    return () => clearInterval(id);
  }, []);

  if (reduced.current) {
    return (
      <div className={styles.stack}>
        {featured.map((a, i) => <FeaturedCard key={i} article={a} />)}
      </div>
    );
  }

  return (
    <div className={styles.rotator}>
      <FeaturedCard article={featured[index]} />
      <div className={styles.dots} role="tablist" aria-label="Featured articles">
        {featured.map((_, i) => (
          <button
            key={i}
            className={i === index ? `${styles.dot} ${styles.active}` : styles.dot}
            onClick={() => setIndex(i)}
            aria-selected={i === index}
            aria-label={`Article ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function FeaturedCard({ article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
      aria-label={`${article.title} — opens in new tab`}
    >
      <span className={styles.series}>{article.series} · {article.date}</span>
      <span className={styles.title}>{article.title}</span>
      <span className={styles.ext} aria-hidden="true">↗</span>
    </a>
  );
}
