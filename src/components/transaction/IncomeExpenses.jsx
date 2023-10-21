import { useGlobalState } from "../../context/GlobalState"

const IncomeExpenses = () => {
  const { transactions } = useGlobalState()

  const amount = transactions.map(transaction => transaction.amount)

  const incomes = amount
    .filter(item => item > 0)
    .reduce((acc, item) => acc += item, 0)

  const expenses = amount
    .filter(item => item < 0)
    .reduce((acc, item) => acc += item, 0) * -1

  return (
    <section className="mb-[20px]">
      <div className="flex justify-between items-center text-green-500">
        <h4>Incomes</h4>
        <p>${incomes}</p>
      </div>
      <div className="flex justify-between items-center text-red-500">
        <h4>Expenses</h4>
        <p>${expenses}</p>
      </div>
    </section>
  )
}

export default IncomeExpenses