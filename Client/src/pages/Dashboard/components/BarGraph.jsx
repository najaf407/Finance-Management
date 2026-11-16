import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts'

const sampleData = [
    { month: 'Jun', income: 120000, expense: 80000 },
    { month: 'Jul', income: 135000, expense: 72000 },
    { month: 'Aug', income: 110000, expense: 95000 },
    { month: 'Sep', income: 150000, expense: 68000 },
    { month: 'Oct', income: 142000, expense: 77000 },
    { month: 'Nov', income: 180000, expense: 55000 },
]

const tick = { fill: 'var(--text-muted)', fontSize: 12 }

const BarGraph = ({ data = sampleData }) => {
    return (
        <div className="min-w-0 max-w-150 w-full rounded-2xl border border-border bg-surface p-4 sm:p-5 lg:w-150 lg:flex-none">
            <h2 className="text-lg font-semibold text-text">Income vs Expense</h2>
            <p className="text-sm text-text-muted">Last 6 months</p>

            <div className="mt-4 h-56 sm:h-64 lg:h-72">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} barGap={4}>
                        <CartesianGrid vertical={false} stroke="var(--border)" />
                        <XAxis dataKey="month" tick={tick} axisLine={false} tickLine={false} />
                        <YAxis
                            tick={tick}
                            axisLine={false}
                            tickLine={false}
                            width={40}
                            tickFormatter={(v) => `${v / 1000}k`}
                        />
                        <Tooltip
                            cursor={{ fill: 'var(--primary-soft)' }}
                            contentStyle={{
                                background: 'var(--surface)',
                                border: '1px solid var(--border)',
                                borderRadius: 12,
                                color: 'var(--text)',
                            }}
                            formatter={(v) => `Rs ${v.toLocaleString('en-US')}`}
                        />
                        <Legend iconType="circle" wrapperStyle={{ color: 'var(--text-muted)', fontSize: 13 }} />
                        <Bar dataKey="income" name="Income" fill="var(--chart-1)" radius={[6, 6, 0, 0]} />
                        <Bar dataKey="expense" name="Expense" fill="var(--chart-5)" radius={[6, 6, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BarGraph