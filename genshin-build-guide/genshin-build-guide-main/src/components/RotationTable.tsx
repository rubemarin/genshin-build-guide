import type { RotationRow } from '../types/character';

export function RotationTable({ rows }: { rows: RotationRow[] }) {
  if (rows.length === 0) {
    return <p className="empty-message">ローテーションは未登録です。guide.ts の rotation にキャラクター名と動作を追加してください。</p>;
  }

  return (
    <div className="table-scroll">
      <table className="rotation-table">
        <thead><tr><th>キャラ名</th><th>動作</th></tr></thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${row.characterName}-${index}`}>
              <th scope="row">{row.characterName}</th>
              <td className="rotation-actions">{row.actions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
