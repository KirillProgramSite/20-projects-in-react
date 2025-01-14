import { useState } from 'react'
import './App.css'
import Task from './components/Task/Task'


function App() {

  const [tasks, setTasks] = useState(
    [
      { id: 0, name: "Go to shopping", isCheck: false },
      { id: 1, name: "Make project", isCheck: true },
      { id: 2, name: "Learn new lang", isCheck: false },
    ]
  )

  const [taskNameValue, setTaskNameValue] = useState('')

  const handleCheck = (id) => {
    setTasks((prevTasks) => 
      prevTasks.map((task) =>
        task.id === id ? {...task, isCheck: !task.isCheck} : task
      )
    )
  }

  const handleChangeTaskName = event => setTaskNameValue(event.target.value)

  const addTask = () => {

    let newTask = { 
      id: Date.now(), 
      name: taskNameValue, 
      isCheck: false, 
    }

    setTasks([...tasks, newTask])
    setTaskNameValue('')

  }

  //TODO: Сделать правильно код
  const deleteTask = (id) => {

    //TODO: Поавторить фильтры https://doka.guide/js/array-filter/
    setTasks(tasks.filter(task => task.id != id))
  }


  const taskList = tasks.map((task) => <Task deleteTask={() => deleteTask(task.id)} onCheck={() => handleCheck(task.id)} key={task.id} name={task.name} isCheck={task.isCheck} id={task.id} />)


  return (
    <>
      <h1>Task in Today</h1>
      <input value={taskNameValue} onChange={handleChangeTaskName} type="text" placeholder="Enter your task" />
      <button onClick={() => addTask()}>Add Task</button>

      <h2>Task list</h2>
      {taskList}
    </>
  )
}



export default App
