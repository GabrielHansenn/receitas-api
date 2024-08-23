import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListaReceitas from './ListaReceitas';
import DetalhesReceita from './DetalhesReceita';
import AdicionarReceita from './AdicionarReceita';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListaReceitas />} />
        <Route path="/receita/:id" element={<DetalhesReceita />} />
        <Route path="/adicionar" element={<AdicionarReceita />} />
      </Routes>
    </Router>
  );
}

export default App;
