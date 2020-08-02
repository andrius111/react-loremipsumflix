import config from '../config';

const CATEGORY_URL = `${config.BASE_URL}/categorias`;

const getAll = () => (
  fetch(`${CATEGORY_URL}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    })
);

const getAllWithVideos = () => (
  fetch(`${CATEGORY_URL}?_embed=videos`).then(async (response) => {
    if (response.ok) {
      const data = await response.json();

      return data;
    }

    throw new Error('Não foi possível obter os dados.');
  })
);

export default {
  getAllWithVideos,
  getAll,
};
