import { motion } from "framer-motion";


function TaskList({tasks, taskList, filterTask ,filteredTaskList, setFilterTask }) {
  return (
    <div className='container'>
      <h1 style={{ marginTop: 100, marginBottom: 20 }}>Task list</h1>
      {/* <p onClick={() => setFilterTask("")}>All</p>
      <p onClick={() => setFilterTask("none")}>Not done task</p>
      <p onClick={() => setFilterTask("done")}>Done Task</p> */}

      <motion.div
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 1, ease: ["easeInOut"]}}
      >
        {filterTask === "" ? taskList : filteredTaskList}
      </motion.div>
    </div>
  )
}



export default TaskList
