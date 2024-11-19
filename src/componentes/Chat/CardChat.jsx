import React, { useState } from 'react';
import css from "./CardChat.module.css"

function CardChat() {
    const [formData, setFormData] = useState({
        nome: '',
        editora: '',
        data_lancamento: '',
        categoria: '',
        descricao: '',
        foto: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            foto: e.target.files[0],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        });

        try {
            const response = await fetch('http://127.0.0.1:5000/sugestao', {
                method: 'POST',
                body: data,
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvIjo3fQ.7ANUifA_sGGazFILcDvur9TNDeNcnZtx3ZT13RLBS9Q',
                },
            });
            const result = await response.json();
            console.log('Sucesso:', result);
            alert('Sugestão cadastrada com sucesso!');
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao cadastrar sugestão.');
        }
    };

    return (
        <div className={css.areaCard}>
                <form className={css.dividirCard} onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className={css.esquerda}>
                        <i className={css.icone + " fa-solid fa-file-circle-plus"}></i>
                        <input className={css.carregaImgs}
                               type="file"
                               id="foto"
                               name="foto"
                               accept="image/*"
                               onChange={handleFileChange}
                               required
                        />
                    </div>

                    <div className={css.direita}>
                        <div>
                            <label className={css.label} htmlFor="nome">Nome:</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label className={css.label} htmlFor="editora">Editora:</label>
                            <input
                                type="text"
                                id="editora"
                                name="editora"
                                value={formData.editora}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label className={css.label} htmlFor="data_lancamento">Lançamento:</label>
                            <input
                                type="date"
                                id="data_lancamento"
                                name="data_lancamento"
                                value={formData.data_lancamento}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label className={css.label} htmlFor="categoria">Categoria:</label>
                            <select
                                id="categoria"
                                name="categoria"
                                value={formData.categoria}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Selecione...</option>
                                <option value="1">Livro</option>
                                <option value="2">Jogo</option>
                                <option value="3">Foto</option>
                            </select>
                        </div>

                        <div>
                            <label className={css.label} htmlFor="descricao">Descrição:</label>
                            <textarea
                                id="descricao"
                                name="descricao"
                                value={formData.descricao}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Enviar</button>
                    </div>
                </form>
        </div>
    );
}

export default CardChat;