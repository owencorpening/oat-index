import { widgets } from '../data/content';
import styles from '../styles/WidgetSlot.module.css';

export default function WidgetSlot({ zoneId }) {
  const widget = widgets[zoneId];
  if (!widget) return null;

  if (widget.embedType === 'iframe') {
    return (
      <div className={styles.slot}>
        <div className={styles.label}>{widget.label}</div>
        <iframe
          src={widget.url}
          title={widget.label}
          className={styles.frame}
          sandbox="allow-scripts allow-same-origin"
          loading="lazy"
        />
      </div>
    );
  }

  return null;
}
