import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "./App";
import Layout from "./Layout";

function ProtectedRoute() {
    const { isAuthenticated } = useContext(Context)

    if (!isAuthenticated) {
        return <Navigate to="/authpage" />
    } else {
        return <Layout />
    }
}

export default ProtectedRoute;