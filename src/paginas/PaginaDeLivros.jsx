import css from "./PaginaDeLivros.module.css"
import Header from "../componentes/Header";
import {FaStar} from "react-icons/fa";
import React from "react";
import CardLivro2 from "../componentes/CardLivro2";


export default function PaginaDeLivros(){
    return (
        <div className={css.main + ' container-fluid'}>
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
            <div className={css.linha1}>
                <p className={css.title}>Busque os melhores livros!</p>
                <div className={css.pegaTudo}>
                    <div className={css.divInput}>
                        {/*<i className="fa-solid fa-key"></i>*/}
                        {/*<i className="fa-solid fa-envelope"></i>*/}
                        <i className={"fa-solid fa-magnifying-glass"}
                           style={{fontSize: "25px", paddingRight: "10px", paddingLeft: "10px"}}></i>
                        <input className={css.inputCadastro}
                               type={"text"}
                               placeholder={"Search...."}
                        />
                        <div className={css.divBtn}>
                            <i className="fa-regular fa-paper-plane" style={{fontSize: "25px", color: "white", padding: "10px"}}></i>
                        </div>
                    </div>
                </div>
                <button className={css.Btn}>Filtrar</button>
            </div>
            <div className={css.ContainerMain}>
                <h1 style={{fontSize: "xx-large", color: "black",fontWeight: 800}}>Titulos que podem ser encontrados na biblioteca</h1>
                <div  className={css.divContainer}>
                    <a style={{textDecoration: "none"}} href={"/livroespecifico/12"}>
                        <CardLivro2
                            nome={"Era uma vez um coração partido"}
                            genero={"Romance"}
                            autor={"Stephanie Garber"}
                            imagem={`url(./livro1.png)`}
                        ></CardLivro2>
                    </a>
                    <a style={{textDecoration: "none"}} href={"/livroespecifico/11"}>
                        <CardLivro2
                            nome={"Viagem ao centro da terra"}
                            genero={"Aventura"}
                            autor={"Jules Verne"}
                            imagem={`url(./livro2.png)`}
                        ></CardLivro2>
                    </a>
                    <a style={{textDecoration: "none"}} href={"/livroespecifico/1"}>
                        <CardLivro2
                            style={{height: 10}}
                            nome={"O cemitério de gigantes"}
                            genero={"Terror"}
                            autor={"Malu Costacurta"}
                            imagem={`url(./livro3.png)`}
                        ></CardLivro2>
                    </a>
                </div>
            </div>
        </div>
    );
}

