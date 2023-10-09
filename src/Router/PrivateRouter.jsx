import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";


const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname);

    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }

    if(user){
        return children;
    }

    return <Navigate to='/login' state={location.pathname} replace></Navigate>


}

export default PrivateRouter