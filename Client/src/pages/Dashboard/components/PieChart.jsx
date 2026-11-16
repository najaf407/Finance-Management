import React from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

const sampleData = [
    { name: 'Rent', value: 25000 },
    { name: 'Food', value: 18000 },
    { name: 'Bills', value: 9000 },
    { name: 'Shopping', value: 7000 },
    { name: 'Transport', value: 6000 },
]

const colors = [
    'var(--chart-1)',
    'var(--chart-2)',
    'var(--chart-3)',
    'var(--chart-4)',
    'var(--chart-5)',
]

const formatAmount = (value) => `Rs ${value.toLocaleString('en-US')}`

const RADIAN = Math.PI / 180

// Name + percentage placed just outside each slice
const renderLabel = ({ cx, cy, midAngle, outerRadius, name, percent }) => {
    if (percent < 0.05) return null // skip tiny slices to avoid overlap

    const radius = outerRadius + 14
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
        <text
            x={x}
            y={y}
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
            fill="var(--text)"
            fontSize={11}
        >
            {name} {Math.round(percent * 100)}%
        </text>
    )
}

const PieGraph = ({ data = sampleData }) => {
    const total = data.reduce((sum, item) => sum + item.value, 0)

    return (
        <div className="flex min-w-0 w-full flex-col rounded-2xl border border-border bg-surface p-4 sm:p-5 lg:flex-1 mt-6 md:my-0">
            <h2 className="text-lg font-semibold text-text">Expenses by category</h2>
            <p className="text-sm text-text-muted">Last 30 days</p>

            {/* Donut with total in the center */}
            <div className="relative mt-4 h-56 sm:h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart style={{ overflow: 'visible' }}>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            innerRadius="40%"
                            outerRadius="60%"
                            paddingAngle={2}
                            stroke="var(--surface)"
                            label={renderLabel}
                            labelLine={{ stroke: 'var(--border)' }}
                        >
                            {data.map((item, i) => (
                                <Cell key={item.name} fill={colors[i % colors.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{
                                background: 'var(--surface)',
                                border: '1px solid var(--border)',
                                borderRadius: 12,
                                color: 'var(--text)',
                            }}
                            itemStyle={{ color: 'var(--text)' }}
                            formatter={(v) => formatAmount(v)}
                        />
                    </PieChart>
                </ResponsiveContainer>

                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xs text-text-muted">Total</span>
                    <span className="font-numbers text-base font-semibold text-text">{formatAmount(total)}</span>
                </div>
            </div>
        </div>
    )
}

export default PieGraph