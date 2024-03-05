import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./style";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 859,90</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>04/03/2024</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 39,90</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>04/03/2024</td>
            </tr>
            {/* <tr>
              <td width="50%">Aluguel</td>
              <td>R$ 699,90</td>
              <td>Casa</td>
              <td>04/03/2024</td>
            </tr> */}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
