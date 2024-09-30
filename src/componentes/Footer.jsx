import css from "./Footer.module.css"

export default function Footer(){
    return(
        <div className={css.footerTudo}>
            <div className={css.divLogo}>
                <img className={css.logo} src='/logo.svg'/>
            </div>

            <div className={css.footerDireita}>
                <i className={css.icone + " fa-brands fa-github " + css.roxo}></i>
                <i className={css.icone + " fa-regular fa-envelope " + css.branco}></i>
                <i className={css.icone + " fa-brands fa-facebook " + css.roxo}></i>
                <i className={css.icone + " fa-brands fa-instagram " + css.branco}></i>
            </div>
        </div>
    );
}