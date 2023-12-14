import React from 'react'

function Form({ task, setTask, todos, setTodos }) {

    // add newTodo abject to Todos array when form submits
    const onSubmit = (e) => {
        e.preventDefault()
        const newTodo = {
            task,
            id: Date.now(),
            isCompleted: false
        }
        if(task === '') return
        setTodos([...todos, newTodo ])
        setTask('');
    }

    // set the input data to task variable
    const onChangeInput = (e) => {
        setTask(e.target.value)
    }

  return (
    <div>
        <header className="header">
                <h1>todos</h1>
                <div>
                    <form onSubmit={onSubmit}>
                        <input
                        className="new-todo" 
                        placeholder="What needs to be done?" 
                        autoFocus 
                        onChange={onChangeInput} 
                        value={task}
                        />
                    </form>                    
                </div>
            </header>
    </div>
  )
}

export default Form
