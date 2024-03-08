import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./style";
import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { numberFormatter } from "../../utils/formatter";

export function Summary() {
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

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{numberFormatter.format(summary.income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>{numberFormatter.format(summary.outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>{numberFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
