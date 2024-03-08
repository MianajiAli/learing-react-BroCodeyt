import { useState } from "react";

const ToDoList = () => {
    const [tasks, setTasks] = useState([
        { name: "task1", done: false }
    ]);

    const [taskInput, setTaskInput] = useState("");

    const addTasks = () => {
        if (!taskInput.trim()) return; // Prevent adding empty tasks
        setTasks([...tasks, { name: taskInput, done: false }]);
        setTaskInput(""); // Reset input value after adding task
    };

    const handleInputChange = (e) => {
        setTaskInput(e.target.value); // Update input value state
    };
    const changeStatus = (action, index) => {
        setTasks(prevTasks => {
            const updatedTasks = [...prevTasks]; // Create a copy of the tasks array
            const taskToMove = updatedTasks[index];

            if (action === "done") {
                updatedTasks[index] = {
                    ...taskToMove,
                    done: !taskToMove.done // Toggle the 'done' property
                };
            } else if (action === "remove") {
                updatedTasks.splice(index, 1); // Remove the task at the given index
            } else if (action === "moveUp" && index > 0) {
                updatedTasks[index] = updatedTasks[index - 1];
                updatedTasks[index - 1] = taskToMove;
            } else if (action === "moveDown" && index < updatedTasks.length - 1) {
                updatedTasks[index] = updatedTasks[index + 1];
                updatedTasks[index + 1] = taskToMove;
            }

            return updatedTasks; // Set the state with the updated array
        });
    };

    return (
        <>
            <br />
            <input type="text" value={taskInput} onChange={handleInputChange} />
            <button onClick={addTasks}>Add</button>
            {/* Render tasks */}
            {tasks.map((task, index) => (
                <div key={index}>
                    

                    <button onClick={() => changeStatus("moveUp", index)}>/\</button>
                    <button onClick={() => changeStatus("moveDown", index)}>\/</button>
                    : {task.name} : {task.done ? "Done" : "Not"} : 
                    <button onClick={() => changeStatus("done", index)}>done</button>
                    <button onClick={() => changeStatus("remove", index)}>delete</button>
                </div>
            ))}
        </>
    );
};

export default ToDoList;
