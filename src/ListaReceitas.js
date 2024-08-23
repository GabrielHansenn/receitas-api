import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchReceitas } from './api';
import './assets/estilo.css';


function ListaReceitas() {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    fetchReceitas().then(data => setReceitas(data));
  }, []);

  return (
    <div id='box-lista'>
      <h1>Lista de Receitas</h1>
      <ul id='receitas-lista'>
        {receitas.map(receita => (
          <li key={receita.id}>
            <Link to={`/receita/${receita.id}`}>{receita.titulo}</Link>
          </li>
        ))}
      </ul>
      <Link id='adicionar-receita' to="/adicionar">Adicionar Nova Receita</Link>
    </div>
  );
}

export default ListaReceitas;
