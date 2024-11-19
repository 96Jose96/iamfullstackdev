import { useState, useEffect } from "react"

export default function InputCreate({ url, fetchData }) {
    const [newTask, setNewTask] = useState('')
    const [taskCreated, setTaskCreated] = useState(null)

    const handleInput = (e) => {
        setNewTask(e.target.value)
    }

    const handleCreateTask = async () => {
        try {
            const response = await fetch(`${url}/create`, {
                method:'POST',
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify({ title: newTask })
            })

            if (response.ok) {
                const createdTask = await response.json()
                setTaskCreated(createdTask)
                setNewTask('')
                fetchData()
            }
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <>
      <input
        type="text"
        value={newTask}
        onChange={handleInput}
        placeholder="Indica nueva tarea"
      />
      <button onClick={handleCreateTask}>Crear</button>

      <p>{taskCreated && `Tarea creada: ${taskCreated.title}`}</p>
    </>
  )
}
