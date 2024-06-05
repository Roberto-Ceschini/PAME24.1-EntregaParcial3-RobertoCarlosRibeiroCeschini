import { Input } from 'postcss'
import React, { Children } from 'react'
import InputCadastro from '@/app/components/inputCadastro'
import BotaoLogin from '@/app/components/BotaoLogin'
import Link from 'next/link'
import LoginCom from '@/app/components/LoginCom'
import Image from 'next/image'
import appleImage from '@/app/components/Imagens/logoApple.png'
import googleImage from '@/app/components/Imagens/logoGoogle.png'
import CaixaLoginCadastro from '@/app/components/caixaLoginCadastro'
import NomeApp from '@/app/components/NomeApp'
import LinhaSeparacao from '@/app/components/LinhaSeparacao'

function Login() {
  return (
    
    <div className="w-screen h-screen bg-gradient-to-t from-rose-300 to-blue-300 flex items-center justify-center">
        <CaixaLoginCadastro>
            <NomeApp></NomeApp>
            <InputCadastro texto = "Digite seu email" tipo = "text"></InputCadastro>
            <InputCadastro texto = "Digite sua senha" tipo = "password"></InputCadastro>

            <div className='w-[15vw] flex justify-end -mt-7'>
                <Link href={"#"}>
                    <button className="text-sm hover:underline text-blue-600">Esqueceu sua senha?</button>
                </Link>
            </div>

            <BotaoLogin texto={"Logar"} link={"/index"}></BotaoLogin>
            <LinhaSeparacao tamanho = "17vw"></LinhaSeparacao>

            <div className='w-[15vw] flex justify-center items-center flex-col'>

                    <Link className='w-[10vw] flex justify-start mb-3' href={"#"}>
                        <Image className="w-5 h-5 mr-4 mt-1" src={appleImage} alt={''}></Image>
                        <LoginCom texto = "Login com Apple" imagem = {appleImage}></LoginCom>
                    </Link>

                    <Link className='w-[10vw] flex justify-start' href={"#"}>
                        <Image className="w-5 h-5 mr-4 mt-0.5" src={googleImage} alt={''}></Image>
                        <LoginCom texto = "Login com Google"></LoginCom>
                    </Link>
            </div>

            <div className=' text-xs mt-4 flex justify-center items-center gap-x-1'>Não tem uma conta?
                <Link href={"/cadastro"} className=' font-semibold text-blue-400 hover:underline hover:text-blue-600'>
                    Crie uma
                </Link>
            </div>
        </CaixaLoginCadastro>
    </div> 
  )
}

export default Login