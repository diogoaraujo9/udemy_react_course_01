import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.expenses.length == 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }

  const expensesContent = props.expenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    ></ExpenseItem>
  ));

  return <ul className="expenses-list">{expensesContent}</ul>;
};

export default ExpensesList;
