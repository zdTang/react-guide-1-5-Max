import './ExpenseItem.css'   // this used to make React to be aware of the css file
function ExpenseItem() {
    //short-cut:  shift + alt + f => manage format
    const expenseDate = new Date(2021,10,10)
    const expenseTitle = "Car Insurance"
    const expenseAmount = 294.67
  return (
    <div className="expense-item">
      <div>{expenseDate.toString()}</div>
      <div className="expense__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
