About the bug
we expect when props has been updated, all data in the ExpenseElement will be updated too.
but if we put a useState( ) function there.  and use it as a middleman, things changed
the updated props has been passed 
but the useState() looks not to be executed with the updating of the props.
// maybe, one useState() is initialized, only execute setXXXState( ) manually can change its value???