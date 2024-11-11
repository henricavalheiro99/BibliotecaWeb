import React from 'react';
import Header from "../componentes/Header";
import css from "./Home.module.css";
import Banner from "../componentes/Home/Banner";


function Perfil() {
    return (
        <div>
            <div style={{backgroundImage: `url(./background-teste.png)`}} className={css.blocoSec1}>
                <div className={css.details}>
                    <Header
                        redireciona1={"./Chat"}
                        redireciona2={"./Galeria"}
                        redireciona3={"./PaginaDeLivros"}
                        redireciona4={"./Perfil"}
                        icone1={"fa-comments"}
                        icone2={"fa-image"}
                        icone3={"fa-book"}
                        icone4={"fa-user"}
                    ></Header>
                </div>
            </div>
        </div>

    );
}

export default Perfil;