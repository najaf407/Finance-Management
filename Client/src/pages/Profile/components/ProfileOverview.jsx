
import React from 'react'
import { Mail, ShieldCheck, CalendarDays, UserRound, Pencil } from 'lucide-react'
import { PrimaryButton } from '../../../Components/ui/Button'

const ProfileOverview = () => {
    return (
        <section className="rounded-2xl border border-border bg-surface p-5 sm:p-6">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-4">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBvq26wOg0Zi4H-gLYQKJsHN1IhEoteb3j2cn9u__ifA&s=10"
                        alt="Muhammad Najaf"
                        className="size-16 shrink-0 rounded-2xl object-cover sm:size-20"
                    />

                    <div className="min-w-0">
                        <h2 className="truncate text-lg font-semibold text-text sm:text-xl">
                            Muhammad Najaf
                        </h2>

                        <div className="mt-1 flex items-center gap-2 text-sm text-text-muted">
                            <Mail size={15} />
                            <span className="truncate">najaf@example.com</span>
                        </div>

                        <div className="mt-2 flex items-center gap-1.5">
                            <ShieldCheck size={15} className="text-success" />
                            <span className="text-xs font-medium text-success">
                                Active Account
                            </span>
                        </div>
                    </div>
                </div>

                <div className="sm:shrink-0">
                    <PrimaryButton>
                        <Pencil size={16} />
                        <span className="ml-2">Edit Profile</span>
                    </PrimaryButton>
                </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 border-t border-border pt-5 sm:grid-cols-2">

                <div className="flex items-center gap-3 rounded-xl bg-bg p-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                        <UserRound size={19} />
                    </div>

                    <div>
                        <p className="text-xs text-text-muted">
                            Account Type
                        </p>
                        <p className="mt-1 text-sm font-semibold text-text">
                            Personal
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-bg p-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                        <CalendarDays size={19} />
                    </div>

                    <div>
                        <p className="text-xs text-text-muted">
                            Member Since
                        </p>
                        <p className="mt-1 text-sm font-semibold text-text">
                            November 2026
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ProfileOverview
