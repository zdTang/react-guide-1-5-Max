import './ExpenseItem.css'   // this used to make React to be aware of the css file
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import {useState} from 'react'
const ExpenseItem=(props)=> {
  // react hooks
  // first arg: current state
  // second arg: function to update current state
  // when props updated, if using the following lind
  // the update will not be displayed on time
  const [title,setTitle]=useState(props.title)

console.log(props)
console.log(title)


  return (
    <Card className="expense-item">
       <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        {/* <h2>{props.title}</h2> */}
        {/* if using useState here, once props update, new data cannot be displayed */}
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
