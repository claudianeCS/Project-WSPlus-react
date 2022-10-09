import React from 'react'
import './Login.css'
import Logo from '../images/Logo 2 1.svg'
import detalhe from '../images/detalhe.svg'
import { Link } from 'react-router-dom'

function Login() {

  function alerta(){
    alert("Enviamos um formulario ao seu email!");
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);


    console.log('*** handleSubmit', data)
  }

  return (
    <div>
      <img className='logo' src={Logo} alt='logo'></img>
          <form onSubmit={handleSubmit}>
            <h2 className='text-login'>Login</h2>
            
            <input className='input-text' type="text" name="email" placeholder='Email ou usuário'/>
            <input className='input-text' type='password' name='senha' placeholder="Password"/>
            <a className='forgot' href='/login' onClick={alerta}>Esqueceu sua senha?</a>
            <div className='container-check'>
               <input type="checkbox"/><label className='check-text'>Lembrar senha</label>
            </div>
            <button className='button-login' type="submit" >Enviar</button>
            <Link className='button-login2' to="/cadastrar">Cadastre-se</Link>
          </form>     
      <img className='design-canto' src={detalhe} alt="detalhe"></img>
    </div>
  )
}

export default Login