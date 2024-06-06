import { useRef } from "react"
import { createTicket } from "../../api/tickets"

import { toast } from "react-toastify"

export default function AddTicket() {

    const titleRef = useRef()
    const descriptionRef = useRef()
    const statusRef = useRef()

    function handleSubmit(event) {
        event.preventDefault()

        const title = titleRef.current.value
        const description = descriptionRef.current.value
        const status = statusRef.current.value

        const ticket = { title, description, status }

        createTicket(ticket)
            .then(() => {
                titleRef.current.value = ""
                descriptionRef.current.value = ""
                statusRef.current.value = "to-do"
                toast.success("Ticket created successfully")
            })
            .catch(error => {
                console.error("Error creating ticket:", error)
            })
    }

    return (
        <div className="container">
            <h1>Add Ticket</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input ref={titleRef} type="text" className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea ref={descriptionRef} className="form-control" id="description" rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <select ref={statusRef} className="form-select" id="status">
                        <option value="to-do">To Do</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
