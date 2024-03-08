import { useContext } from "react"
import { TransactionContext } from "../contexts/TransactionsContext"

export function useSummary() {
  const { transactions } = useContext(TransactionContext)

  const summary = transactions.reduce((accum, transaction) => {
    if (transaction.type === 'income') {
      accum.income += transaction.price
      accum.total += transaction.price
    } else {
      accum.outcome += transaction.price
      accum.total -= transaction.price
    }
    return accum
  }, { income: 0, outcome: 0, total: 0 })

  return summary
}