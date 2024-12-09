import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <div className="container-footer">
            <div className="footer-icon">
                <Link className="link" to={''}><FaInstagram /></Link>
                <Link className="link" to={''}><FaFacebookSquare /></Link>
                <Link className="link" to={''}><FaTwitter /></Link>
                <Link className="link" to={''}><IoLogoYoutube /></Link>
            </div>
        </div>
    )
}