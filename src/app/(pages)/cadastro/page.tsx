import NomeApp from '@/app/components/NomeApp'
import CaixaLoginCadastro from '@/app/components/caixaLoginCadastro'
import InputCadastro from '@/app/components/inputCadastro'
import React from 'react'
import appleImage from '@/app/components/Imagens/logoApple.png'
import googleImage from '@/app/components/Imagens/logoGoogle.png'
import Link from 'next/link'
import Image from 'next/image'
import LoginCom from '@/app/components/LoginCom'
import LinhaSeparacao from '@/app/components/LinhaSeparacao'
import BotaoLogin from '@/app/components/BotaoLogin'



function Cadastro() {
  return (
    <div className="w-screen h-screen bg-gradient-to-t from-slate-400 to-slate-700 flex items-center justify-center">
      <CaixaLoginCadastro>
        <NomeApp></NomeApp>
        <InputCadastro texto="Digite seu email" tipo="text"></InputCadastro>
        <InputCadastro texto="Crie uma senha" tipo="password"></InputCadastro>
        <InputCadastro texto="Repita a senha" tipo="password"></InputCadastro>
        <InputCadastro texto="UserName" tipo="text"></InputCadastro>

        <LinhaSeparacao tamanho = "17vw"></LinhaSeparacao>
        
        <div className='w-[15vw] flex justify-center items-center flex-col'>
          <Link className='w-[10vw] flex justify-start mb-3' href={"#"}>
            <Image className="w-5 h-5 mr-4 mt-1" src={appleImage} alt={''}></Image>
            <LoginCom texto= "Cadastrar com Apple" imagem={appleImage}></LoginCom>
          </Link>

          <Link className='w-[10vw] flex justify-start' href={"#"}>
            <Image className="w-5 h-5 mr-4 mt-0.5" src={googleImage} alt={''}></Image>
            <LoginCom texto="Cadastrar com Google"></LoginCom>
          </Link>
        </div>

        <BotaoLogin texto={"Cadastrar"} link={"/login"}></BotaoLogin>
      
      </CaixaLoginCadastro>

    </div>
  )
}

export default Cadastro 