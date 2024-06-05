import React from 'react'
import NomeApp from './NomeApp'
import SideBarButtons from './SideBarButtons'
import logoHome from '@/app/components/Imagens/iconeHome.jpeg'


function SideBar() {
  return (

    <div className="w-[18vw] h-screen border-r-2 border-gray-300 flex flex-col p-9 gap-y-4 overflow-y-auto">
        <NomeApp></NomeApp>
        <div className='mt-4'></div>
        <SideBarButtons texto = "Home" imagem = {logoHome} link = "/index"></SideBarButtons>
    </div>
  )
}

export default SideBar