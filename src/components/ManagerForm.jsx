import { useState } from 'react';
import { useGlobalState } from '../context/GlobalState';

import './ManagerForm.css';

const ManagerForm = () => {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    });
    setDescription('');
    setAmount(0);
  };

  const handleChangeType = (e) => {
    if (
      e.target.value === 'income' &&
      amount.toString().includes('-') === true
    ) {
      setAmount(-amount);
    }
    if (
      e.target.value === 'expense' &&
      amount.toString().includes('-') === false
    ) {
      setAmount(-amount);
    }
  };

  return (
    <div className="mb-[20px] sm:mb-0">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center flex-col"
      >
        <input
          type="text"
          value={description}
          placeholder="Insert a description"
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-[20px] py-[7px] bg-zinc-400 text-white placeholder:text-gray-300 font-light rounded-[7px] mb-[10px] text-left"
        />

        <input
          type="number"
          value={amount}
          step="0.1"
          placeholder="1000.0"
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-[20px] py-[7px] bg-zinc-400 text-white placeholder:text-gray-300 font-light rounded-[7px] mb-[10px]"
        />

        <div className="radio-input">
          <input
            value="income"
            onClick={handleChangeType}
            name="value-radio"
            id="value-1"
            type="radio"
          />
          <label htmlFor="value-1">Income</label>
          <input
            value="expense"
            onClick={handleChangeType}
            name="value-radio"
            id="value-2"
            type="radio"
          />
          <label htmlFor="value-2">Expense</label>
        </div>

        <button className="px-[20px] py-[10px] bg-indigo-600 rounded-[7px]">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default ManagerForm;
