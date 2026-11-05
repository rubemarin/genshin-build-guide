import { useState } from 'react';
import type { StatusProfile } from '../types/character';

export function StatusSection({ profiles, note }: { profiles: StatusProfile[]; note: string }) {
  const [cryoResonance, setCryoResonance] = useState(false);

  return (
    <section className="section-stack">
      <div className="panel">
        <div className="section-heading-row">
          <div>
            <h2>目標ステータス</h2>
            <p className="muted">元資料の4条件を、元の並び順で表示しています。</p>
          </div>
          <label className="toggle-control">
            <input
              type="checkbox"
              checked={cryoResonance}
              onChange={(event) => setCryoResonance(event.target.checked)}
            />
            <span>氷共鳴あり</span>
          </label>
        </div>

        <div className="status-profile-grid">
          {profiles.map((profile) => (
            <article className="status-profile" key={profile.id}>
              <h3>{profile.label}</h3>
              <dl>
                <div><dt>攻撃力</dt><dd>{profile.attack}</dd></div>
                <div><dt>元素熟知</dt><dd>{profile.mastery}</dd></div>
                <div><dt>チャージ</dt><dd>{profile.energyRecharge}</dd></div>
                <div><dt>会心率</dt><dd>{cryoResonance ? '最大70%目安' : profile.critRate}</dd></div>
                <div><dt>会心ダメージ</dt><dd>{profile.critDamage}</dd></div>
              </dl>
            </article>
          ))}
        </div>
        <p className="notice">{note}</p>
        <p className="muted small">※目標値は戦闘前のステータスです。条件A〜Dの具体的な条件名は、元資料の列に対応する情報を確認してから設定してください。</p>
      </div>
    </section>
  );
}
