import css from "./LivroEspecifico.module.css"
import React, { useState } from 'react';
import { FaCommentDots, FaImage, FaHome, FaUserCircle } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import Header from "../componentes/Header";
import Banner from "../componentes/Home/Banner";
export default function LivroEspecifico(){
        const [rating, setRating] = useState(0);

        const handleStarClick = (index) => {
            setRating(index);
        };
    return (
        <div className={css.main + ' container-fluid'}>
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
            <a href={"/paginalivros"} className={css.iconRetorna}><i className="fa-solid fa-rotate-left"></i></a>
            <div className={css.restoPagina}>
                <div className={css.card}>
                    <div className={css.imgestrela}>
                        <img
                            src="./img1.png"
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
                            <p className={css.data}>Publicado: 11 de março de 2021</p>
                        </div>
                    </div>

                        <div className={css.info}>
                            <h3 className={css.titulo}>Diário de um banana</h3>
                            <p className={css.autor}>por Jeff Kinney</p>
                            <div className={css.fundosinopse}>
                                <p className={css.sinopse}>
                                    Férias de verão: o tempo está lindo, e toda garotada está se divertindo ao ar livre.
                                    Onde
                                    está Greg Heffley? Dentro da sua casa, jogando videogame com as cortinas fechadas.
                                    Greg,
                                    um
                                    caseiro assumido, está vivendo sua última fantasia de verão: nada de
                                    responsabilidades e
                                    regras. Mas
                                    a mãe do Greg tem uma visão diferente para um verão ideal, muitas atividades fora de
                                    casa e
                                    união
                                    da família. Qual ponto de vista vai ganhar? Ou será que uma nova aquisição para a
                                    família
                                    Heffley pode mudar tudo?
                                </p>
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