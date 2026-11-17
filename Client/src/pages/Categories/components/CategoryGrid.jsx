
import React from 'react'
import {Utensils, Car, Wallet, ShoppingBag, Pencil, Trash2, ArrowDownLeft, ArrowUpRight,} from 'lucide-react'

const categories = [
    { id: 1, name: 'Food & Dining', count: 12, amount: 12500, type: 'Expense', icon: Utensils },
    { id: 2, name: 'Transportation', count: 8, amount: 4200, type: 'Expense', icon: Car },
    { id: 3, name: 'Salary', count: 2, amount: 65000, type: 'Income', icon: Wallet },
    { id: 4, name: 'Shopping', count: 5, amount: 7800, type: 'Expense', icon: ShoppingBag },
]

const CategoryGrid = () => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">

            {categories.map((category) => {
                const Icon = category.icon
                const isIncome = category.type === 'Income'

                return (
                    <div
                        key={category.id}
                        className="rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-primary/40 sm:p-5"
                    >
                        {/* Top */}
                        <div className="flex items-start justify-between">
                            <div className={`flex size-11 items-center justify-center rounded-xl ${
                                isIncome ? 'bg-primary-soft text-success' : 'bg-bg text-text-muted'
                            }`}>
                                <Icon size={21} />
                            </div>

                            <div className="flex items-center gap-1">
                                <button
                                    className="rounded-lg p-2 text-text-muted transition-colors hover:bg-primary-soft hover:text-primary"
                                    aria-label={`Edit ${category.name}`}
                                >
                                    <Pencil size={16} />
                                </button>

                                <button
                                    className="rounded-lg p-2 text-text-muted transition-colors hover:bg-error/10 hover:text-error"
                                    aria-label={`Delete ${category.name}`}
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Category Info */}
                        <div className="mt-4">
                            <h3 className="text-base font-semibold text-text">
                                {category.name}
                            </h3>

                            <p className="mt-1 text-xs text-text-muted">
                                {category.count} transactions
                            </p>
                        </div>

                        {/* Amount */}
                        <div className="mt-4 flex items-end justify-between gap-2 border-t border-border pt-4">
                            <div>
                                <p className="text-xs text-text-muted">
                                    Total {isIncome ? 'Received' : 'Spent'}
                                </p>

                                <p className="mt-1 text-lg font-semibold text-text">
                                    Rs. {category.amount.toLocaleString('en-PK')}
                                </p>
                            </div>

                            <span className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-medium ${
                                isIncome
                                    ? 'bg-primary-soft text-success'
                                    : 'bg-error/10 text-error'
                            }`}>
                                {isIncome
                                    ? <ArrowDownLeft size={14} />
                                    : <ArrowUpRight size={14} />
                                }
                                {category.type}
                            </span>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default CategoryGrid
