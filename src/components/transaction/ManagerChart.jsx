import { VictoryPie, VictoryLabel } from 'victory';
import { useGlobalState } from '../../context/GlobalState';

const ManagerChart = () => {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);
  const incomes = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expenses =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  const totalIncomes = () => {
    if (incomes === 0 && expenses === 0) {
      return 50;
    } else {
      return incomes;
    }
  };

  const totalExpenses = () => {
    if (expenses === 0 && incomes === 0) {
      return 50;
    } else {
      return expenses;
    }
  };

  return (
    <div className="flex justify-center items-center p-5">
      <VictoryPie
        colorScale={['rgb(239, 68, 68)', 'rgb(34, 197, 94)']}
        data={[
          { x: 'Expenses', y: totalExpenses() },
          { x: 'Incomes', y: totalIncomes() },
        ]}
        animate={{
          duration: 2000,
        }}
        labelComponent={
          <VictoryLabel
            angle={30}
            style={{
              fill: '#fff',
              fontFamily: 'Poppins',
              fontWeight: 'semibold',
            }}
          />
        }
      />
    </div>
  );
};

export default ManagerChart;
