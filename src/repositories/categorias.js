/* eslint-disable linebreak-style */
import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      //o certo é pegar o erro vindo api e não o throw passar
      // para a View e ela tomar a decisão para o erro que veio
      throw new Error('Não foi possível pegar os dados:');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      //o certo é pegar o erro vindo api e não o throw passar
      // para a View e ela tomar a decisão para o erro que veio
      throw new Error('Não foi possível pegar os dados:');
    });
}

function create(objetoDaCategoria) {
  return fetch(`${URL_CATEGORIES}?_embed=categorias`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDaCategoria),
  })
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível cadastrar a categoria');
    });
}

export default {
  getAllWithVideos,
  getAll,
  create,
};
