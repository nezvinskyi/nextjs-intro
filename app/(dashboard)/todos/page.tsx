import TodoList from '@/components/TodoList'
import db from '@/utils/db'

const getData = async () => {
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 200))
  const todos = await db.todo.findMany({})
  return todos
}

const TodosPage = async () => {
  const data = await getData()
  return (
    <div>
      <TodoList todos={data} />
    </div>
  )
}

export default TodosPage
