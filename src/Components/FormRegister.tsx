export default function FormRegister(){

    return(
        <form className="body-register">
            <h2>inscrever-se</h2>
            <div className="box-input">
                <input type="text" placeholder="Nome" className="name" required/>
                <input className="email" type="email" placeholder="seuemail@email.com" />
                <textarea placeholder="Porque você deseja participar dessa maratona?" />
            </div>
            <div className="btn">
                <button>Enviar</button>
            </div>
        </form>
    )
}