
import React from 'react'
import { CalendarDays, UserRound, Globe, MapPin, Wallet, Pencil } from 'lucide-react'
import { TertiaryButton } from '../../../Components/ui/Button'

const details = [
    {
        label: 'Date of Birth',
        value: 'Not provided',
        icon: CalendarDays,
    },
    {
        label: 'Gender',
        value: 'Male',
        icon: UserRound,
    },
    {
        label: 'Country',
        value: 'Pakistan',
        icon: Globe,
    },
    {
        label: 'City',
        value: 'Rawalpindi',
        icon: MapPin,
    },
    {
        label: 'Currency',
        value: 'PKR - Pakistani Rupee',
        icon: Wallet,
    },
]

const PersonalDetails = () => {
    return (
        <section className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
            {/* Header */}
            <div className="mb-5 flex items-start justify-between gap-3">
                <div>
                    <h2 className="text-lg font-semibold text-text">
                        Personal Details
                    </h2>
                    <p className="mt-1 text-sm text-text-muted">
                        Your personal and regional information.
                    </p>
                </div>

                <TertiaryButton className="gap-2 px-3">
                    <Pencil size={15} />
                    <span>Edit</span>
                </TertiaryButton>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {details.map(({ label, value, icon: Icon }) => (
                    <div
                        key={label}
                        className="flex items-center gap-3 rounded-xl border border-border bg-bg p-3.5"
                    >
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                            <Icon size={19} />
                        </div>

                        <div className="min-w-0">
                            <p className="text-xs font-medium text-text-muted">
                                {label}
                            </p>
                            <p className="mt-1 truncate text-sm font-semibold text-text">
                                {value}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PersonalDetails
