import config from '../config';

const VIDEO_URL = `${config.BASE_URL}/videos`;

const create = (videoObject) => (
  fetch(`${VIDEO_URL}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(videoObject),
  })
    .then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();
        return resposta;
      }

      throw new Error('Não foi possível cadastrar o video.');
    })
);

export default {
  create,
};
