import { Link, useLoaderData } from "react-router-dom"
import { getTickets } from "../../api/tickets"

import TicketListItem from "./TicketListItem"

function TicketList() {
    const tickets = useLoaderData()

    document.title = "All of your tickets"

    return (
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <h1>To-Do</h1>
                    <ul>
                        {tickets.filter((ticket) => ticket.status === "to-do").map(ticket => (
                            <TicketListItem key={ticket.id} ticket={ticket} />
                        ))}
                    </ul>
                </div>
                <div className="col">
                    <h1>In Progress</h1>
                    <ul>
                        {tickets.filter((ticket) => ticket.status === "in-progress").map(ticket => (
                            <TicketListItem key={ticket.id} ticket={ticket} />
                        ))}
                    </ul>
                </div>
                <div className="col">
                    <h1>Completed</h1>
                    <ul>
                        {tickets.filter((ticket) => ticket.status === "completed").map(ticket => (
                            <TicketListItem key={ticket.id} ticket={ticket} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

function loader({ request: { signal } }) {
    return getTickets({ signal })
}

export const ticketListRoute = {
    loader,
    element: <TicketList />,
}