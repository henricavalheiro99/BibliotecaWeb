import css from "./BlocoCadastroLogin.module.css"
import React from "react";
import InputCadastroLogin from "./InputCadastroLogin";

export default function BlocoCadastroLogin({frase, titulo, botaoTexto, textoBaixo, textoSpan, redireciona, repetirSenha = true}){
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
                                {repetirSenha && (
                                    <InputCadastroLogin
                                        tipo={"text"}
                                        placeholder={"Insira seu nome"}
                                        icone={"fa-user"}
                                    ></InputCadastroLogin>
                                )}
                                <InputCadastroLogin
                                    tipo={"email"}
                                    placeholder={"Insira seu email"}
                                    icone={"fa-envelope"}
                                ></InputCadastroLogin>
                                <InputCadastroLogin
                                    tipo={"password"}
                                    placeholder={"Insira sua senha"}
                                    icone={"fa-lock"}
                                ></InputCadastroLogin>
                                <button className={css.botaoEnviar} type="submit">{botaoTexto}</button>
                            </form>
                            <p className={css.textoBaixo}>{textoBaixo} <a href={redireciona} className={css.textoSpan}>{textoSpan}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}