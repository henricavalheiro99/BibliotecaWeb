import css from "./Cadastro.module.css"
import BlocoCadastroLogin from "../componentes/LoginCadastro/BlocoCadastroLogin";
import React from "react";

export default function Cadastro(){
    return(
        <div>
            <BlocoCadastroLogin
                rota={"/cadastro_usuario"}
                frase={"O conhecimento é a única coisa que ninguém pode tirar de você"}
                titulo={"Crie sua conta"}
                botaoTexto={"Cadastrar"}
                textoBaixo={"Já possui conta?"}
                textoSpan={"Entrar"}
                redireciona={"/login"}
            ></BlocoCadastroLogin>
        </div>
    );
}