import { Link, useLoaderData, useNavigate } from "react-router-dom"
import { getTicket, deleteTicket } from "../../api/tickets"

function Ticket() {

    const navigate = useNavigate()

    const { ticket } = useLoaderData()

    document.title = ticket.title

    function attemptDeleteTicket(ticketId) {
        deleteTicket(ticketId).then(() => {
            navigate("/tickets")
        })
    }

    return (
        <>
            <h1>{ticket.title}</h1>
            <p>{ticket.description}</p>
            <button className="btn btn-danger" onClick={() => attemptDeleteTicket(ticket.id)}>Delete</button>
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
