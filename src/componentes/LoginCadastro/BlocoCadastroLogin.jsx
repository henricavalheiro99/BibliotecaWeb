import css from "./BlocoCadastroLogin.module.css"
import React, {useContext, useState} from "react";
import InputCadastroLogin from "./InputCadastroLogin";
import {Dados} from "../../context/ApiContext";
import {salvaDados} from "../../adapter/storage";
import {useNavigate} from "react-router-dom";



export default function BlocoCadastroLogin({rota, frase, titulo, botaoTexto, textoBaixo, textoSpan, redireciona, repetirSenha = true}){
    const {fetchData} = useContext(Dados)
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate()


    const  handleEntrar = async (e) => {
        e.preventDefault()
        let resp = await fetchData(rota, "POST", {"nome": nome, "email": email, "senha": senha})
        setNome('');
        setEmail('');
        setSenha('');
        console.log(resp)

        if (!("token" in resp)) {
            alert(resp.mensagem)
            return
        }

        salvaDados("token", resp.token)

        if(resp.mensagem === "Login com sucesso"){
            navigate("/Home")
        }

    };



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
                                        setChange={setNome}
                                        _value={nome}

                                    ></InputCadastroLogin>
                                )}
                                <InputCadastroLogin
                                    tipo={"email"}
                                    placeholder={"Insira seu email"}
                                    icone={"fa-envelope"}
                                    setChange={setEmail}
                                    _value={email}
                                ></InputCadastroLogin>
                                <InputCadastroLogin
                                    tipo={"password"}
                                    placeholder={"Insira sua senha"}
                                    icone={"fa-lock"}
                                    setChange={setSenha}
                                    _value={senha}
                                ></InputCadastroLogin>
                                <button className={css.botaoEnviar} type="submit" onClick={(e) => handleEntrar(e)}>{botaoTexto}</button>
                            </form>
                            <p className={css.textoBaixo}>{textoBaixo} <a href={redireciona} className={css.textoSpan}>{textoSpan}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}