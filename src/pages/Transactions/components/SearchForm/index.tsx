import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './style'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionContext } from '../../../../contexts/TransactionsContext'

const SearchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputsType = zod.infer<typeof SearchFormSchema>

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputsType>({
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
      />
      <button type="submit" disabled={isSubmitting}>
        <span>Buscar</span>
        <MagnifyingGlass size={20} />
      </button>
    </SearchFormContainer>
  )
}
