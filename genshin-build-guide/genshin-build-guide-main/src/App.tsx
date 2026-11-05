import { Navigate, Route, Routes } from 'react-router-dom';
import { CharacterPage } from './pages/CharacterPage';
import { CharacterSelectPage } from './pages/CharacterSelectPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CharacterSelectPage />} />
      <Route path="/characters/:characterId" element={<CharacterPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
