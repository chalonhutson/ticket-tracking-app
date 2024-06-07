import { useState } from "react"
import { Link, useLoaderData, useNavigate } from "react-router-dom"
import { getTicket, deleteTicket, updateTicketTitleDescription } from "../../api/tickets"

function Ticket() {

    const [editTicket, setEditTicket] = useState(false)

    const navigate = useNavigate()

    const { ticket } = useLoaderData()

    const [updatedTicket, setUpdatedTicket] = useState(ticket)

    document.title = ticket.title

    function attemptDeleteTicket(ticketId) {
        deleteTicket(ticketId).then(() => {
            navigate("/tickets")
        })
    }

    function attemptUpdateTicket(ticketId) {
        updateTicketTitleDescription(ticketId, updatedTicket.title, updatedTicket.description).then(() => {
            navigate(`/tickets`)
        })
    }

    return (
        <>
            {editTicket ?
                <>
                    <input
                        type="text"
                        className="control-form"
                        value={updatedTicket.title}
                        onChange={(e) => setUpdatedTicket({ ...updatedTicket, title: e.target.value })}
                    />
                    <input
                        type="text"
                        className="control-form"
                        value={updatedTicket.description}
                        onChange={(e) => setUpdatedTicket({ ...updatedTicket, description: e.target.value })}
                    />
                    <button
                        className="btn btn-success"
                        onClick={() => attemptUpdateTicket(ticket.id)}
                    >
                        Update
                    </button>
                </>
                :
                <>
                    <h1>{ticket.title}</h1>
                    <p>{ticket.description}</p>
                    <button onClick={() => setEditTicket(true)} className="btn btn-warning">Edit</button>
                    <button
                        className="btn btn-danger"
                        onClick={() => attemptDeleteTicket(ticket.id)}
                    >
                        Delete
                    </button>
                </>

            }
            <Link to="/tickets">Back</Link>
        </>
    )
}

async function loader({ request: { signal }, params: { ticketId } }) {
    const ticket = await getTicket(ticketId, { signal })

    return { ticket }
}

export const ticketRoute = {
    loader,
    element: <Ticket />,
}
