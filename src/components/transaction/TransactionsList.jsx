import { useGlobalState } from "../../context/GlobalState"
import TransactionItem from "./TransactionItem"

const TransactionsList = () => {
    const { transactions } = useGlobalState()

    return (
        <div className="w-full">
            <h3
                className="mb-[10px] text-[18px] font-bold"
            >Transactions History</h3>
            <ul>
                {transactions.map(transaction => (
                    <TransactionItem 
                        key={transaction.id}
                        transaction={transaction} 
                    />
                ))}
            </ul>
        </div>
    )
}

export default TransactionsList