import css from "./GaleriaIndividual.module.css"
import Header from "../componentes/Header";
import React, {useEffect, useState} from "react";
import ImagensHover from "../componentes/Home/ImagensHover";
import CardLivro2 from "../componentes/CardLivro2";

export default function GaleriaIndividual(){
    const [foto, setFoto] = useState([])


    useEffect(() => {
        async function busca() {
            fetch("http://127.0.0.1:5000/fotos_inf",{
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then((resp) => resp.json())
                .then(function (data) {
                    console.log(data)
                    setFoto(data.fotos)
                } )
        }

        busca()
    }, []);



    return(
        <div className={css.main + ' container-fluid'}>
            <div style={{backgroundImage: `url(./background-teste.png)`}} className={css.blocoSec1}>
                <div className={css.details}>
                    <Header
                        redireciona1={"./Chat"}
                        redireciona2={"./home"}
                        redireciona3={"./paginalivros"}
                        redireciona4={"./Perfil"}
                        icone1={"fa-comments"}
                        icone2={"fa-house"}
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
                {foto?.map((fotos) => (
                    <ImagensHover
                        imagem={`url(http://127.0.0.1:5000/static/uploads/galeria/${fotos.id_fotos}.jpg)`}
                        descricao={fotos.descricao}
                    ></ImagensHover>

                ))}
            </div>

        </div>
    );
}