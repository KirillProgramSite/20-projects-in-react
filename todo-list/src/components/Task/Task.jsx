import { motion } from "framer-motion";
import { Button } from "../UI/Button.styled";
import { TaskLeftWrapper, TaskName, TaskWrapper } from "./Task.styled";

const Task = ({id, name, isCheck, onCheck, deleteTask}) => {

    return (
        <TaskWrapper
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration:0.3, ease: ["backOut"]}}
        
        >

            <TaskLeftWrapper>
                <input 
                style={{borderRadius: 10}} 
                type="checkbox" 
                onChange={() => onCheck(id)} 
                checked={isCheck}
                />
                <TaskName
                    animate={{
                        textDecoration: isCheck ? "line-through" : "none",
                        color: isCheck ? "#888" : "#000",
                        opacity: isCheck ? 0.6 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                >{name}
                </TaskName>
            </TaskLeftWrapper>
            <Button whileTap={{ scale: 0.9 }} color="danger" onClick={() => deleteTask(id)}>Delete task</Button>
        </TaskWrapper>
    )
}

export default Task