import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';





const Expenses=(props)=> {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    console.log(selectedYear)
    setFilteredYear(selectedYear);
  };


  return (
    <Card className="expenses">
      {/*ExpensesFilter has two props, one is pass down, another one is pass up  */}
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {/* must in the {} as it is a JS expression other than JSX */}
      {props.items.map((expense,index)=> <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={index}
      />)}
    </Card>
  );
}

export default Expenses;