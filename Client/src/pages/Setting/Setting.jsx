import React from 'react'
import SettingsHeader from './components/SettingsHeader'
import SettingsContent from './components/SettingsContent'

const Setting = () => {
  return (
    <div className="w-full flex flex-col gap-6 min-w-0 mb-20 p-3 sm:p-4 md:p-6 lg:p-8 lg:mb-0">
      <SettingsHeader />
      <SettingsContent />
    </div>
  )
}

export default Setting