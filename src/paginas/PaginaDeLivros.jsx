import css from "./PaginaDeLivros.module.css"
import Header from "../componentes/Header";
import {FaStar} from "react-icons/fa";
import React, {useEffect, useState} from "react";
import CardLivro2 from "../componentes/CardLivro2";


export default function PaginaDeLivros(){
    const [livros, setLivros] = useState([])

    useEffect(() => {
        async function busca() {
            fetch("http://127.0.0.1:5000/livros_inf",{
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then((resp) => resp.json())
                .then(function (data) {
                    console.log(data)
                    setLivros(data.livro)
                } )
        }

        busca()
    }, []);

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
                    {livros.map((livro) => (
                        <a style={{textDecoration: "none"}} href={"/livroespecifico/" + livro.id_livro}>
                            <CardLivro2
                                nome={livro.titulo}
                                genero={livro.genero}
                                autor={livro.autor}
                                imagem={`url(http://127.0.0.1:5000/static/uploads/livro/${livro.id_livro}.jpg)`}
                            ></CardLivro2>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

