import React from 'react'
import CategoriesHeader from './components/CategoriesHeader'
import CategorySummary from './components/CategorySummary'
import CategoryTabs from './components/CategoryTabs'
import CategoryGrid from './components/CategoryGrid'
import CategoryModal from './components/CategoryModal'
import QuickAction from './components/QuickAction'

const Categories = () => {
  return (
    <div className="w-full flex flex-col gap-6 min-w-0 mb-20 p-3 sm:p-4 md:p-6 lg:p-8 lg:mb-0">
      <CategoriesHeader />
      <CategorySummary />
      <QuickAction/>
      <CategoryTabs />
      <CategoryGrid />
      {/* <CategoryModal/> */}
    </div>
  )
}

export default Categories