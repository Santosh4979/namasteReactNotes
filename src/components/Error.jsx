import { useRouteError } from "react-router-dom";

const Error = () => {
const error = useRouteError()
    return (
        <div>
            <h1>Error Pa</h1>
            <p>{error.status}{error.message}</p>
        </div>
    )
}

export default Error;