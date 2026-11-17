
import React from 'react'

const tabs = ['All Categories', 'Income', 'Expense']

const CategoryTabs = ({ activeTab, onChange }) => {
    return (
        <div className="flex w-fit items-center gap-1 rounded-xl border border-border bg-bg p-1">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => onChange(tab)}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                        activeTab === tab
                            ? 'bg-surface text-primary shadow-sm'
                            : 'text-text-muted hover:text-text'
                    }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    )
}

export default CategoryTabs
