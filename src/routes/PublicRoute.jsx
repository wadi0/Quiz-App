import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PublicRoute = ({children}) => {
    const { currentUser } = useAuth();
    // if (!currentUser){
    //     return <Navigate to="/" />
    // }
    // return children;

    return !currentUser ? children : <Navigate to="/" />;
}

export default PublicRoute