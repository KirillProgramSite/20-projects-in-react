import { useState } from 'react'
import './App.css'
import Task from './components/Task/Task'
import { Input } from './components/UI/Input.styled'
import { Button } from './components/UI/Button.styled'
import { motion } from "framer-motion";
import TaskList from './components/TaskList/TaskList'


function App() {

  const [tasks, setTasks] = useState(
    [
      { id: 0, name: "Go to shopping", isCheck: false, type: "none" },
      { id: 1, name: "Make project", isCheck: true, type: "done" },
      { id: 2, name: "Learn new lang", isCheck: false, type: "none" },
    ]
  )
  const [taskNameValue, setTaskNameValue] = useState('')
  const [filterTask, setFilterTask] = useState('')

  const handleCheck = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCheck: !task.isCheck, type: task.isCheck ? "none" : "done" } : task
      )
    )
  }

  const handleChangeTaskName = event => setTaskNameValue(event.target.value) 

  const addTask = () => {
    if (taskNameValue) {
      let newTask = {
        id: Date.now(),
        name: taskNameValue,
        isCheck: false,
        type: "none",
      }

      setTasks([...tasks, newTask])
      setTaskNameValue('')
    } else {
      alert("Enter name of task")
    }
  }

  //TODO: Сделать правильно код
  const deleteTask = (id) => {
    //TODO: Поавторить фильтры https://doka.guide/js/array-filter/
    setTasks(tasks.filter(task => task.id != id))
  }


  const taskList = tasks.map((task) => 
  <Task 
  deleteTask={() => deleteTask(task.id)} 
  onCheck={() => handleCheck(task.id)}
  key={task.id} 
  name={task.name} 
  isCheck={task.isCheck} 
  id={task.id} />)


  const filteredTaskList = tasks
  .filter((task) => task.type === filterTask) // Условие фильтрации
  .map((filteredTask) => (
    <Task
      deleteTask={() => deleteTask(filteredTask.id)} 
      onCheck={() => handleCheck(filteredTask.id)}
      key={filteredTask.id}
      name={filteredTask.name}
      isCheck={filteredTask.isCheck}
      id={filteredTask.id}
    />
  ));



  return (
    <div className='container'>
      <h1 style={{ marginBottom: 10, marginTop: 100 }}>Task in Today</h1>
      <Input value={taskNameValue} onChange={handleChangeTaskName} type="text" placeholder="Enter your task" />
      <Button whileTap={{ scale: 0.9 }} style={{ marginLeft: 10 }} onClick={() => addTask()}>Add Task</Button>

    

      <TaskList tasks={tasks}
       filterTask={filterTask} 
       taskList={taskList} 
       filteredTaskList={filteredTaskList} 
       setFilterTask={setFilterTask} 
       />
    </div>
  )
}



export default App
