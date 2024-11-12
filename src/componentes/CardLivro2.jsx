import css from "./CardLivro2.module.css"

export default function CardLivro({nome, genero, autor, imagem}){
    return(
        <div className={css.cardLivro} style={{backgroundImage: imagem, backgroundSize: "cover"}}>
            <div className={css.caixaCard}>
                <p className={css.textoCard}><span className={css.textoSpan}>Nome: </span>{nome}</p>
                <p className={css.textoCard}><span className={css.textoSpan}>Gênero: </span>{genero}</p>
                <p className={css.textoCard}><span className={css.textoSpan}>Autor: </span>{autor}</p>
            </div>
        </div>
    );
}