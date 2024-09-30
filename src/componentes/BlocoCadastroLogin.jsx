import css from "./BlocoCadastroLogin.module.css"
import React from "react";

export default function BlocoCadastroLogin({frase, titulo, botaoTexto, textoBaixo, textoSpan}){
    return(
        <div>
            <div className={css.container} style={{backgroundImage: `url(./background-teste.png)`}}>
                <div className={css.details}>
                    <div className={css.loginBox}>
                        <div className={css.logoSection}>
                            <img src="./logo.svg" alt="" className={css.logo}/>
                            <p className={css.fraseMotivacao}>{frase}</p>
                        </div>
                        <div className={css.formSection}>
                            <p className={css.titulo}>{titulo}</p>
                            <form className={css.form}>
                                <div className={css.inputContainer}>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Insira seu email"
                                    />
                                </div>
                                <div className={css.inputContainer}>
                                    <input
                                        type="password"
                                        id="senha"
                                        placeholder="Insira sua senha"
                                    />
                                </div>
                                <button className={css.botaoEnviar} type="submit">{botaoTexto}</button>
                            </form>
                            <p className={css.textoBaixo}>{textoBaixo} <a href="/Cadastro" className={css.textoSpan}>{textoSpan}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}