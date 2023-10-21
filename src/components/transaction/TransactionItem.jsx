import { useGlobalState } from "../../context/GlobalState"
import PropTypes from "prop-types"


const TransactionItem = ({ transaction }) => {
    const { deleteTransaction } = useGlobalState()

    return (
        <li className="bg-zinc-800 px-[10px] py-[5px] rounded-[7px] mb-2 w-[full] flex justify-between items-center text-zinc-300 font-light text-[14px]">
            <p>{transaction.description}</p>
            <div>
                <span 
                    className="mr-[10px]"
                >${transaction.amount}</span>
                <button 
                    className="bg-red-500 rounded-lg px-[10px] py-[3px] text-white"
                    onClick={() => deleteTransaction(transaction.id)}
                >
                    X
                </button>
            </div>
        </li>
    )
}

TransactionItem.propTypes = {
    transaction: PropTypes.object.isRequired
}

export default TransactionItem