import Header from "../componentes/Header";
import css from "./Perfil.module.css";
import React, { useState } from 'react';
import Banner from "../componentes/Home/Banner";


export default function Perfil() {
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState({
        name: 'Fulano Cipriano',
        email: 'fulano@gmail.com',
        password: 'fulano@gmail.com',
    });

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className={css.main + ' container-fluid'}>
            <div style={{backgroundImage: `url(./background-teste.png)`}} className={css.blocoSec1}>
                <div className={css.details}>
                    <Header
                        redireciona1={"./chat"}
                        redireciona2={"./galeria"}
                        redireciona3={"./paginalivros"}
                        redireciona4={"./home"}
                        icone1={"fa-comments"}
                        icone2={"fa-image"}
                        icone3={"fa-book"}
                        icone4={"fa-house"}
                    ></Header>
                </div>
            </div>
            <p className={css.titlePerfil}>Perfil</p>
            <div className={css.alinharQuadro}>
                <div className={css.profilecontainer}>
                    {!isEditing ? (
                        <div className={css.profileview}>
                            <div className={css.divTudo}>
                                <div className={css.esquerda}>
                                    <div className={css.circuloFoto}></div>
                                    <button className={css.botaoFoto}>Trocar foto</button>
                                </div>
                                <div className={css.direita}>
                                    <p className={css.textoEdicao}><strong>Nome:</strong> {userData.name}</p>
                                    <p className={css.textoEdicao}><strong>Email:</strong> {userData.email}</p>
                                    <p className={css.textoEdicao}><strong>Senha:</strong> {userData.password}</p>
                                    <button className={css.botaoEditar} onClick={handleEditClick}>
                                        Editar informações
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={css.profileedit}>
                            <div className={css.profilecontent}>
                                <div className={css.profileinfo}>
                                    <label>Nome:</label>
                                    <input className={css.inputPerfil}
                                        type="text"
                                        name="name"
                                        value={userData.name}
                                        onChange={handleChange}
                                    />
                                    <label>Email:</label>
                                    <input className={css.inputPerfil}
                                        type="email"
                                        name="email"
                                        value={userData.email}
                                        onChange={handleChange}
                                    />
                                    <label>Senha:</label>
                                    <input className={css.inputPerfil}
                                        type="password"
                                        name="password"
                                        value={userData.password}
                                        onChange={handleChange}
                                    />
                                    <div className={css.buttongroup}>
                                        <button className={css.saveButton} onClick={handleSaveClick}>
                                            Salvar
                                        </button>
                                        <button className={css.backButton} onClick={() => setIsEditing(false)}>
                                            Voltar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}