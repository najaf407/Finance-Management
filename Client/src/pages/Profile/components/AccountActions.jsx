
import React from 'react'
import { Pencil, LogOut, Trash2, ChevronRight } from 'lucide-react'
import { TertiaryButton } from '../../../Components/ui/Button'

const actions = [
    {
        title: 'Edit Profile',
        description: 'Update your personal information.',
        icon: Pencil,
        buttonText: 'Edit',
    },
    {
        title: 'Sign Out',
        description: 'Sign out from your account.',
        icon: LogOut,
        buttonText: 'Sign Out',
    },
    {
        title: 'Delete Account',
        description: 'Permanently delete your account and data.',
        icon: Trash2,
        buttonText: 'Delete Account',
        danger: true,
    },
]

const AccountActions = () => {
    return (
        <section className="rounded-2xl border border-border bg-surface p-5 sm:p-6">

            {/* Header */}
            <div className="mb-5">
                <h2 className="text-lg font-semibold text-text">
                    Account Actions
                </h2>
                <p className="mt-1 text-sm text-text-muted">
                    Manage your account and access.
                </p>
            </div>

            {/* Actions */}
            <div className="divide-y divide-border">
                {actions.map(({ title, description, icon: Icon, buttonText, danger }) => (
                    <div
                        key={title}
                        className="flex flex-col gap-3 py-4 first:pt-0 sm:flex-row sm:items-center sm:justify-between"
                    >
                        <div className="flex items-center gap-3">
                            <div className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${
                                danger
                                    ? 'bg-error/10 text-error'
                                    : 'bg-primary-soft text-primary'
                            }`}>
                                <Icon size={18} />
                            </div>

                            <div>
                                <h3 className={`text-sm font-semibold ${
                                    danger ? 'text-error' : 'text-text'
                                }`}>
                                    {title}
                                </h3>
                                <p className="mt-1 text-xs text-text-muted">
                                    {description}
                                </p>
                            </div>
                        </div>

                        {danger ? (
                            <button className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-error/30 bg-error/10 px-4 text-sm font-medium text-error transition-colors hover:bg-error/20">
                                {buttonText}
                                <ChevronRight size={16} />
                            </button>
                        ) : (
                            <TertiaryButton>
                                {buttonText}
                                <ChevronRight size={16} className="ml-2" />
                            </TertiaryButton>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AccountActions
