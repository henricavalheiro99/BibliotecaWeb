import css from "./GaleriaIndividual.module.css"
import Header from "../componentes/Header";
import React from "react";
import ImagensHover from "../componentes/Home/ImagensHover";

export default function GaleriaIndividual(){
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
            <div className={css.linha1}>
                <p className={css.textoPreto}><span className={css.textoRoxo}>Curso: </span>Técnico em desenvolvimento
                    de sistemas</p>
                <p className={css.textoPreto}><span className={css.textoRoxo}>Ano: </span>2023 e 2024</p>
                <i className="fa-solid fa-rotate-left"
                   style={{color: "#6A3CF7", fontSize: "40px", cursor: "pointer"}}></i>
            </div>
            <div className={css.linha2}>
                <ImagensHover imagem={`url(./carrossel4.png)`} descricao={"Estamos conversando animadamente na biblioteca, cercados por livros e um ambiente acolhedor"}></ImagensHover>
                <ImagensHover imagem={`url(./carrossel5.png)`} descricao={"Estamos conversando animadamente na biblioteca, cercados por livros e um ambiente acolhedor"}></ImagensHover>
                <ImagensHover imagem={`url(./carrossel6.png)`} descricao={"Estamos conversando animadamente na biblioteca, cercados por livros e um ambiente acolhedor"}></ImagensHover>
            </div>
            <div className={css.linha2}>
                <ImagensHover imagem={`url(./carrossel6.png)`} descricao={"Estamos conversando animadamente na biblioteca, cercados por livros e um ambiente acolhedor"}></ImagensHover>
                <ImagensHover imagem={`url(./carrossel5.png)`} descricao={"Estamos conversando animadamente na biblioteca, cercados por livros e um ambiente acolhedor"}></ImagensHover>
                <ImagensHover imagem={`url(./carrossel4.png)`} descricao={"Estamos conversando animadamente na biblioteca, cercados por livros e um ambiente acolhedor"}></ImagensHover>
            </div>
        </div>
    );
}