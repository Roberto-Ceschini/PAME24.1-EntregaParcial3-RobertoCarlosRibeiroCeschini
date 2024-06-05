import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function LoginCom({imagem, texto}:any) {
  return (
        <button className=' px-2 rounded-full text-blue-400 font-bold text-xs hover:text-blue-600 hover:bg-gray-100'>
          {texto}
        </button>
  )
}

export default LoginCom