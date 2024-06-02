import { useLoaderData, useNavigate, useLocation } from "react-router-dom"
import { getTickets } from "../../api/tickets"
import { useEffect, useState } from "react"

import TicketListItem from "./TicketListItem"

function TicketList() {
    const initialTickets = useLoaderData()
    const [tickets, setTickets] = useState(initialTickets)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const data = await getTickets()
                setTickets(data)
            } catch (error) {
                console.error("Error fetching tickets:", error)
            }
        }

        fetchTickets()
    }, [location])

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
