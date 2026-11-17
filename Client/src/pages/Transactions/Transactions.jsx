import React from 'react'
import TransactionsHeader from './components/TransactionsHeader'
import TransactionsSummary from './components/TransactionsSummary'
import SearchFilters from './components/SearchFilters'
import TransactionsTable from './components/TransactionsTable'
import BudgetOverview from './components/BudgetOverview'

const Transactions = () => {
  return (
    <div className="w-full flex flex-col gap-6 min-w-0 mb-20 p-3 sm:p-4 md:p-6 lg:p-8 lg:mb-0">
      <TransactionsHeader/>
      <TransactionsSummary/>
      <SearchFilters/>
      <TransactionsTable/>
      <BudgetOverview/>
    </div>
  )
}

export default Transactions