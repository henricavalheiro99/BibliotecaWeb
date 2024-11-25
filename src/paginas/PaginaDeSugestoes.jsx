import css from "./PaginaDeLivros.module.css";
import Header from "../componentes/Header";
import React, {useEffect, useState} from "react";
import CardLivro2 from "../componentes/CardLivro2";

export default function PaginaDeSugestoes(){
    const [sugestoes, setSugestoes] = useState([])

    useEffect(() => {
        async function busca() {
            fetch("http://127.0.0.1:5000/sugestao_inf",{
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then((resp) => resp.json())
                .then(function (data) {
                    console.log(data)
                    setSugestoes(data.sugestao)
                } )
        }

        busca()
    }, []);


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
            <div className={css.linha1}>
                <p className={css.title}>Veja as sugestões dos outros usuario!</p>
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
                            <i className="fa-regular fa-paper-plane"
                               style={{fontSize: "25px", color: "white", padding: "10px"}}></i>
                        </div>
                    </div>
                </div>
                <button className={css.Btn}>Filtrar</button>
            </div>
            <div className={css.ContainerMain}>
                <h1 style={{fontSize: "xx-large", color: "black", fontWeight: 800}}>Sugestões de outros usuarios !!</h1>
                <div className={css.divContainer}>
                    {sugestoes.map((sugestao) => (
                        <a style={{textDecoration: "none"}} href={"/livroespecifico/" + sugestao.id_sugestao}>
                            <CardLivro2
                                nome={sugestao.titulo}
                                genero={sugestao.genero}
                                autor={sugestao.autor}
                                imagem={`url(http://127.0.0.1:5000/static/uploads/sugestao/${sugestao.id_sugestao}.jpg)`}
                            ></CardLivro2>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}