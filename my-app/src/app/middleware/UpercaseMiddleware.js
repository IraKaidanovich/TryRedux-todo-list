const UperCase = state => next => action => {
  if (action.type === "todos/addTodo"){
    const newAction = {
      ...action,
      payload:{
        ...action.payload,
        text: action.payload.text.split("").reverse().join("")
      }
    };
    return next (newAction);

  }

  return next(action);
}

export default UperCase;