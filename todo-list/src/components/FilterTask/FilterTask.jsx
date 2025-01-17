import { motion } from "framer-motion";


function FilterTask({ setFilterTask, filterTask }) {
    const category = ["", "none", "done"]

    return (
        <>
            <p onClick={() => setFilterTask("")}>All</p>
            <p onClick={() => setFilterTask("none")}>Not done task</p>
            <p onClick={() => setFilterTask("done")}>Done Task</p>
        </>
    )
}



export default FilterTask
