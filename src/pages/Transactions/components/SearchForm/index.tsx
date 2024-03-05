import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./style";

export function SearchForm () {
  return (
    <SearchFormContainer>
      <input type="text" name="search" placeholder="Busque por transações..." autoComplete="off" />
      <button type="submit">
        <span>Buscar</span>
        <MagnifyingGlass size={20} />
      </button>
    </SearchFormContainer>
  )
}
