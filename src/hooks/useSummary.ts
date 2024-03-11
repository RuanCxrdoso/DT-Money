import { TransactionContext } from '../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'
import { useMemo } from 'react'

export function useSummary() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })

  const summary = useMemo(() => {
    return transactions.reduce(
      (accum, transaction) => {
        if (transaction.type === 'income') {
          accum.income += transaction.price
          accum.total += transaction.price
        } else {
          accum.outcome += transaction.price
          accum.total -= transaction.price
        }
        return accum
      },
      { income: 0, outcome: 0, total: 0 },
    )
  }, [transactions])

  return summary
}
