
import React from 'react'
import { Plus } from 'lucide-react'
import { PrimaryButton, SettingButton } from '../../../Components/ui/Button'

const CategoriesHeader = ({ onAddCategory, onOpenSettings }) => {
    return (
        <header className="flex items-start justify-between gap-3">
            <div className="min-w-0">
                <p className="font-body mb-2 text-xs font-medium tracking-wide text-text-muted sm:text-sm">
                    November 17, 2026
                </p>

                <h1 className="text-2xl font-semibold text-text sm:text-3xl">
                    Categories
                </h1>

                <p className="mt-1 text-sm text-text-muted">
                    Organize and manage your income and expense categories.
                </p>
            </div>

            {/* Actions */}
            <div className="flex shrink-0 items-center gap-2">
                <PrimaryButton
                    onClick={onAddCategory}
                    width="max-sm:w-10 max-sm:px-0"
                >
                    <Plus size={18} />
                    <span className="sr-only sm:not-sr-only sm:ml-2">
                        Add category
                    </span>
                </PrimaryButton>

                <div className="lg:hidden">
                    <SettingButton onClick={onOpenSettings} />
                </div>
            </div>
        </header>
    )
}

export default CategoriesHeader
