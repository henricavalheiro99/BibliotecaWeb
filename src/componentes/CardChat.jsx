import css from "./CardChat.module.css"

function CardChat(){
    return(
        <div className={css.Content}>
            <div>
                <input type={"file"}/>
            </div>
            <div className={css.esquerda}>
                <div >
                    <input className={css.divInput}/>
                    <input className={css.divInput}/>
                </div>
                <div>
                    <button className={css.btn}>Cadastrar</button>
                </div>
            </div>
        </div>
    )
}

export default CardChat