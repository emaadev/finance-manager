import { useGlobalState } from "../context/GlobalState"

const Balance = () => {
  const { transactions } = useGlobalState()

  const amounts = transactions.map(transaction => transaction.amount)

  const total = amounts.reduce((acc, item) => (acc += item), 0)

  return (
    <div className="flex justify-end items-start mb-[10px]">
      <h3 className="bg-gradient-to-r from-cyan-300 to-blue-400 text-transparent bg-clip-text text-[13px]">Your Balance</h3>
      <h1 
        className={`${total >= 0 ? (total === 0 ? "text-white" : "text-green-500") : "text-red-500"} font-bold text-[35px]`}
      >
        ${total}
      </h1>  
    </div>
  )
}

export default Balance