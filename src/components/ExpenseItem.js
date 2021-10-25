import './ExpenseItem.css'   // this used to make React to be aware of the css file
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props) {
    //short-cut:  shift + alt + f => manage format

  return (
    <div className="expense-item">
       <ExpenseDate date={props.date}/>
      <div className="expense__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
