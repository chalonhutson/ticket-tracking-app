import {
    Link,
    Outlet,
    ScrollRestoration,
    useNavigation,
} from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function RootLayout() {
    const { state } = useNavigation()
    const isLoading = state === "loading"

    return (
        <>

            <nav className="top-nav">
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <div className="nav-text-large">My Ticketing App</div>
                <ul className="nav-list">
                    <li>
                        <Link to="/tickets">Tickets</Link>
                        <Link to="/tickets/add">Add Ticket</Link>
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