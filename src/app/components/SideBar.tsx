import React from 'react'
import NomeApp from './NomeApp'
import SideBarButtons from './SideBarButtons'
import iconeHome from '@/app/components/Imagens/iconeHome.jpeg'
import iconePesquisar from '@/app/components/Imagens/iconePesquisar.png'
import iconeNotificacoes from '@/app/components/Imagens/iconeNotificacao.png'
import iconePerfil from '@/app/components/Imagens/iconePerfil.png'
import fotoPerfil from '@/app/components/Imagens/fotoPerfil.jpeg'
import LinhaSeparacao from './LinhaSeparacao'
import Usuario from './Usuario'

function SideBar() {
  return (

    <div className="w-[18vw] h-screen border-r-2 border-gray-300 flex flex-col p-9 gap-y-10 overflow-y-auto">
        <NomeApp></NomeApp>
        <div className='mt-4'></div>
        <SideBarButtons texto = "Home" imagem = {iconeHome} link = "/index"></SideBarButtons>
        <SideBarButtons texto = "Notificações" imagem = {iconeNotificacoes} link = "#"></SideBarButtons>
        <SideBarButtons texto = "Perfil" imagem = {iconePerfil} link = "#"></SideBarButtons>
        <div className='mt-75'></div>
        <LinhaSeparacao tamanho = "16vw"></LinhaSeparacao>
        <Usuario texto = 'Usuario' imagem = {fotoPerfil}></Usuario>
        <div>emailUsuario@gmail.com</div>

    </div>
  )
}

export default SideBar