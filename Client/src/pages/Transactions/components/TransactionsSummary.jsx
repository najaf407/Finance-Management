import React, { useState } from 'react'

const ranges = ['7 days', '30 days', '90 days', 'All time']

const formatAmount = (value) => `Rs. ${value.toLocaleString('en-US')}`

const TransactionsSummary = ({
    net = 43000,
    income = 85000,
    expense = 42000,
    onRangeChange,
}) => {
    const [range, setRange] = useState('30 days')

    const handleRange = (value) => {
        setRange(value)
        onRangeChange?.(value)
    }

    const items = [
        { label: 'Net balance', value: net, dot: 'bg-primary' },
        { label: 'Total income', value: income, dot: 'bg-success' },
        { label: 'Total expense', value: expense, dot: 'bg-error' },
    ]

    return (
        <section className="overflow-hidden rounded-2xl border border-border bg-surface">
            {/* Filter bar */}
            <div className="flex items-center justify-between gap-3 border-b border-border p-3 sm:px-5">
                <p className="hidden text-sm font-semibold text-text sm:block">Overview</p>

                <div className="flex w-full rounded-xl bg-bg p-1 sm:w-auto">
                    {ranges.map((item) => (
                        <button
                            key={item}
                            onClick={() => handleRange(item)}
                            className={`flex-1 cursor-pointer rounded-lg px-3 py-1.5 text-xs font-medium transition-colors sm:flex-none ${
                                range === item
                                    ? 'bg-primary-soft text-primary'
                                    : 'text-text-muted hover:text-text'
                            }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            {/* Three values in one connected strip */}
            <div className="grid grid-cols-3 divide-x divide-border">
                {items.map(({ label, value, dot }) => (
                    <div key={label} className="min-w-0 p-3 sm:px-5 sm:py-4">
                        <div className="flex items-center gap-2">
                            <span className={`size-2 shrink-0 rounded-full ${dot}`} />
                            <p className="truncate text-xs text-text-muted sm:text-sm">{label}</p>
                        </div>
                        <p className="mt-1 truncate font-numbers text-base font-semibold text-text sm:text-2xl">
                            {formatAmount(value)}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TransactionsSummary