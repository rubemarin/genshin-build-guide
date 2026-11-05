import type { GuideTab } from '../types/character';

interface StickyTabsProps {
  activeTab: GuideTab;
  onChange: (tab: GuideTab) => void;
}

const tabs: { id: GuideTab; label: string }[] = [
  { id: 'weapons', label: '武器' },
  { id: 'artifacts', label: '聖遺物' },
  { id: 'status', label: 'ステータス' },
  { id: 'talents', label: '天賦' },
  { id: 'teams', label: '編成' },
  { id: 'combo', label: 'コンボ' },
];

export function StickyTabs({ activeTab, onChange }: StickyTabsProps) {
  return (
    <nav className="sticky-tabs" aria-label="キャラクター情報">
      <div className="sticky-tabs__inner">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`sticky-tabs__button ${activeTab === tab.id ? 'is-active' : ''}`}
            aria-current={activeTab === tab.id ? 'page' : undefined}
            onClick={() => onChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
