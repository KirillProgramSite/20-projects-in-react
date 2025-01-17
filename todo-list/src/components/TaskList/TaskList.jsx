import { motion } from "framer-motion";
import FilterTask from "../FilterTask/FilterTask";


function TaskList({tasks, taskList, filterTask ,filteredTaskList, setFilterTask }) {
  return (
    <div className='container'>
        <div style={{display: "flex", alignItems: "baseline", justifyContent: "space-between"}}>
            <h1 style={{ marginTop: 100, marginBottom: 20 }}>Task list</h1>
            <FilterTask filterTask={filterTask} setFilterTask={setFilterTask} />
        </div>

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
