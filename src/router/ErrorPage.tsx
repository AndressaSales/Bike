import { Link } from "react-router-dom"
import error from "../assets/erro-404.png"

export default function ErroPage(){
    return(
        <div className="erro-page">
            <div>
                <img src={error} className="img-erro" />
            </div>

            <Link className="link-erro" to={'/'}>Voltar para Home</Link>
        </div>
    )
}