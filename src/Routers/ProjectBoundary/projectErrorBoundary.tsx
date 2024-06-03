import {useRouteError} from "react-router";
import {isRouteErrorResponse} from "react-router-dom";


export function Project() {

    return (
        <>
            <h1>ff</h1>
        </>
    );
}

export function ProjectErrorBoundary() {
    let error = useRouteError();

    // We only care to handle 401's at this level, so if this is not a 401
    // ErrorResponse, re-throw to let the RootErrorBoundary handle it
    if (!isRouteErrorResponse(error) || error.status !== 401) {
        throw error;
    }

    return (
        <>
            <h1>You do not have access to this project</h1>
            <p>
                Please reach out to{" "}
                <a href={`mailto:${error.data.contactEmail}`}>
                    {error.data.contactEmail}
                </a>{" "}
                to obtain access.
            </p>
        </>
    );
}
