import React from 'react'

function List({ todos, setTodos, filter }) {

    // to make a task completed state
    const complete = (id) => {
        setTodos(
            todos.map((todo) => 
            todo.id === id 
                ? {...todo, isCompleted: !todo.isCompleted} 
                : todo
        
        ))
    }

    // to change all the tasks completed state
    const completeAll = () => {
        setTodos(
            todos.map((todo) => 
                todo.isCompleted
                    ? {...todo, isCompleted: todo.isCompleted}
                    : {...todo, isCompleted: !todo.isCompleted}
            )
        )
    }

    // to delete a task
    const deleteTask = (id) => {
        setTodos(
            todos.filter((todo) => todo.id !== id)
        )
    }

    // todos array is filtered to dislay tasks separately
    const filtered = todos.filter((todo) => {
        if(filter === 'all'){
            return true;
        }else if(filter === 'completed'){
            return todo.isCompleted
        }else{
            return !todo.isCompleted
        }
    })

  return (
    <div>
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label onClick={completeAll} htmlFor="toggle-all">
            Mark all as complete
          </label>

          <ul className="todo-list">
            {
                filtered.map((todo) => (
                    <li key={todo.id} className={`${todo.isCompleted ? 'completed':''}`}>
                        <div className="view">
                            <input
                                className="toggle" 
                                type="checkbox"
                                onClick={() => complete(todo.id)}
                                checked={todo.isCompleted}
                                readOnly
                            />
                            <label>{todo.task}</label>
                            <button className="destroy" onClick={() => deleteTask(todo.id)}></button>
                        </div>                      
                    </li>
                ))
            }
          </ul>
        </section>
    </div>
  )
}

export default List