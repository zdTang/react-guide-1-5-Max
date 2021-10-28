import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
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
  /* approach 3: Define a default value and cover it based on condition*/
  let expensesContent=<p>No Expense found.</p>                    // define default value
  if(filteredExpenses.length>0){
    expensesContent=filteredExpenses.map((expense)=> <ExpenseItem // over-written the default
    title={expense.title}
    amount={expense.amount}
    date={expense.date}
    key={expense.id}  
  />)
  }


  return (
    <Card className="expenses">
      {/*ExpensesFilter has two props, one is pass down, another one is pass up  */}
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {/* must in the {} as it is a JS expression other than JSX */}

      {/* approach 1   use trinary expression*/}
      {/* {
        filteredExpenses.length===0
        ?<p>No Expense found.</p>
        :(filteredExpenses.map((expense)=> <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}  //  add a key is very important or the react will render the whole array
      />))
      } */}

      {/* approach 2   use JS trick: if the left side of && is true, will return the right side of && */}
      {/* 
      {filteredExpenses.length===0 && <p>No Expense found.</p>}
      {filteredExpenses.length>0 && (filteredExpenses.map((expense)=> <ExpenseItem
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      key={expense.id}  //  add a key is very important or the react will render the whole array
    />))} */}

    {expensesContent}   {/* approach 3 */}
    </Card>
  );
}

export default Expenses;