import { useState, useEffect } from 'react'

function App() {

  const [tickets, setTickets] = useState(
    [
      {
        id: 0,
        title: "NOT API TICKET",
        description: "This ticket was NOT created by the API",
      },
      {
        id: 100,
        title: "also not API TICKET",
        description: "This ticket was also not created by the API",
      }
    ]
  )

  useEffect(() => {
    fetch('http://localhost:8000/api/tickets/')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setTickets(data)
      })
  }, [])

  return (
    <div>
      <div>
        <h1>My Tickets</h1>
        <ul>
          {tickets.map(ticket => (
            <div className="card">
              <h5 className="card-header">{ticket.title}</h5>
              <div className="card-body">
                <h5 className="card-title">{ticket.title}</h5>
                <p className="card-text">{ticket.description}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
