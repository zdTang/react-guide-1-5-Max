import './ExpenseItem.css'   // this used to make React to be aware of the css file
function ExpenseItem(props) {
    //short-cut:  shift + alt + f => manage format
const month=props.date.toLocaleString('en-US',{month:'long'})
const day=props.date.toLocaleString('en-US',{day:'2-digit'})
const year=props.date.getFullYear()
  return (
    <div className="expense-item">
        <div>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div>
      <div className="expense__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
