import { Link, useLoaderData } from "react-router-dom"
import { getTickets } from "../api/tickets"

function TicketList() {
    const tickets = useLoaderData()

    document.title = "All of your tickets"

    return (
        <>
            <h1>My Tickets</h1>
            <ul>
                {tickets.map(ticket => (
                    <li key={ticket.id}>
                        <h2>{ticket.title}</h2>
                        <p>{ticket.description}</p>
                        <Link to={`/tickets/${ticket.id}`}>View</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

function loader({ request: { signal } }) {
    return getTickets({ signal })
}

export const ticketListRoute = {
    loader,
    element: <TicketList />,
}