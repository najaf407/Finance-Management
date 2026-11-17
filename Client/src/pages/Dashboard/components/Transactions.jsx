import React from 'react'
import { ArrowDownLeft, ArrowUpRight } from 'lucide-react'

const sampleData = [
    { id: 1, category: 'Salary', type: 'income', amount: 180000, date: '2026-11-15' },
    { id: 2, category: 'Food', type: 'expense', amount: 2400, date: '2026-11-15' },
    { id: 3, category: 'Transport', type: 'expense', amount: 1200, date: '2026-11-14' },
    { id: 4, category: 'Bills', type: 'expense', amount: 9000, date: '2026-11-13' },
    { id: 5, category: 'Freelance', type: 'income', amount: 35000, date: '2026-11-12' },
    { id: 6, category: 'Shopping', type: 'expense', amount: 7000, date: '2026-11-11' },
    { id: 7, category: 'Food', type: 'expense', amount: 3100, date: '2026-11-10' },
    { id: 8, category: 'Rent', type: 'expense', amount: 25000, date: '2026-11-09' },
    { id: 9, category: 'Transport', type: 'expense', amount: 800, date: '2026-11-08' },
    { id: 10, category: 'Gift', type: 'income', amount: 5000, date: '2026-11-07' },
]

const formatDate = (date) =>
    new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })

const Row = ({ category, type, amount, date }) => {
    const isIncome = type === 'income'

    return (
        <li className="flex items-center gap-3 py-2.5">
            <div
                className={`flex size-9 shrink-0 items-center justify-center rounded-xl ${
                    isIncome ? 'bg-success/10 text-success' : 'bg-error/10 text-error'
                }`}
            >
                {isIncome ? <ArrowDownLeft size={18} /> : <ArrowUpRight size={18} />}
            </div>

            <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-text">{category}</p>
                <p className="text-xs text-text-muted">{formatDate(date)}</p>
            </div>

            <p className={`font-numbers text-sm font-semibold ${isIncome ? 'text-success' : 'text-error'}`}>
                {isIncome ? '+' : '-'}Rs {amount.toLocaleString('en-US')}
            </p>
        </li>
    )
}

const Transactions = ({ transactions = sampleData, limit = 12, onViewAll }) => {
    // newest first, keep the last `limit`, then split into two columns for lg
    const items = [...transactions]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, limit)

    const half = Math.ceil(items.length / 2)
    const columns = [items.slice(0, half), items.slice(half)]

    return (
        <section className="rounded-2xl border border-border bg-surface p-4 sm:p-5">
            <div className="flex items-center justify-between gap-4">
                <div>
                    <h2 className="text-lg font-semibold text-text">Recent transactions</h2>
                    <p className="text-sm text-text-muted">Your last {limit} transactions</p>
                </div>
                <button
                    onClick={onViewAll}
                    className="cursor-pointer text-sm font-medium text-primary hover:underline"
                >
                    View all
                </button>
            </div>

            {items.length === 0 ? (
                <p className="py-10 text-center text-sm text-text-muted">No transactions yet.</p>
            ) : (
                // mobile: scrolls inside the card | lg: two columns side by side
                <div className="mt-3 grid max-h-80 overflow-y-auto lg:max-h-none lg:grid-cols-2 lg:gap-x-10">
                    {columns.map((column, i) => (
                        <ul
                            key={i}
                            className={`divide-y divide-border ${
                                i > 0 ? 'border-t border-border lg:border-t-0' : ''
                            }`}
                        >
                            {column.map((item) => (
                                <Row key={item.id} {...item} />
                            ))}
                        </ul>
                    ))}
                </div>
            )}
        </section>
    )
}

export default Transactions