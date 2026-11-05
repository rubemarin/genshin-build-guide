import { Navigate, Route, Routes } from 'react-router-dom';
import { CharacterPage } from './pages/CharacterPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/characters/vesna" replace />} />
      <Route path="/characters/:characterId" element={<CharacterPage />} />
      <Route path="*" element={<Navigate to="/characters/vesna" replace />} />
    </Routes>
  );
}
