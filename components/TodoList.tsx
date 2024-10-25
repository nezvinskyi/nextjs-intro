import Todo from "./Todo"

const TodoList = ({ todos }) => {
  return (
    <div className="">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
