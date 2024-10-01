import css from "./Footer.module.css"

export default function Footer(){
    return(
        <div className={css.footerTudo}>
            <div className={css.divLogo}>
                <img className={css.logo} src='/logo.svg'/>
            </div>

            <div className={css.footerDireita}>
                <a href={"https://github.com/"}><i className={css.icone + " fa-brands fa-github "}></i></a>
                <a href={"https://mail.google.com/"}><i className={css.icone + " fa-regular fa-envelope "}></i></a>
                <a href={"https://facebook.com/"}><i className={css.icone + " fa-brands fa-facebook "}></i></a>
                <a href={"https://instagram.com/"}><i className={css.icone + " fa-brands fa-instagram "}></i></a>
            </div>
        </div>
    );
}