import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const expenses = props.expenses;
  const [filteredYear, setFielteredYear] = useState("2020");

  const filterChangeHandler = (filter) => {
    setFielteredYear(filter);
  };

  const filteredExpenses = expenses
    .filter((expense) => filteredYear == expense.date.getFullYear())

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesList expenses={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
