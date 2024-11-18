import css from "./Chat.module.css"
import Header from "../componentes/Header";
import {FaStar} from "react-icons/fa";
import React from "react";
import CardChat from "../componentes/CardChat";


export default function Chat(){
    return(
        <div>
            <div style={{backgroundImage: `url(./background-teste.png)`}} className={css.blocoSec1}>
                <div className={css.details}>
                    <Header
                        redireciona1={"./chat"}
                        redireciona2={"./galeria"}
                        redireciona3={"./paginalivros"}
                        redireciona4={"./perfil"}
                        icone1={"fa-comments"}
                        icone2={"fa-image"}
                        icone3={"fa-book"}
                        icone4={"fa-user"}
                    ></Header>
                </div>

            </div>
            <div>
                <CardChat></CardChat>
            </div>
        </div>
    );
}