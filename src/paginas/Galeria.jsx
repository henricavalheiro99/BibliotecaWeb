import css from "./Galeria.module.css"
import Header from "../componentes/Header";
import Banner from "../componentes/Home/Banner";
import React from "react";
import CarrosselGaleria from "../componentes/Galeria/CarrosselGaleria";
export default function Galeria(){
    return(
        <div className={css.main + ' container-fluid'}>
            <div style={{backgroundImage: `url(./background-teste.png)`}} className={css.blocoSec1}>
                <div className={css.details}>
                    <Header
                        redireciona1={"./Chat"}
                        redireciona2={"./Galeria"}
                        redireciona3={"./paginalivros"}
                        redireciona4={"./Perfil"}
                        icone1={"fa-comments"}
                        icone2={"fa-image"}
                        icone3={"fa-book"}
                        icone4={"fa-user"}
                    ></Header>
                </div>
            </div>
            <div className={css.linhaCabecalho}>
                <p className={css.titleGaleria}>Nossos grandes alunos</p>
                <div className={css.divSearch}>
                    <i className={"fa-solid fa-magnifying-glass"} style={{paddingRight: "7px", fontSize: "20px"}}/>
                    <input className={css.inputSearch}
                           type={"text"}
                           placeholder={"Curso...."}
                    />
                </div>
                <div className={css.divSearch}>
                    <i className={"fa-solid fa-magnifying-glass"} style={{paddingRight: "7px", fontSize: "20px"}}/>
                    <input className={css.inputSearch}
                           type={"text"}
                           placeholder={"Ano...."}
                    />
                </div>
                <button className={css.btnSearch}>Buscar</button>
            </div>
            <div>
                <CarrosselGaleria></CarrosselGaleria>
            </div>
        </div>
    );
}