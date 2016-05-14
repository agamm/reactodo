const init = [
  { id: 0, done: true,  text: 'make components' },
  { id: 1, done: false, text: 'design actions' },
  { id: 2, done: false, text: 'implement reducer' },
  { id: 3, done: false, text: 'connect components' }
];

export default function(todos=init, action) {
  switch(action.type) {
    case 'ADD_TODO':
        return todos.concat(action.payload)

    case 'TOGGLE_TODO':
        var t = todos.map(todo => {
            if (todo.id === action.payload.id)
                todo.done = !todo.done
            return todo
        })
        return t

    default:
      return todos;
  }
}