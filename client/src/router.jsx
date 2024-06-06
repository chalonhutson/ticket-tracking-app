import { createBrowserRouter, Navigate, useRouteError } from "react-router-dom"
import { RootLayout } from "./layouts/RootLayout"
import { ticketRoute } from "./pages/tickets/Ticket"
import { ticketListRoute } from "./pages/tickets/TicketList"
import AddTicket from "./pages/tickets/AddTicket"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    { index: true, element: <Navigate to="/tickets" /> },
                    {
                        path: "tickets",
                        children: [
                            {
                                index: true,
                                ...ticketListRoute,
                            },
                            { path: "add", element: <AddTicket /> },
                            { path: ":ticketId", ...ticketRoute },
                        ],
                    },
                    { path: "*", element: <h1>404 - Page Not Found</h1> },
                ],
            },
        ],
    },
])

function ErrorPage() {
    const error = useRouteError()

    return (
        <>
            <h1>Error - Something went wrong</h1>
            {import.meta.env.MODE !== "production" && (
                <>
                    <pre>{error.message}</pre>
                    <pre>{error.stack}</pre>
                </>
            )}
        </>
    )
}