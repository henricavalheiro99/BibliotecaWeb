import css from "./LivroEspecifico.module.css"
import React, {useContext, useEffect, useState} from 'react';
import { FaCommentDots, FaImage, FaHome, FaUserCircle } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import Header from "../componentes/Header";
import {Dados} from "../context/ApiContext";
import {salvaDados} from "../adapter/storage";
import Banner from "../componentes/Home/Banner";
import {useParams} from "react-router-dom";


export default function LivroEspecifico(){
    const {fetchData} = useContext(Dados)
    const [rating, setRating] = useState(0);
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [data_publicacao, setDataPublicacao] = useState("");
    const [genero, setGenero] = useState("");
    const [sinopse, setSinopse] = useState("");
    const { livroId } = useParams()

    const handleStarClick = (index) => {
        setRating(index);
    };

    useEffect(() => {
        async function wrap() {
            console.log("Props", livroId)
            let resp = await fetchData("/livros_especifico/" + livroId)
            console.log(resp)
            setAutor(resp.livro.autor)
            setDataPublicacao(resp.livro.data_publicacao)
            setGenero(resp.livro.genero)
            setSinopse(resp.livro.sinopse)
            setTitulo(resp.livro.titulo)
        }

        wrap()
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
            <a href={"/paginalivros"} className={css.iconRetorna}><i className="fa-solid fa-rotate-left"></i></a>
            <div className={css.restoPagina}>
                <div className={css.card}>
                    <div className={css.imgestrela}>
                        <img
                            src={"http://127.0.0.1:5000/static/uploads/" + livroId + ".jpg"}
                            alt="Diário de um Banana"
                            className={css.image}
                        />
                        <div className={css.containergio}>
                            <div className={css.estrelas}>
                                {[...Array(5)].map((star, index) => (
                                    <FaStar
                                        key={index}
                                        size={24}
                                        onClick={() => handleStarClick(index + 1)}
                                        className={index < rating ? css.starSelected : css.star}
                                    />
                                ))}
                            </div>
                            <p className={css.data}>Publicado: {data_publicacao}</p>
                        </div>
                    </div>

                        <div className={css.info}>
                            <h3 className={css.titulo}>{titulo}</h3>
                            <p className={css.autor}>por {autor}</p>
                            <div className={css.fundosinopse}>
                                <p className={css.sinopse}>{sinopse}</p>
                            </div>

                            <div className={css.buttons}>
                                <button className={css.button}>Avaliação</button>
                                <button className={css.button2}>Reservar</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}