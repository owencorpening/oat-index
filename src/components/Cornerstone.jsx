const CORNERSTONE_URL = 'https://raw.githubusercontent.com/owencorpening/images/main/brand/oat-cornerstone/exports/oat-badge-large-200.png';

export default function Cornerstone({ size = 64 }) {
  return (
    <img
      src={CORNERSTONE_URL}
      alt="Owen's Applied Thinking"
      width={size}
      height={size}
      style={{ display: 'block', borderRadius: 8 }}
      onError={e => {
        e.target.style.display = 'none';
        e.target.nextSibling.style.display = 'flex';
      }}
    />
  );
}
