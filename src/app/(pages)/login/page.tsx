import { Input } from 'postcss'
import React from 'react'
import InputCadastro from '@/app/components/inputCadastro'
import BotaoLogin from '@/app/components/BotaoLogin'
import Link from 'next/link'
import LoginCom from '@/app/components/LoginCom'
import Image from 'next/image'
import appleImage from '@/app/components/Imagens/logoApple.png'
import googleImage from '@/app/components/Imagens/logoGoogle.png'

function Login() {
  return (
    
    <div className=" w-screen h-screen bg-gradient-to-t from-rose-300 to-blue-300 flex items-center justify-center">
        <div className="w-[20vw] h-[70vh] bg-white rounded-xl flex items-center justify-center flex-col 
        gap-8 shadow-2xl shadow-black">

            <div className='font-bold  mb-6 text-3xl'> Nome App</div>
            <InputCadastro texto = "Digite seu email" tipo = "text"></InputCadastro>
            <InputCadastro texto = "Digite sua senha" tipo = "password"></InputCadastro>

            <div className='w-[15vw] flex justify-end -mt-7'>
                <Link href={"#"}>
                    <button className="text-sm hover:underline text-blue-600">Esqueceu sua senha?</button>
                </Link>
            </div>
            <BotaoLogin></BotaoLogin>

            <div className='w-[17vw] border-t border-gray-200 mt-4'></div>

            <div className='w-[10vw] flex justify-center flex-col'>
                <div className='w-[10vw] flex justify-start mb-3'>
                    <Image className="w-5 h-5 mr-4 mt-1" src={appleImage}></Image>
                    <LoginCom texto = "Login com Apple"></LoginCom>
                </div>
                <div className='w-[10vw] flex justify-start'>
                    <Image className="w-5 h-5 mr-4 mt-0.5" src={googleImage}></Image>
                    <LoginCom texto = "Login com Google"></LoginCom>
                </div>

            </div>
        </div>
    </div> 
  )
}

export default Login