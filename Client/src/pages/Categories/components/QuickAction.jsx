
import React from 'react'
import { PlusCircle, ArrowUpRight } from 'lucide-react'

const QuickAction = () => {
    return (
        <div className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-surface p-4 transition-colors hover:bg-primary-soft/30">

            <div className="flex min-w-0 items-center gap-3">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <PlusCircle size={22} />
                </div>

                <div className="min-w-0">
                    <h3 className="font-sub-heading text-base font-semibold text-text">
                        Create New Category
                    </h3>

                    <p className="mt-1 text-sm text-text-muted">
                        Organize your finances your way.
                    </p>
                </div>
            </div>

            <ArrowUpRight
                size={19}
                className="shrink-0 text-text-muted"
            />
        </div>
    )
}

export default QuickAction
