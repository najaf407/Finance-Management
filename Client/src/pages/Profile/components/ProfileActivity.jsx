
import React from 'react'
import {
    CalendarDays,
    Clock3,
    RefreshCw,
    ArrowLeftRight,
    TrendingUp,
    TrendingDown,
    Tags,
    Receipt,
    Activity,
} from 'lucide-react'

const ProfileActivity = () => {

    const activityDetails = [
        { label: 'Account Created', value: 'Nov 05, 2026', icon: CalendarDays },
        { label: 'Last Login', value: 'Today, 09:30 AM', icon: Clock3 },
        { label: 'Last Transaction Added', value: 'Nov 16, 2026', icon: Receipt },
        { label: 'Last Profile Update', value: 'Nov 12, 2026', icon: RefreshCw },
    ]

    return (
        <section className="rounded-2xl border border-border bg-surface p-5 sm:p-6">

            {/* Header */}
            <div className="mb-6 flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <Activity size={21} />
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-text">
                        Account Activity
                    </h2>
                    <p className="mt-1 text-sm text-text-muted">
                        Your account usage and activity overview.
                    </p>
                </div>
            </div>

            {/* Main Statistics */}
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">

                <div className="rounded-xl bg-primary-soft/60 p-4">
                    <p className="text-xs font-medium text-text-muted">
                        Total Transactions
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-text">
                        128
                    </h3>
                    <p className="mt-1 text-xs text-text-muted">
                        All time entries
                    </p>
                </div>

                <div className="rounded-xl border border-border p-4">
                    <div className="flex items-center gap-1.5 text-success">
                        <TrendingUp size={15} />
                        <span className="text-xs font-medium">Income</span>
                    </div>
                    <h3 className="mt-2 text-2xl font-semibold text-text">
                        42
                    </h3>
                    <p className="mt-1 text-xs text-text-muted">
                        Income entries
                    </p>
                </div>

                <div className="rounded-xl border border-border p-4">
                    <div className="flex items-center gap-1.5 text-error">
                        <TrendingDown size={15} />
                        <span className="text-xs font-medium">Expenses</span>
                    </div>
                    <h3 className="mt-2 text-2xl font-semibold text-text">
                        86
                    </h3>
                    <p className="mt-1 text-xs text-text-muted">
                        Expense entries
                    </p>
                </div>

                <div className="rounded-xl border border-border p-4">
                    <div className="flex items-center gap-1.5 text-primary">
                        <Tags size={15} />
                        <span className="text-xs font-medium">Categories</span>
                    </div>
                    <h3 className="mt-2 text-2xl font-semibold text-text">
                        12
                    </h3>
                    <p className="mt-1 text-xs text-text-muted">
                        Created categories
                    </p>
                </div>
            </div>


            {/* Activity Details */}
            <div className="mt-6">
                <h3 className="mb-3 text-sm font-semibold text-text">
                    Activity Details
                </h3>

                <div className="divide-y divide-border rounded-xl border border-border px-4">
                    {activityDetails.map(({ label, value, icon: Icon }) => (
                        <div
                            key={label}
                            className="flex items-center justify-between gap-3 py-4"
                        >
                            <div className="flex items-center gap-3">
                                <Icon size={18} className="text-text-muted" />
                                <span className="text-sm text-text-muted">
                                    {label}
                                </span>
                            </div>

                            <span className="text-right text-sm font-medium text-text">
                                {value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default ProfileActivity
