import './App.css'
import {DefaultRoutes} from "./Routers";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

function App() {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <DefaultRoutes/>
        </QueryClientProvider>

    )
}

export default App
