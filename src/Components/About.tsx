import cyclist from "../assets/cyclist-about.png"
import { useState } from "react"
import { Box, Modal } from "@mui/material"
import FormRegister from "./FormRegister"

export default function About(){

    const [modalOpen, setModalOpen] = useState<boolean>(false)

    const handleOpen = () => {
        setModalOpen(!modalOpen)
    }

    return(
       <>
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
                    <button className="link" onClick={handleOpen}>Participar</button>
                </div>
            </div>
         </div>
         <Modal
            open={modalOpen}
            onClose={handleOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="modal-container"
         >
            <Box className="modal-body">
                <FormRegister />
            </Box>

         </Modal>
       </>
    )
}