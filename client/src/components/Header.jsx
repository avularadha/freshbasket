import {Link} from "react-router-dom";

function Header(){
    const user = JSON.parse(
        localStorage.getItem("user")
    );
    return(
        <div>
            <h1>{user.name}</h1>
            <Link to="/login">👤</Link>
        </div>
    )
}