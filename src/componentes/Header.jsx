import css from "./Header.module.css"

export default function Header(){
    return(
        <div className={css.headertudo + ' w-100'}>
            <img className={css.logo} src='/logo.svg'/>
            <div className={css.headerdireita}>
                <i className={css.icone + " fa-regular fa-comments " + css.roxo}></i>
                <i className={css.icone + " fa-regular fa-image " + css.branco}></i>
                <i className={css.icone + " fa-solid fa-book " + css.roxo}></i>
                <i className={css.icone + " fa-regular fa-user " + css.branco}></i>
            </div>
        </div>
    );
}