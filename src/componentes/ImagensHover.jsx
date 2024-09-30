import css from "./ImagensHover.module.css"

export default function ImagensHover({imagem, descricao}){
    return(
        <div className={css.divTotal} style={{backgroundImage: imagem}}>
            <div className={css.details}>
                <p className={css.textDetails}>{descricao}</p>
            </div>
        </div>
    )
}