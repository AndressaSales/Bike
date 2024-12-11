export default function FormRegister(){
    return(
        <form className="body-register">
            <h2>inscreva-se</h2>
            <div className="box-input">
                <input type="text" placeholder="Nome" className="name" required/>
                <input type="email" placeholder="seuemail@email.com" />
            </div>
            <div className="btn">
                <button>Enviar</button>
            </div>
        </form>
    )
}