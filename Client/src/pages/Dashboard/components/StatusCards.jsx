
import React from 'react'
import { Wallet, TrendingUp, TrendingDown } from 'lucide-react'

const StatusCards = () => {

  const cards = [
    {
      title: 'Total Balance',
      amount: 'Rs. 245,800',
      description: 'Your available balance',
      icon: Wallet,
      iconStyle: 'bg-primary-soft text-primary',
    },
    {
      title: 'Total Income',
      amount: 'Rs. 320,000',
      description: 'Your total earnings',
      icon: TrendingUp,
      iconStyle: 'bg-success/10 text-success',
    },
    {
      title: 'Total Expense',
      amount: 'Rs. 74,200',
      description: 'Your total spending',
      icon: TrendingDown,
      iconStyle: 'bg-error/10 text-error',
    },
  ]

  return (
    <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">

      {cards.map((card) => {
        const Icon = card.icon

        return (
          <div
            key={card.title}
            className="min-w-0 rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:border-primary/40 hover:shadow-md sm:p-6"
          >

            {/* Card Header */}
            <div className="flex items-center justify-between gap-3">

              <p className="font-body text-sm font-medium text-text-muted">
                {card.title}
              </p>

              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${card.iconStyle}`}>
                <Icon size={20} strokeWidth={2} />
              </div>

            </div>

            {/* Amount */}
            <h2 className="mt-5 break-words font-numbers text-2xl font-bold tracking-tight text-text sm:text-3xl">
              {card.amount}
            </h2>

            {/* Description */}
            <p className="mt-2 font-body text-xs text-text-muted sm:text-sm">
              {card.description}
            </p>

          </div>
        )
      })}

    </div>
  )
}

export default StatusCards
