import css from "./BotoesHome.module.css"

export default function BotoesHome({nome}){
    return(
        <div className={css.divbtnHome}>
            <button className={css.btnHome}>{nome}</button>
        </div>
    )
}