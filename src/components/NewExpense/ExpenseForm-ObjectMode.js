import "./ExpenseForm.css";
import React,{useState} from 'react'
const ExpenseForm = (props) => {
  console.log("counter: once again")
  //enteredTitle is current value
  //once setEnterTitle is run, the whole component will re-render
  //Everything read from the webpage is string
  const [userInput,setUserInput]=useState({
    enteredTitle:'',
    enteredAmount:'',
    enteredDate:''
  })
  // const [enteredTitle,setEnteredTitle] = useState({})
  // const [enteredAmount,setEnteredAmount] = useState('')
  // const [enteredDate,setEnteredDate] = useState('')
  
  // const titleChangeHandler = (e) => {
  //   setUserInput({
  //     ...userInput,                //  put the old value here
  //     enteredTitle:e.target.value  //  cover the specified value
  //   })
  // };


/*Use function mode can guarantee the value is always latest */

  const titleChangeHandler = e => {
    setUserInput(prevState=>{return{
      ...prevState,
      enteredTitle:e.target.value
      }})
  }
  

  // const amountChangeHandler=(e)=>{
  //   setUserInput({
  //     ...userInput,
  //     enteredAmount:e.target.value
  //   })
  // }

  const amountChangeHandler=e=>{
    setUserInput(prevState=>{return {
      ...prevState,
      enteredAmount:e.target.value
    }})
  }

  // const dateChangeHandler=(e)=>{
  //   setUserInput({
  //     ...userInput,
  //     enteredDate:e.target.value
  //   })
  // }

  const dateChangeHandler=(e)=>{
    setUserInput(prevState=>{return {
      ...prevState,
      enteredDate:e.target.value
    }})
  }



  return (
    <form>
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
