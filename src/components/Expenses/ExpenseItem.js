import './ExpenseItem.css'   // this used to make React to be aware of the css file
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import React, {useState} from 'react'
const ExpenseItem=(props)=> {
  // react hooks
  // first arg: current state
  // second arg: function to update current state
  const [title,setTitle]=useState(props.title)


  // create an event handler
  const clickHandler =()=>{

    setTitle("newState")

  }

  return (
    <Card className="expense-item">
       <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* add event to a button */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
