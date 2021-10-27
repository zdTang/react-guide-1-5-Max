### https://reactjs.org/docs/composition-vs-inheritance.html
##  props.children
    used for those wrapper element, as we don't know what will inside the wrapper

##  user Event,  state
    for html event, just use 'on' + "eventName"
##  react Hooks
    useXXX, useState()
    they must be used in component function, cannot nested in other functions
    For normal variable, once it changes, REACT doesn't care about it, so the change
    will not trigger to re-run the component function another time.
    only when user use those Hooks, React will know it is time to re-render the page

    one setXXX() is executed, it calls the REACT to re-render the component