import React from 'react'
import './Login.css'
import Logo from '../images/Logo 2 1.svg'
import detalhe from '../images/detalhe.svg'
import { useNavigate, Link} from 'react-router-dom'


function Login() {

  var navigate = useNavigate();


  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    const { email = 'Valor String', senha = "*" } = data;

    console.log(data)

     if(email === "teste@email.com" && senha === "123" ){
      navigate("/watch")
     } else {

      var div = document.getElementById("banner")
      div.innerHTML = "Usuario ou senha invalido!"
      document.getElementById("banner").setAttribute("class", "banner-atributo"); 
      document.getElementById("email").setAttribute("class", "banner-input")
      document.getElementById("senha").setAttribute("class", "banner-input")    
     }


  }


  return (
    <div>
      <img className='logo' src={Logo} alt='logo'></img>
          <form onSubmit={handleSubmit}>
            <h2 className='text-login'>Login</h2>
            
            <input className='input-text' type="text" id="email" name="email" placeholder='Email ou usuário'/>
            <div id='banner'></div>
            <input className='input-text' type='password' id="senha" name='senha' placeholder="Password"/>
            <a className='forgot' href='/login'>Esqueceu sua senha?</a>
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