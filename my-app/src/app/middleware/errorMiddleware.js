const error = store => next => action => {
  if (action.type === "Show_Error"){
    console.log(action.payloud.error);
  } else {
    next(action);
  }
}

export default error