import {useNavigate, useLocation} from "react-router-dom"

export function withRouter(Component){
    function Wrapper(props){
        const navigate = useNavigate()
        const location = useLocation()
        return <Component
        navigate={navigate}
        location={location}
        {...props}
        />
    }
    return Wrapper
}