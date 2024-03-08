import { MagnifyingGlass } from "phosphor-react"
import { SearchFormContainer } from "./style"
import { useForm } from "react-hook-form"
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"

const SearchFormSchema = zod.object({
  query: zod.string()
})

type SearchFormInputsType = zod.infer<typeof SearchFormSchema>

export function SearchForm () {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormInputsType>({
    resolver: zodResolver(SearchFormSchema)
  })

  async function handleSearchTransactions(data: SearchFormInputsType) {
    // 2 seconds delay
    await new Promise((resolve) => setTimeout(resolve, 2000))
    
    console.log(data)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input 
        type="text"
        placeholder="Busque por transações..."
        autoComplete="off"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <span>Buscar</span>
        <MagnifyingGlass size={20} />
      </button>
    </SearchFormContainer>
  )
}
