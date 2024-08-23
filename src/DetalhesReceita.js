import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReceitas } from './api';
import './assets/estilo.css';


function DetalhesReceita() {
  const { id } = useParams();
  const [receita, setReceita] = useState(null);

  useEffect(() => {
    fetchReceitas().then(data => {
      const receita = data.find(r => r.id === parseInt(id));
      setReceita(receita);
    });
  }, [id]);

  if (!receita) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{receita.titulo}</h1>
      <p><strong>Ingredientes:</strong> {receita.ingredientes}</p>
      <p><strong>Modo de Preparo:</strong> {receita.modoPreparo}</p>
    </div>
  );
}

export default DetalhesReceita;
