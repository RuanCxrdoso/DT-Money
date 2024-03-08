import { ReactNode, createContext, useEffect, useState } from "react"
import { api } from "../lib/axios"

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
    const response = await api.get('/transactions', {
      params: {
        q: query,
      }
    })
    
    setTransactions(response.data)
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
