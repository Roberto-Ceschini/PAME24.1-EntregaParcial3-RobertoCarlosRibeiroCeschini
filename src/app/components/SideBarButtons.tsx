import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function SideBarButtons({texto, imagem, link}:any) {
  return (
    <Link href={link}>
        <button className='w-[11vw] h-7 bg-slate-100 hover:bg-slate-300 hover:text-white flex items-center justify-evenly rounded-md overflow-hidden p-5 indent-10
        font-medium'>
            <Image className ='w-6 h-6 -mr-5'src ={imagem} alt=''></Image>
            {texto}
        </button>
    </Link>
  )
}

export default SideBarButtons