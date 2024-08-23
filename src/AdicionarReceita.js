import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addReceita, fetchReceitas } from './api';
import './assets/estilo.css';


function AdicionarReceita() {
  const [titulo, setTitulo] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [modoPreparo, setModoPreparo] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const novaReceita = {
      id: Date.now(), // Gerar um id único para a nova receita
      titulo,
      ingredientes,
      modoPreparo,
    };
    addReceita(novaReceita).then(() => {
      navigate('/');
    });
  };

  return (
    <div>
      <h1>Adicionar Nova Receita</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div>
          <label>Ingredientes:</label>
          <input
            type="text"
            value={ingredientes}
            onChange={(e) => setIngredientes(e.target.value)}
          />
        </div>
        <div>
          <label>Modo de Preparo:</label>
          <input
            type="text"
            value={modoPreparo}
            onChange={(e) => setModoPreparo(e.target.value)}
          />
        </div>
        <button type="submit">Adicionar Receita</button>
      </form>
    </div>
  );
}

export default AdicionarReceita;
