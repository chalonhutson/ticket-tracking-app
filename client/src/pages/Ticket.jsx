import { Link, useLoaderData } from "react-router-dom"
import { getTicket } from "../api/tickets"

function Ticket() {
    const { ticket } = useLoaderData()

    document.title = ticket.title

    return (
        <>
            <h1>{ticket.title}</h1>
            <p>{ticket.description}</p>
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
