
import React from 'react'

const SettingsHeader = () => {
    return (
        <header>
            <div>
                <p className="mb-2 text-xs font-medium tracking-wide text-text-muted sm:text-sm">
                    PREFERENCES
                </p>

                <h1 className="text-2xl font-semibold text-text sm:text-3xl">
                    Settings
                </h1>

                <p className="mt-1 text-sm text-text-muted">
                    Manage your application preferences and account settings.
                </p>
            </div>
        </header>
    )
}

export default SettingsHeader
