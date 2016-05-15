const init = [
  { id: 0, done: true,  text: 'understand react' },
  { id: 1, done: false, text: 'understand react-native' },
  { id: 2, done: false, text: 'understand redux' },
  { id: 3, done: false, text: 'profit' }
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