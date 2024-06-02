import { Link, useNavigate } from "react-router-dom"

import { updateTicketStatus } from "../../api/tickets"

export default function TicketListItem({ ticket }) {

    const navigate = useNavigate()

    function attemptMoveTicket(e, direction) {
        e.stopPropagation()
        navigate(window.location.pathname)

        if (direction === "forward") {
            if (ticket.status === "to-do") {
                updateTicketStatus(ticket.id, "in-progress")
            } else if (ticket.status === "in-progress") {
                updateTicketStatus(ticket.id, "completed")
            }
        } else if (direction === "backward") {
            if (ticket.status === "in-progress") {
                updateTicketStatus(ticket.id, "to-do")
            } else if (ticket.status === "completed") {
                updateTicketStatus(ticket.id, "in-progress")
            }
        }
    }


    return (
        <div onClick={() => navigate(`/tickets/${ticket.id}`)} className="card">
            <div className="card-body">
                <h5 className="card-title">{ticket.title}</h5>
                <p className="card-text">{ticket.description}</p>
                {ticket.status === "in-progress" || ticket.status === "completed" ?
                    <Link onClick={(e) => attemptMoveTicket(e, "backward")} className="card-link">Move Back</Link>
                    : null
                }
                {
                    ticket.status === "to-do" || ticket.status === "in-progress" ?
                        <Link onClick={(e) => attemptMoveTicket(e, "forward")} className="card-link">Move Forward</Link>
                        : null
                }
            </div>
        </div>
    )
}
