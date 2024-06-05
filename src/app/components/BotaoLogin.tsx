import Link from 'next/link'
import React from 'react'
import Cadastro from '../(pages)/cadastro/page'

function BotaoLogin({texto, link}:any) {
  return (
    <Link href={link}>
        <button className='w-[15vw] h-[5vh] leading-[5vh] rounded-xl text-center bg-blue-500 bold mt-8 font-bold 
         text-white hover:bg-blue-600'>{texto}</button>
    </Link>

  )
}

export default BotaoLogin