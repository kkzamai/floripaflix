/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {

  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoriasRepository.getAll()
      .then((categoriasDB) => {
        console.log(categoriasDB);
        setCategorias([...categoriasDB]);
      })
      .catch((err) => {
        // tratar essa saída de erro
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();

        categoriasRepository.create({
          titulo: values.titulo,
          cor: values.cor,
          link_extra: { text: '', url: '' },
        })
          .then(() => {
            setCategorias([...categorias, values]);
            console.log('Cadastrou categoria com sucesso!');
          });
      }}
      >
        <div>
          <FormField
            label="Nome da Categoria"
            type="text"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            type="text"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />

          <Button type="submit">
            Cadastrar
          </Button>
        </div>
      </form>

      {categorias.length === 0
        && (
        <div>
          {/* Carregando.. */}
          Loading
        </div>
        )}
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>{categoria.titulo}</li>
        ))}
      </ul>
      <p>
        <Link to="/">
          Ir para home
        </Link>
      </p>
      <p>
        <Link to="/cadastro/video">
          Ir para Cadastro de Vídeo
        </Link>
      </p>

    </PageDefault>
  );
}

export default CadastroCategoria;
