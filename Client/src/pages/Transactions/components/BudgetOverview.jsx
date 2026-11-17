
const BudgetOverview = () => {
    const budget = 50000
    const spent = 30000
    const percentage = (spent / budget) * 100
    const remaining = budget - spent

    return (
        <section className="rounded-2xl border border-border bg-surface p-5 space-y-5">

            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-text">
                    Budget Overview
                </h2>
                <span className="text-xs font-medium text-success bg-primary-soft px-3 py-1.5 rounded-lg">
                    On Track
                </span>
            </div>

            <div>
                <p className="text-xs text-text-muted">Monthly Budget</p>
                <h3 className="text-2xl font-bold text-text">
                    Rs. {budget.toLocaleString('en-PK')}
                </h3>
            </div>

            <div className="flex justify-between text-sm">
                <span className="text-text-muted">Spent</span>
                <span className="font-semibold text-text">
                    Rs. {spent.toLocaleString('en-PK')}
                </span>
            </div>

            <div className="h-2.5 rounded-full bg-bg overflow-hidden">
                <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${percentage}%` }}
                />
            </div>

            <div className="flex justify-between text-xs">
                <span className="text-text-muted">{percentage}% used</span>
                <span className="text-success">Remaining: Rs. {remaining.toLocaleString('en-PK')}</span>
            </div>

        </section>
    )
}

export default BudgetOverview
