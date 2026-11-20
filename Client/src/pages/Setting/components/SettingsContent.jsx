
import React from 'react'
import { Sun, Moon, Palette, Wallet, Bell, ShieldCheck, Download, LockKeyhole } from 'lucide-react'

import { PrimaryButton, TertiaryButton,} from '../../../Components/ui/Button'

const SettingsContent = () => {
    return (
        <div className="space-y-6">

            {/* Appearance */}
            <section className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
                <div className="mb-5 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
                        <Palette size={20} />
                    </div>
                    <div>
                        <h2 className="font-semibold text-text">Appearance</h2>
                        <p className="text-sm text-text-muted">
                            Customize how your application looks.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h3 className="text-sm font-medium text-text">Theme</h3>
                        <p className="mt-1 text-xs text-text-muted">
                            Choose your preferred appearance.
                        </p>
                    </div>

                    <div className="flex w-full gap-2 sm:w-auto">
                        <button className="flex h-10 flex-1 items-center justify-center gap-2 rounded-xl border border-primary bg-primary-soft px-4 text-sm font-medium text-primary sm:flex-none">
                            <Sun size={17} />
                            Light
                        </button>

                        <button className="flex h-10 flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 text-sm font-medium text-text-muted hover:bg-primary-soft hover:text-primary sm:flex-none">
                            <Moon size={17} />
                            Dark
                        </button>
                    </div>
                </div>
            </section>

            {/* Financial Preferences */}
            <section className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
                <div className="mb-5 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
                        <Wallet size={20} />
                    </div>
                    <div>
                        <h2 className="font-semibold text-text">Financial Preferences</h2>
                        <p className="text-sm text-text-muted">
                            Set your currency and date preferences.
                        </p>
                    </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-text">
                            Currency
                        </label>
                        <select className="h-11 w-full rounded-xl border border-border bg-bg px-3 text-sm text-text outline-none focus:border-primary">
                            <option>PKR - Pakistani Rupee</option>
                            <option>USD - US Dollar</option>
                            <option>EUR - Euro</option>
                            <option>GBP - British Pound</option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-text">
                            Date Format
                        </label>
                        <select className="h-11 w-full rounded-xl border border-border bg-bg px-3 text-sm text-text outline-none focus:border-primary">
                            <option>DD/MM/YYYY</option>
                            <option>MM/DD/YYYY</option>
                            <option>YYYY-MM-DD</option>
                        </select>
                    </div>
                </div>
            </section>

            {/* Notifications */}
            <section className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
                <div className="mb-5 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
                        <Bell size={20} />
                    </div>
                    <div>
                        <h2 className="font-semibold text-text">Notifications</h2>
                        <p className="text-sm text-text-muted">
                            Choose which reminders you want to receive.
                        </p>
                    </div>
                </div>

                <div className="divide-y divide-border">
                    <label className="flex cursor-pointer items-center justify-between gap-4 py-4 first:pt-0">
                        <div>
                            <h3 className="text-sm font-medium text-text">
                                Transaction Alerts
                            </h3>
                            <p className="mt-1 text-xs text-text-muted">
                                Get notified when a transaction is added.
                            </p>
                        </div>
                        <input
                            type="checkbox"
                            defaultChecked
                            className="size-5 shrink-0 cursor-pointer accent-primary"
                        />
                    </label>

                    <label className="flex cursor-pointer items-center justify-between gap-4 py-4 last:pb-0">
                        <div>
                            <h3 className="text-sm font-medium text-text">
                                Budget Reminders
                            </h3>
                            <p className="mt-1 text-xs text-text-muted">
                                Receive reminders about your budget limits.
                            </p>
                        </div>
                        <input
                            type="checkbox"
                            defaultChecked
                            className="size-5 shrink-0 cursor-pointer accent-primary"
                        />
                    </label>
                </div>
            </section>

            {/* Security */}
            <section className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
                <div className="mb-5 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
                        <ShieldCheck size={20} />
                    </div>
                    <div>
                        <h2 className="font-semibold text-text">Security</h2>
                        <p className="text-sm text-text-muted">
                            Keep your account secure.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                        <LockKeyhole size={19} className="text-text-muted" />
                        <div>
                            <h3 className="text-sm font-medium text-text">
                                Change Password
                            </h3>
                            <p className="mt-1 text-xs text-text-muted">
                                Update your account password.
                            </p>
                        </div>
                    </div>

                    <TertiaryButton>
                        Change Password
                    </TertiaryButton>
                </div>
            </section>

            {/* Save Changes */}
            <div className="flex justify-end border-t border-border pt-5">
                <PrimaryButton>
                    Save Changes
                </PrimaryButton>
            </div>

        </div>
    )
}

export default SettingsContent
