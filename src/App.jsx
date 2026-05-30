import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HubScreen from './components/HubScreen';
import ZoneScreen from './components/ZoneScreen';
import './styles/global.css';

export default function App() {
  return (
    <BrowserRouter basename="/oat-index">
      <Routes>
        <Route path="/" element={<HubScreen />} />
        <Route path="/:zoneId" element={<ZoneScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
