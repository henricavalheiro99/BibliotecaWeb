import css from "./Header.module.css"

export default function Header({icone1, icone2, icone3, icone4, redireciona1, redireciona2, redireciona3, redireciona4}){
    return(
        <div className={css.headertudo + ' w-100'}>
                <img className={css.logo} src='/logo.svg'/>
                <div className={css.headerdireita}>
                    <a href={redireciona1}><i className={css.icone + " fa-solid " + icone1}></i></a>
                    <a href={redireciona2}><i className={css.icone + " fa-solid " + icone2}></i></a>
                    <a href={redireciona3}><i className={css.icone + " fa-solid " + icone3}></i></a>
                    <a href={redireciona4}><i className={css.icone + " fa-solid " + icone4}></i></a>
                </div>
        </div>
    );
}