import React from 'react'

import './Home.css'
//Imgaes
import Design from '../images/Group 41.png'
import Button from '../../components/Button/Button'
import Finn from '../images/finn-hora.png'
import WW from '../images/W-W.png'

//FrmInicio

function Home() {
  return (
    <header> 
      <div className='heade'>
        <img className='banner-image-home' src={Design} alt='banner'></img>
        <div className='banner-right'>
          <Button to="/login" text="Entrar"/>
          <div className='banner-text'>
            <h2 className='text1'>SEUS FILMES E SERIES FAVORITOS</h2>
            <h3 className='text2'>Onde quiser, em um so lugar!</h3>
            <div className='banner-linha'></div>
            <div className='banner-text2'><p className='text3'>A partir de R$10,90</p><p className='mes'> /mes</p></div>
            <div className='banner-button'>
              <Button to="/" text="Assine Agora"/>
              <p className='text4'>Consulte as condições e politicas de compra e uso.</p>

            </div>
          </div>
        </div>
      </div>

      <section className='Im-1F'>
        <img  src={Finn} alt="imagem"></img>
        <div className='Im-1FITX'>
        <h2 >Desenhos novos e os clássicos da sua infancia</h2>
        <p className='Im-1FIp'>Conteudo para crianças e adolecentes, diversão para toda a familia disponivel 24hrs.</p>
        </div> 

      </section>
      <div className='line'></div>
      <section className='Im-2WW'>
        <div className='Im-2WWTX'>
         <h2 >Maratone suas series favoritas sem parar</h2>
         <p className='Im-2WWp'>Player automatico no final de cada episodio, conteudos personalizados.</p>
        </div>
        <img  src={WW} alt="imagem2"></img>     
      </section>

    </header>


  )
}

export default Home