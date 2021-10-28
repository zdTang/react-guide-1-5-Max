import "./ExpenseForm.css";
import React,{useState} from 'react'
const ExpenseForm = (props) => {
  console.log("counter: once again")
  //enteredTitle is current value
  //once setEnterTitle is run, the whole component will re-render
  //Everything read from the webpage is string
  const [enteredTitle,setEnteredTitle] = useState('')
  const [enteredAmount,setEnteredAmount] = useState('')
  const [enteredDate,setEnteredDate] = useState('')
  
  const titleChangeHandler = (e) => {
    console.log(e.target.value)
    setEnteredTitle(e.target.value)
  };
  console.log("enteredTitle:==",enteredTitle)

  const amountChangeHandler=(e)=>{
    setEnteredAmount(e.target.value)
    console.log(e.target.value)
  }

  const dateChangeHandler=(e)=>{
    setEnteredDate(e.target.value)
    console.log(e.target.value)
  }
// Once clicking the Submit button
// the browser's from element will emit a 'submit' event
// and the browser also send another request to the Host of current webpage
// we can use 'event' to prevent this happen
  const submitHandler=(event)=>{
    event.preventDefault();         //  prevent sent new request to the HOST
    const expense={
      title:enteredTitle,
      amount:enteredAmount,
      date:new Date(enteredDate)
    }
    console.log(expense)
  }


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
