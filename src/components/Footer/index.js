/* eslint-disable linebreak-style */
import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/" rel="noopener" target="_blank">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        <p>
          Website criado por
          {' '}
          <a href="https://github.com/kkzamai/" rel="noopener" target="_blank">Kristiany Kukert Zamai</a>
          {' '}
          durante a
          {' '}
          <a href="https://www.alura.com.br/" rel="noopener" target="_blank">
            Imersão React da Alura
          </a>
        </p>
      </p>
    </FooterBase>
  );
}

export default Footer;
