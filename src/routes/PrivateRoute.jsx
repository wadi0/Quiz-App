import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'

const PrivateRoute = ({children}) => {
    const { currentUser } = useAuth();
        if (!currentUser){
            return <Navigate to="/sign-in" />
        }
        return children;
}

export default PrivateRoute
