import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './style'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionContext } from '../../../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

const SearchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputsType = zod.infer<typeof SearchFormSchema>

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const { register, handleSubmit } = useForm<SearchFormInputsType>({
    resolver: zodResolver(SearchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputsType) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações..."
        {...register('query')}
        disabled={true}
      />
      <button type="submit" disabled={true}>
        <span>Buscar</span>
        <MagnifyingGlass size={20} />
      </button>
    </SearchFormContainer>
  )
}

// Alterar os disabled do forms quando descobrir o pq o q params do json-server não retorna os itens filtrados
// export const SearchForm = memo(SearchFormComponent)
