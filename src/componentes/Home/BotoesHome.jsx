import css from "./BotoesHome.module.css"

export default function BotoesHome({nome, link}){
    return(
        <div className={css.divbtnHome}>
            <button className={css.btnHome}><a href={link}>{nome}</a></button>
        </div>
    )
}