import {
    Link,
    Outlet,
    ScrollRestoration,
    useNavigation,
} from "react-router-dom"

export function RootLayout() {
    const { state } = useNavigation()
    const isLoading = state === "loading"

    return (
        <>
            <nav className="top-nav">
                <div className="nav-text-large">My Ticketing App</div>
                <ul className="nav-list">
                    <li>
                        <Link to="/tickets">Tickets</Link>
                        <Link to="/add-ticket">Add Ticket</Link>
                    </li>
                </ul>
            </nav>
            <ScrollRestoration />
            {isLoading && <div className="loading-spinner" />}
            <div className={`container ${isLoading ? "loading" : ""}`}>
                <Outlet />
            </div>
        </>
    )
}