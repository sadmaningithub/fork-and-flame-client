import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";


const PrivateRoutes = ({ children }) => {

    // console.log(children);

    const { user, loading } = useAuth();
    // const location = useLocation();

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(user){
        return children
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;