
import React from 'react'
import { Pencil, Trash2, ArrowDownLeft, ArrowUpRight } from 'lucide-react'

const transactions = [
    { id: 1, title: 'Grocery Shopping', category: 'Food', type: 'Expense', date: '17 Nov 2026', amount: 4500, note: 'Monthly groceries' },
    { id: 2, title: 'Monthly Salary', category: 'Salary', type: 'Income', date: '15 Nov 2026', amount: 85000, note: 'November salary' },
    { id: 3, title: 'Electricity Bill', category: 'Bills', type: 'Expense', date: '12 Nov 2026', amount: 3200, note: 'Electricity payment' },
    { id: 4, title: 'Freelance Project', category: 'Freelance', type: 'Income', date: '10 Nov 2026', amount: 15000, note: 'Website development' },
    { id: 5, title: 'Transport', category: 'Transport', type: 'Expense', date: '08 Nov 2026', amount: 1800, note: 'Fuel expenses' },
]

const amountFormat = (amount) =>
    `Rs. ${amount.toLocaleString('en-PK')}`

const TransactionsTable = () => {
    return (
        <section className="overflow-hidden rounded-2xl border border-border bg-surface">

            {/* Heading */}
            <div className="flex items-center justify-between gap-3 border-b border-border p-4 sm:p-5">
                <div>
                    <h2 className="text-base font-semibold text-text sm:text-lg">
                        Transactions
                    </h2>
                    <p className="mt-1 text-xs text-text-muted">
                        Your recent financial activity
                    </p>
                </div>

                <span className="rounded-lg bg-primary-soft px-3 py-1.5 text-xs font-medium text-primary">
                   Last {transactions.length}
                </span>
            </div>

            {/* Desktop Table */}
            <div className="hidden overflow-x-auto md:block">
                <table className="w-full text-left">
                    <thead className="bg-bg text-xs font-medium text-text-muted">
                        <tr>
                            {['Title', 'Category', 'Type', 'Date', 'Amount', 'Notes', 'Actions'].map((heading) => (
                                <th key={heading} className="whitespace-nowrap px-4 py-3 font-medium">
                                    {heading}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-border">
                        {transactions.map((item) => (
                            <tr key={item.id} className="transition-colors hover:bg-bg/70">

                                <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-text">
                                    {item.title}
                                </td>

                                <td className="px-4 py-4">
                                    <span className="rounded-lg bg-primary-soft px-2.5 py-1 text-xs font-medium text-primary">
                                        {item.category}
                                    </span>
                                </td>

                                <td className="px-4 py-4">
                                    <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${item.type === 'Income' ? 'text-success' : 'text-error'}`}>
                                        {item.type === 'Income'
                                            ? <ArrowDownLeft size={14} />
                                            : <ArrowUpRight size={14} />
                                        }
                                        {item.type}
                                    </span>
                                </td>

                                <td className="whitespace-nowrap px-4 py-4 text-sm text-text-muted">
                                    {item.date}
                                </td>

                                <td className={`whitespace-nowrap px-4 py-4 text-sm font-semibold ${item.type === 'Income' ? 'text-success' : 'text-error'}`}>
                                    {item.type === 'Income' ? '+' : '-'}{amountFormat(item.amount)}
                                </td>

                                <td className="max-w-36 truncate px-4 py-4 text-sm text-text-muted">
                                    {item.note || '—'}
                                </td>

                                <td className="px-4 py-4">
                                    <div className="flex items-center gap-2">
                                        <button className="rounded-lg p-2 text-text-muted transition-colors hover:bg-primary-soft hover:text-primary" aria-label="Edit transaction">
                                            <Pencil size={16} />
                                        </button>
                                        <button className="rounded-lg p-2 text-text-muted transition-colors hover:bg-error/10 hover:text-error" aria-label="Delete transaction">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Cards */}
            <div className="divide-y divide-border md:hidden">
                {transactions.map((item) => (
                    <div key={item.id} className="flex flex-col gap-3 p-4">

                        <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                                <h3 className="truncate text-sm font-semibold text-text">
                                    {item.title}
                                </h3>
                                <p className="mt-1 text-xs text-text-muted">
                                    {item.category} · {item.date}
                                </p>
                            </div>

                            <p className={`shrink-0 text-sm font-semibold ${item.type === 'Income' ? 'text-success' : 'text-error'}`}>
                                {item.type === 'Income' ? '+' : '-'}{amountFormat(item.amount)}
                            </p>
                        </div>

                        <div className="flex items-center justify-between gap-3">
                            <div className="min-w-0">
                                <span className={`text-xs font-medium ${item.type === 'Income' ? 'text-success' : 'text-error'}`}>
                                    {item.type}
                                </span>
                                <p className="mt-1 truncate text-xs text-text-muted">
                                    {item.note || 'No notes'}
                                </p>
                            </div>

                            <div className="flex shrink-0 gap-2">
                                <button className="rounded-lg border border-border p-2 text-text-muted hover:bg-primary-soft hover:text-primary" aria-label="Edit transaction">
                                    <Pencil size={15} />
                                </button>
                                <button className="rounded-lg border border-border p-2 text-text-muted hover:bg-error/10 hover:text-error" aria-label="Delete transaction">
                                    <Trash2 size={15} />
                                </button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-border bg-bg/50 px-4 py-3">
                <p className="text-xs text-text-muted">
                    Showing {transactions.length} transactions
                </p>
                <button className="text-xs font-medium text-primary hover:underline">
                    View all
                </button>
            </div>

        </section>
    )
}

export default TransactionsTable
