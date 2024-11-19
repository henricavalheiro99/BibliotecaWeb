import React, { useState } from 'react';

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
        <div>
            <h1>Cadastro de Sugestão</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <label htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                /><br /><br />

                <label htmlFor="editora">Editora:</label>
                <input
                    type="text"
                    id="editora"
                    name="editora"
                    value={formData.editora}
                    onChange={handleChange}
                    required
                /><br /><br />

                <label htmlFor="data_lancamento">Data de Lançamento:</label>
                <input
                    type="date"
                    id="data_lancamento"
                    name="data_lancamento"
                    value={formData.data_lancamento}
                    onChange={handleChange}
                    required
                /><br /><br />

                <label htmlFor="categoria">Categoria:</label>
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
                </select><br /><br />

                <label htmlFor="descricao">Descrição:</label>
                <textarea
                    id="descricao"
                    name="descricao"
                    value={formData.descricao}
                    onChange={handleChange}
                    required
                ></textarea><br /><br />

                <label htmlFor="foto">Foto (Imagem da Sugestão):</label>
                <input
                    type="file"
                    id="foto"
                    name="foto"
                    accept="image/*"
                    onChange={handleFileChange}
                    required
                /><br /><br />

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default CardChat;