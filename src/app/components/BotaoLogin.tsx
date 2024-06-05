import Link from 'next/link'
import React from 'react'
import Cadastro from '../(pages)/cadastro/page'

function BotaoLogin() {
  return (
    <Link href={"/cadastro"}>
        <button className='w-[15vw] h-[5vh] leading-[5vh] rounded-xl text-center bg-blue-500 bold mt-8 font-bold 
         text-white hover:bg-blue-600'>Logar</button>
    </Link>

  )
}

export default BotaoLogin