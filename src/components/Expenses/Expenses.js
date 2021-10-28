import React, { useState } from 'react';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';





const Expenses=(props)=> {

  const [filteredYear, setFilteredYear] = useState('2020');

  // only triggered once filter changed
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  // each time, the base data "props" will keep to be the same value
  const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear
  })
 



  return (
    <Card className="expenses">
      {/*ExpensesFilter has two props, one is pass down, another one is pass up  */}
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;