import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';


export default function SignUp() {
  return(

  <div className='sign-up'>
    <div className='container'>
      <div className='textLog'>
        <p>Log In</p>
      </div>
      <div className='info'>
      <input type="text" id="usuario" name="usuairo" placeholder='Usuario'/>
      <br></br>
      <input type="text" id="senha" name="senha" placeholder='Senha'/>
      </div>
      
      <button className='button'>Logar</button>
      
    </div>
  </div>
  )
}
