import React from 'react'
import ProfileHeader from './components/ProfileHeader'
import ProfileOverview from './components/ProfileOverview'
import PersonalDetails from './components/PersonalDetails'
import ProfileActivity from './components/ProfileActivity'
import AccountActions from './components/AccountActions'

const Profile = () => {
  return (
    <div className="w-full flex flex-col gap-6 min-w-0 mb-20 p-3 sm:p-4 md:p-6 lg:p-8 lg:mb-0">
      <ProfileHeader/>
      <ProfileOverview/>
      <PersonalDetails />
      <ProfileActivity/>
      <AccountActions />
    </div>
  )
}

export default Profile