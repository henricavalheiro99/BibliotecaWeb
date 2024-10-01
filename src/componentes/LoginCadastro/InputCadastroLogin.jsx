import css from "./InputCadastroLogin.module.css"

export default function InputCadastroLogin({tipo, placeholder, icone,}){
    return (
        <div className={css.pegaTudo}>
            <div className={css.divInput}>
                {/*<i className="fa-solid fa-key"></i>*/}
                {/*<i className="fa-solid fa-envelope"></i>*/}
                <i className={css.icone + " fa-solid " + icone}></i>
                <input className={css.inputCadastro}
                       type={tipo}
                       placeholder={placeholder}/>
            </div>
        </div>
    )
}