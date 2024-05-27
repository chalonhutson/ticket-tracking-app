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
    <>
      <div>
        <h1>My Tickets</h1>
        <ul>
          {tickets.map(ticket => (
            <li key={ticket.id}>
              <h2>{ticket.title}</h2>
              <p>{ticket.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
