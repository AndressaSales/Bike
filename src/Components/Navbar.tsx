import { MdDirectionsBike } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="box-navbar">
            <Link to={'/'}><h1><MdDirectionsBike color="#2196f3" /></h1></Link>
        </nav>
    )
}