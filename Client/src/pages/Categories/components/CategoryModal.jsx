
import React from 'react'
import {
    X, Utensils, Car, ShoppingBag, Wallet,
    Heart, Home, Briefcase, Coffee, Tag, Check
} from 'lucide-react'

const icons = [
    Utensils, Car, ShoppingBag, Wallet,
    Heart, Home, Briefcase, Coffee, Tag,
]

const colors = [
    '#1f4d3a', '#b8893b', '#2563eb',
    '#9333ea', '#e11d48', '#0891b2',
    '#ea580c', '#64748b',
]

const CategoryModal = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 backdrop-blur-sm sm:p-5">

            <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl border border-border bg-surface shadow-xl">

                {/* Header */}
                <div className="flex items-start justify-between border-b border-border p-5">
                    <div>
                        <h2 className="text-lg font-semibold text-text">
                            Create Category
                        </h2>
                        <p className="mt-1 text-sm text-text-muted">
                            Add a new category to organize your finances.
                        </p>
                    </div>

                    <button className="rounded-lg p-2 text-text-muted hover:bg-bg">
                        <X size={19} />
                    </button>
                </div>

                <div className="space-y-5 p-5">

                    {/* Category Name */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-text">
                            Category Name
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. Food & Dining"
                            className="h-11 w-full rounded-xl border border-border bg-bg px-3 text-sm text-text placeholder:text-text-muted focus:border-primary focus:outline-none"
                        />
                    </div>

                    {/* Category Type */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-text">
                            Category Type
                        </label>

                        <div className="grid grid-cols-2 gap-3">
                            <button className="rounded-xl border border-border bg-primary-soft py-2.5 text-sm font-medium text-primary">
                                Income
                            </button>
                            <button className="rounded-xl border border-border bg-bg py-2.5 text-sm font-medium text-text-muted">
                                Expense
                            </button>
                        </div>
                    </div>

                    {/* Choose Icon */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-text">
                            Choose Icon
                        </label>

                        <div className="grid grid-cols-5 gap-2">
                            {icons.map((Icon, index) => (
                                <button
                                    key={index}
                                    className={`flex h-11 items-center justify-center rounded-xl border ${
                                        index === 0
                                            ? 'border-primary bg-primary-soft text-primary'
                                            : 'border-border bg-bg text-text-muted hover:border-primary/50'
                                    }`}
                                >
                                    <Icon size={19} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Choose Color */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-text">
                            Choose Color
                        </label>

                        <div className="flex flex-wrap gap-3">
                            {colors.map((color, index) => (
                                <button
                                    key={color}
                                    style={{ backgroundColor: color }}
                                    className="flex size-8 items-center justify-center rounded-full"
                                >
                                    {index === 0 && (
                                        <Check size={16} className="text-white" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex gap-3 border-t border-border pt-4">
                        <button className="h-11 flex-1 rounded-xl border border-border text-sm font-medium text-text hover:bg-bg">
                            Cancel
                        </button>

                        <button className="h-11 flex-1 rounded-xl bg-primary text-sm font-medium text-on-primary hover:bg-primary-hover">
                            Create Category
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CategoryModal
