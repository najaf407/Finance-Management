
import React, { useState } from 'react'
import { Search, ChevronDown } from 'lucide-react'

const options = {
    type: ['All transactions', 'Income', 'Expense'],
    category: ['All categories', 'Food', 'Rent', 'Transport', 'Bills', 'Shopping', 'Salary', 'Freelance'],
    range: ['All time', 'Today', 'Last 7 days', 'Last 30 days', 'This month', 'Last 90 days'],
    sort: ['Newest first', 'Oldest first', 'Amount: high to low', 'Amount: low to high'],
}

const initialFilters = {
    search: '', type: options.type[0], category: options.category[0],
    range: options.range[0], sort: options.sort[0],
}

const inputClass = 'h-10 w-full rounded-xl border border-border bg-bg px-3 text-sm text-text focus:border-primary focus:outline-none'

const Select = ({ label, value, onChange, options }) => (
    <label className="flex min-w-0 flex-col gap-1.5">
        <span className="text-xs font-medium text-text-muted">{label}</span>
        <div className="relative">
            <select value={value} onChange={e => onChange(e.target.value)}
                className={`${inputClass} cursor-pointer appearance-none pr-9`}>
                {options.map(option => <option key={option}>{option}</option>)}
            </select>
            <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-muted" />
        </div>
    </label>
)

const SearchFilters = ({ onChange }) => {
    const [filters, setFilters] = useState(initialFilters)

    const update = (key, value) => {
        const next = { ...filters, [key]: value }
        setFilters(next)
        onChange?.(next)
    }

    const reset = () => {
        setFilters(initialFilters)
        onChange?.(initialFilters)
    }

    const changed = JSON.stringify(filters) !== JSON.stringify(initialFilters)

    return (
        <section className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-4 sm:p-5">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-text">Find transactions</h2>
                {changed && <button onClick={reset} className="text-sm font-medium text-primary hover:underline">Reset</button>}
            </div>

            <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                <input value={filters.search} onChange={e => update('search', e.target.value)}
                    placeholder="Search transactions..." className={`${inputClass} pl-10`} />
            </div>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
                {Object.entries(options).map(([key, items]) => (
                    <Select key={key} label={key === 'range' ? 'Date range' : key === 'sort' ? 'Sort by' : key.charAt(0).toUpperCase() + key.slice(1)}
                        value={filters[key]} onChange={value => update(key, value)} options={items} />
                ))}
            </div>
        </section>
    )
}

export default SearchFilters
