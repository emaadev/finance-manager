import { useState } from 'react';
import { useGlobalState } from '../context/GlobalState';

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
        <button className="px-[20px] py-[10px] bg-indigo-600 rounded-[7px]">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default ManagerForm;
