
import React from 'react'
import { SettingButton } from '../../../Components/ui/Button'

const Welcome = () => {
  return (
    <div className="flex w-full justify-between items-center gap-3">

      {/* Welcome Content */}
      <div className="min-w-0 flex-1 space-y-3">

        <p className="font-body text-xs font-medium tracking-wide text-text-muted sm:text-sm">
         November 17, 2026
        </p>

        <div className="flex min-w-0 items-center gap-2 sm:gap-3">

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBvq26wOg0Zi4H-gLYQKJsHN1IhEoteb3j2cn9u__ifA&s=10"
            alt="Ahmed Raza"
            className="h-18 w-18 border-2 border-primary rounded-full"
          />

          <div className="min-w-0">
            <h1 className="break-words font-heading text-lg font-bold leading-tight text-text sm:text-2xl lg:text-3xl xl:text-4xl">
              Welcome, <span className="text-primary">Ahmed Raza!</span>
            </h1>

            <p className="mt-1 text-xs text-text-muted sm:text-sm">
              Here's what's happening with your finances.
            </p>
          </div>

        </div>
      </div>

      {/* Setting Button */}
      <div className="shrink-0">
        <SettingButton />
      </div>

    </div>
  )
}

export default Welcome
