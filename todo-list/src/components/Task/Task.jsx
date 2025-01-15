import { motion } from "framer-motion";

const Task = ({id, name, isCheck, onCheck, deleteTask}) => {

    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -20}}
            transition={{duration:0.3}}
        
        >
            <motion.h3
                animate={{
                    textDecoration: isCheck ? "line-through" : "none",
                    color: isCheck ? "#888" : "#000",
                    opacity: isCheck ? 0.6 : 1,
                }}
                transition={{ duration: 0.3 }}
            >{name}
            </motion.h3>
            <input type="checkbox" onChange={() => onCheck(id)} checked={isCheck} name="" id="" />
            <button onClick={() => deleteTask()}>Delete task</button>
        </motion.div>
    )
}

export default Task