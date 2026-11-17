
import React from 'react'
import { Tags, TrendingUp, TrendingDown } from 'lucide-react'

const summary = [
    {
        title: 'Total Categories',
        count: 12,
        icon: Tags,
        color: 'text-primary',
        bg: 'bg-primary-soft',
    },
    {
        title: 'Income Categories',
        count: 4,
        icon: TrendingUp,
        color: 'text-success',
        bg: 'bg-primary-soft',
    },
    {
        title: 'Expense Categories',
        count: 8,
        icon: TrendingDown,
        color: 'text-error',
        bg: 'bg-error/10',
    },
]

const CategorySummary = () => {
    return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {summary.map((item) => {
                const Icon = item.icon

                return (
                    <div
                        key={item.title}
                        className="flex items-center justify-between rounded-2xl border border-border bg-surface p-4 sm:p-5"
                    >
                        <div>
                            <p className="text-sm text-text-muted">
                                {item.title}
                            </p>

                            <h3 className="mt-2 text-2xl font-semibold text-text">
                                {item.count}
                            </h3>
                        </div>

                        <div className={`flex size-11 items-center justify-center rounded-xl ${item.bg}`}>
                            <Icon size={21} className={item.color} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CategorySummary
