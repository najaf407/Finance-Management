import React from 'react'
import { ListChecks, Tags, ArrowDownLeft, ArrowUpRight } from 'lucide-react'

const QuickActions = ({
    onManageTransactions,
    onManageCategories,
    onAddIncome,
    onAddExpense,
}) => {
    const actions = [
        {
            label: 'Manage transactions',
            icon: ListChecks,
            onClick: onManageTransactions,
            tone: 'bg-primary-soft text-primary',
        },
        {
            label: 'Manage categories',
            icon: Tags,
            onClick: onManageCategories,
            tone: 'bg-primary-soft text-primary',
        },
        {
            label: 'Add income',
            icon: ArrowDownLeft,
            onClick: onAddIncome,
            tone: 'bg-success/10 text-success',
        },
        {
            label: 'Add expense',
            icon: ArrowUpRight,
            onClick: onAddExpense,
            tone: 'bg-error/10 text-error',
        },
    ]

    return (
        <section>
            <h2 className="mb-3 text-lg font-semibold text-text">Quick actions</h2>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
                {actions.map(({ label, icon: Icon, onClick, tone }) => (
                    <button
                        key={label}
                        onClick={onClick}
                        className="flex min-w-0 cursor-pointer items-center gap-3 rounded-2xl border border-border bg-surface p-3 text-left transition-colors hover:border-primary sm:p-4"
                    >
                        <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${tone}`}>
                            <Icon size={20} />
                        </span>
                        <span className="text-sm font-medium text-text">{label}</span>
                    </button>
                ))}
            </div>
        </section>
    )
}

export default QuickActions