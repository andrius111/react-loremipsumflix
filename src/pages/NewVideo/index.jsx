import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Template from '../../components/Template';
import useForm from '../../hooks/useForm';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

import videoRepository from '../../repositories/video';
import categoryRepository from '../../repositories/category';

const NewVideo = () => {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ titulo }) => titulo);
  const { formValues, handleChange } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoryRepository
      .getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);

  return (
    <Template>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categories.find((category) => (
          category.titulo === formValues.categoria
        ));

        videoRepository.create({
          titulo: formValues.titulo,
          url: formValues.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            // eslint-disable-next-line no-console
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={formValues.titulo}
          handleChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={formValues.url}
          handleChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={formValues.categoria}
          handleChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit" style={{ backgroundColor: '#000' }}>
          Cadastrar
        </Button>
      </form>

      <br />
      <br />

      <Link to="/new/category">
        Cadastrar Categoria
      </Link>
    </Template>
  );
};

export default NewVideo;
