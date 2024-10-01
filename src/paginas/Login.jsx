import React, { useState } from 'react';
import css from './Login.module.css';
import BlocoCadastroLogin from "../componentes/LoginCadastro/BlocoCadastroLogin";

export default function Login(){
    return (
        <div>
            <BlocoCadastroLogin
                frase={"O verdadeiro conhecimento é aquele que capacita as pessoas a se transformarem"}
                titulo={"Entre na sua conta"}
                botaoTexto={"Entrar"}
                textoBaixo={"Não possui conta?"}
                textoSpan={"Cadastrar"}
                redireciona={"/cadastro"}
                repetirSenha={false}
            ></BlocoCadastroLogin>
        </div>
    );
}