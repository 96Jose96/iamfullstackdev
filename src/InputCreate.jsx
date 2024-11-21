import { useState } from "react"

export default function InputCreate({ url, fetchData }) {
    const [newTask, setNewTask] = useState('')
    const [taskCreated, setTaskCreated] = useState(null)

    const handleCreateTask = async () => {
        try {

             //Con Axios
            // const response = await axios.post(urlApiCreate, payload)
            // setCreatedtask(`Success', ${response.data.title}`)
            // setTitle('')

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
      <button onClick={(e) => setNewTask(e.target.value)}>Crear</button>

      <p>{taskCreated && `Tarea creada: ${taskCreated.title}`}</p>
    </>
  )
}
