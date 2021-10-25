import "./Card.css";
function Card(props) {
    // https://reactjs.org/docs/composition-vs-inheritance.html
    // 'props.children'  is reserved. used for Wrapper or Box Components
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
