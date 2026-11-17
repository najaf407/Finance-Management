import React from 'react'
import Welcome from './components/Welcome'
import StatusCards from './components/StatusCards'
import BarGraph from './components/BarGraph'
import PieGraph from './components/PieChart'
import Transactions from './components/Transactions'
import QuickActions from './components/QuickActions'

const Dashboard = () => {
  return (
    <div className="w-full flex flex-col gap-6 min-w-0 mb-20 p-3 sm:p-4 md:p-6 lg:p-8 lg:mb-0">
      <Welcome />
      <StatusCards />
      <div className='md:flex gap-3'>
        <BarGraph/>
        <PieGraph />
      </div>
      <Transactions />
      <QuickActions/>
    </div>
  )
}

export default Dashboard