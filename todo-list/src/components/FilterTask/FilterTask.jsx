import { motion } from "framer-motion";
import { FilterElement } from "./FilterTask.styled";


function FilterTask({ setFilterTask, filterTask }) {
    const categorys = [{ id: 1, name: "All", filterName: "" }, { id: 2, name: "Not done task", filterName: "none" }, { id: 3, name: "Done Task", filterName: "done" }]

    return (
        <div style={{ display: "flex" }}>
            {categorys.map(category => (
                <FilterElement
                    key={category.id}
                    whileTap={{ scale: 0.9 }}
                    style={{ color: filterTask === category.filterName ? "#74d200" : "grey" }}
                    onClick={() => setFilterTask(category.filterName)}
                >
                    {category.name}
                </FilterElement>
            ))}
        </div>
    )
}



export default FilterTask
