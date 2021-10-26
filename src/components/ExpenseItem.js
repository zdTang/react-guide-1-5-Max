import './ExpenseItem.css'   // this used to make React to be aware of the css file
import ExpenseDate from './ExpenseDate';
import Card from './Card'
const ExpenseItem=(props)=> {
  
  // create an event handler
  const clickHandler =()=>{
    alert("clicked")
  }

  return (
    <Card className="expense-item">
       <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* add event to a button */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
