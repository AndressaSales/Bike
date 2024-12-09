import { Link } from "react-router-dom"
import cyclist from "../assets/cyclist-about.png"

export default function About(){
    return(
        <div className="container-about">
            <div className="img">
                <img src={cyclist} className="img-about" />
            </div>

            <div className="about-text">
                <h2>Maratona 2024</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eveniet incidunt maiores necessitatibus, cupiditate, quod consequatur officiis neque sapiente nihil sunt est, amet voluptate iusto pariatur doloremque adipisci veritatis aperiam!
                </p>
                <div>
                    <Link className="link" to={'/register'}> Participar</Link>
                </div>
            </div>
        </div>
    )
}