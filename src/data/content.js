const BASE = 'https://owencorpening.substack.com/p';

export const zones = [
  {
    id: 'water',
    name: 'Water',
    icon: 'droplet',
    accentColor: '#1D9E75',
    description: 'Global water engineering and infrastructure',
    articles: [
      { title: 'Part IX – The Global Water–Energy–Transport Corridors', series: 'Water', part: '09', date: '2026-05-12', url: `${BASE}/part-ix-the-global-waterenergytransport`, status: 'published' },
      { title: 'One Year at a Time', series: 'Water', part: null, date: '2026-04-24', url: `${BASE}/one-year-at-a-time-53b`, status: 'published' },
      { title: 'The Aquifer Restoration Manifesto', series: 'Water', part: 'manifesto', date: '2026-05-14', url: `${BASE}/the-aquifer-restoration-manifesto`, status: 'published' },
      { title: 'Part VIII – The Global Water Engineering Surge: A Six-Continent Mobilization', series: 'Water', part: '08', date: '2026-02-11', url: `${BASE}/part-viii-the-global-water-engineering`, status: 'published' },
      { title: 'Part VII – Integrated Infrastructure Surge', series: 'Water', part: '07', date: '2026-02-03', url: `${BASE}/part-vii-integrated-infrastructure`, status: 'published' },
      { title: 'Part VI – Sensitivity, Velocity, and the Cost of Delay', series: 'Water', part: '06', date: '2026-01-27', url: `${BASE}/part-vi-sensitivity-velocity-and`, status: 'published' },
      { title: 'Part V – Triage: The Engineering of Survival', series: 'Water', part: '05', date: '2026-01-11', url: `${BASE}/part-v-prioritizing-watersheds-engineering`, status: 'published' },
      { title: 'Part IV – Conflicts in Asia\'s Watersheds', series: 'Water', part: '04', date: '2025-12-14', url: `${BASE}/part-iv-conflicts-in-asias-watersheds`, status: 'published' },
      { title: 'Part III – Water Neutrality and Governance Substrate', series: 'Water', part: '03', date: '2025-11-26', url: `${BASE}/part-iii-water-neutrality-and-governance`, status: 'published' },
      { title: 'Part II – Replumbing the Region: The Last Mile', series: 'Water', part: '02', date: '2025-11-18', url: `${BASE}/part-ii-replumbing-the-region-the`, status: 'published' },
      { title: 'Part I – Foundation and Recovery', series: 'Water', part: '01', date: '2025-11-12', url: `${BASE}/part-i-middle-east-water-resilience-b91`, status: 'published' },
      { title: 'Water Series Guide', series: 'Water', part: 'guide', date: '2025-11-12', url: `${BASE}/series-guide`, status: 'published' },
    ],
  },
  {
    id: 'cng',
    name: 'CNG',
    icon: 'flame',
    accentColor: '#BA7517',
    description: 'Compressed natural gas as a bridge fuel strategy',
    articles: [
      { title: 'The CNG Manifesto', series: 'CNG', part: null, date: '2026-05-28', url: `${BASE}/the-cng-manifesto`, status: 'published' },
      { title: 'The American Retrofit Project (CNG Series Guide)', series: 'CNG', part: 'guide', date: '2025-11-04', url: `${BASE}/the-energy-strategy-that-makes-everything`, status: 'published' },
      { title: 'The Unintended Casualties of Clean Combustion', series: 'CNG', part: '05', date: '2025-11-03', url: `${BASE}/the-unintended-casualties-of-clean`, status: 'published' },
      { title: 'The Decade of Restoration: 2025–2035', series: 'CNG', part: '04', date: '2025-11-03', url: `${BASE}/the-decade-of-restoration-2025-2035`, status: 'published' },
      { title: 'CNG Sequel: The Ultimate Geopolitical Shield', series: 'CNG', part: '02', date: '2025-10-16', url: `${BASE}/cng-sequel-the-ultimate-geopolitical`, status: 'published' },
      { title: 'The Natural Gas Vehicle Conversion Nobody\'s Talking About', series: 'CNG', part: '01', date: '2025-10-11', url: `${BASE}/the-natural-gas-vehicle-conversion`, status: 'published' },
    ],
  },
  {
    id: 'medical',
    name: 'Medical',
    icon: 'stethoscope',
    accentColor: '#185FA5',
    description: 'Engineering applied to diagnostics and medicine',
    articles: [],
  },
  {
    id: 'family',
    name: 'Family',
    icon: 'users',
    accentColor: '#993556',
    description: 'Personal essays and family history',
    articles: [
      { title: 'The Difference Between a Genome and DNA', series: 'Family', part: null, date: '2026-05-26', url: `${BASE}/the-difference-between-a-genome-and`, status: 'published' },
    ],
  },
];

export const featured = [
  { title: 'The CNG Manifesto', series: 'CNG', date: '2026-05-28', url: `${BASE}/the-cng-manifesto` },
  { title: 'The Difference Between a Genome and DNA', series: 'Family', date: '2026-05-26', url: `${BASE}/the-difference-between-a-genome-and` },
  { title: 'They\'ve Already Been Doing It', series: 'Standalone', date: '2026-05-23', url: `${BASE}/theyve-already-been-doing-it` },
];

export const widgets = {
  water: {
    label: 'Planetary Aquifer Registry',
    url: 'https://owencorpening.github.io/widgets/planetary-aquifer-registry.html',
    embedType: 'iframe',
  },
  cng: null,
  medical: null,
  family: null,
};
