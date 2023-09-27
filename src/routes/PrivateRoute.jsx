import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'

const PrivateRoute = ({children}) => {
    const { currentUser } = useAuth();
        // if (!currentUser){
        //     return <Navigate to="/sign-in" />
        // }
        // return children;
        return currentUser ? children : <Navigate to="/"sign-in />;
}

export default PrivateRoute
