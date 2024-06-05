import SideBar from '@/app/components/SideBar'
import SideBarUsuario from '@/app/components/SideBarUsuario'
import React from 'react'
import fotoPerfil from '@/app/components/Imagens/fotoPerfil.jpeg'
import Image from 'next/image'

function page() {
  return (
    <>
    <div className='w-screen h-screen flex'>
        <SideBar></SideBar>

        <div className='w-[30vw] h-[70vh] border-2 border-gray-300 flex flex-col m-auto'>
            <SideBarUsuario texto = 'Usuario' imagem = {fotoPerfil}></SideBarUsuario>
            <Image className='w-[20vw] h-[50vh] mt-4 mx-auto' alt=''></Image>
        </div>
   </div>
   </> 


  )
}

export default page