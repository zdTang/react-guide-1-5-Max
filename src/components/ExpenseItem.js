import './ExpenseItem.css'   // this used to make React to be aware of the css file
function ExpenseItem() {
    //short-cut:  shift + alt + f => manage format
  return (
    <div className="expense-item">
      <div>Date</div>
      <div className="expense__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">Amount</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
