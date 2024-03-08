import { ReactNode, createContext, useEffect, useState } from "react"

interface transactionsType {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface TransactionContextType {
  transactions: transactionsType[]
  fetchTransactions: (query?: string) => Promise<void>
}

interface ChildrenProp {
  children: ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: ChildrenProp) {
  const [transactions, setTransactions] = useState<transactionsType[]>([])

  async function fetchTransactions(query?: string) {
    const url = new URL('http://localhost:3000/transactions')

    if (query) {
      url.searchParams.append('q', query)
    }

    const response = await fetch(url)
    const data = await response.json()
    
    setTransactions(data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionContext.Provider>
  )
}
