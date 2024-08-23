const receitasData = require('./data/receitas.json');

export const fetchReceitas = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(receitasData);
    }, 1000);
  });
};

export const addReceita = (novaReceita) => {
  receitasData.push(novaReceita);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(novaReceita);
    }, 1000);
  });
};
