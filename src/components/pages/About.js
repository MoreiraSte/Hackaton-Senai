import React from 'react';
import '../../App.css';

export default function About() {

 
  return (
      <div className='about'>
          <div className='information'>
            <p>
              Buscamos desenvolver para nossos clientes a proposta de
              desenvolvimento de software, com a proposta e objetivo de 
              gerenciar com eficiência a tecnologia sobre robôs, que busca
              efetivar e alcançar um futuro com um bom gerenciamento e 
              organização.            
            </p>
            
          </div>
          <div className='img_about'>
             <img className='imgAbout' src='/images/img_about.png' alt='img_about'/>
          </div>
      </div>
  );
}

