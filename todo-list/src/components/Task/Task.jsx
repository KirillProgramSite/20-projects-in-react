const Task = ({id, name, isCheck, onCheck, deleteTask}) => {

    return (
        <>
            <h3>{name}</h3>
            <input type="checkbox" onChange={() => onCheck(id)} checked={isCheck} name="" id="" />
            <button onClick={() => deleteTask()}>Delete task</button>
        </>
    )
}

export default Task