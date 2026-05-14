import { Link } from 'react-router-dom'

function NotFound({ title = 404, message = "Page not found!", showLink = true }) {
    return (

        // 1. div.not-found
        //    - h2 with a 404 message
        //    - p with a short explanation
        //    - Link back to "/" — "Back to Home"

        <div className="not-found">
            <h2>{title}</h2>
            <p>{message}</p>
            {showLink && <Link to='/'>Back to Home</Link>}
        </div>
    )
}

export default NotFound;