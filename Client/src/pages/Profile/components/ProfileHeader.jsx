import React from 'react'
import { SettingButton } from '../../../Components/ui/Button'

const ProfileHeader = ({ onOpenSettings }) => {
    return (
        <header className="flex items-start justify-between gap-3">
            <div className="min-w-0">
                <p className="font-body mb-2 text-xs font-medium tracking-wide text-text-muted sm:text-sm">
                    November 17, 2026
                </p>

                <h1 className="text-2xl font-semibold text-text sm:text-3xl">
                    My Profile
                </h1>

                <p className="mt-1 text-sm text-text-muted">
                    Manage your personal information and account preferences.
                </p>
            </div>
            <div className="shrink-0 lg:hidden">
                <SettingButton onClick={onOpenSettings} />
            </div>
        </header>
    )
}

export default ProfileHeader
