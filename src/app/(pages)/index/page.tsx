import SideBar from '@/app/components/SideBar'
import Usuario from '@/app/components/Usuario'
import React from 'react'
import fotoPerfil from '@/app/components/Imagens/fotoPerfil.jpeg'
import Image from 'next/image'
import postagem1 from '@/app/components/Imagens/postagem1.jpeg'
import iconeComentar from '@/app/components/Imagens/iconeComentar.png'
import iconeCompartilhar from '@/app/components/Imagens/iconeCompartilhar.png'
import iconeCurtida from '@/app/components/Imagens/iconeCurtida.png'
import LinhaSeparacao from '@/app/components/LinhaSeparacao'
import iconePesquisar from '@/app/components/Imagens/iconePesquisar.png'

function page() {
  return (

    <div className='w-screen h-screen flex'>

       <div className='fixed'> <SideBar></SideBar></div>{/*SideBar*/}

        {/*Area de Postagens*/}
        
        <div className=' mt-10 flex flex-col justify-center m-auto p-6 gap-y-10'>{/*Area Principal*/}
            
        <div className='w-[15vw] flex justify-start' >{/*Area Pesquisa*/}

            <input className='w-[15vw] h-[5vh] indent-3 border-2' placeholder='Buscar'></input>
            <Image className="w-12 h-[5vh] mr-4" src={iconePesquisar} alt={''}></Image>
            
        </div>

            {/*Postagem 1*/}
            <div className='w-[30vw] h-[80vh] border-b-2 border-gray-300 flex flex-col justify-center m-auto'>
                <Usuario texto = 'Usuario' imagem = {fotoPerfil}></Usuario>{/*Perfil de quem postou*/}

                <Image className='w-[20vw] h-[50vh] mt-4 mx-auto object-contain bg-black' alt='' src={postagem1}></Image>{/*Post*/}

                <div className='w-[20vw] h-[3vh] mx-auto mt-2 flex items-center gap-x-6 '> {/*Botoes Curtir/comentae/compartilhar*/}
                    <button className='hover:opacity-25'>
                        <Image className='w-7 h-7' alt='' src={iconeComentar}></Image>
                    </button>
                    <button className='hover:opacity-25'>
                        <Image className='w-9 h-7' alt='' src={iconeCompartilhar}></Image>
                    </button>
                    <button className='hover:opacity-25'>
                        <Image className='w-10 h-7' alt='' src={iconeCurtida}></Image>
                    </button>
                </div>

                <div className='w-[20vw] h-[10vh] mx-auto mt-2 flex items-center overflow-y-auto'>{/*Texto Postagem*/}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis
                </div>   
            </div>{/*Fim Postagem 1*/}

            {/*Postagem 2*/}
            <div className='w-[30vw] h-[80vh] border-b-2 border-gray-300 flex flex-col justify-center m-auto'>
                <Usuario texto = 'Usuario' imagem = {fotoPerfil}></Usuario>{/*Perfil de quem postou*/}

                <Image className='w-[20vw] h-[50vh] mt-4 mx-auto object-contain bg-black' alt='' src={postagem1}></Image>{/*Post*/}

                <div className='w-[20vw] h-[3vh] mx-auto mt-2 flex items-center gap-x-6 '> {/*Botoes Curtir/comentae/compartilhar*/}
                    <button className='hover:opacity-25'>
                        <Image className='w-7 h-7' alt='' src={iconeComentar}></Image>
                    </button>
                    <button className='hover:opacity-25'>
                        <Image className='w-9 h-7' alt='' src={iconeCompartilhar}></Image>
                    </button>
                    <button className='hover:opacity-25'>
                        <Image className='w-10 h-7' alt='' src={iconeCurtida}></Image>
                    </button>
                </div>

                <div className='w-[20vw] h-[10vh] mx-auto mt-2 flex items-center overflow-y-auto'>{/*Texto Postagem*/}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis
                </div>   
            </div> {/* Fim Postagem 2*/}

            {/*Postagem 3*/}
            <div className='w-[30vw] h-[80vh] border-b-2 border-gray-300 flex flex-col justify-center m-auto'>
                <Usuario texto = 'Usuario' imagem = {fotoPerfil}></Usuario>{/*Perfil de quem postou*/}

                <Image className='w-[20vw] h-[50vh] mt-4 mx-auto object-contain bg-black' alt='' src={postagem1}></Image>{/*Post*/}

                <div className='w-[20vw] h-[3vh] mx-auto mt-2 flex items-center gap-x-6 '> {/*Botoes Curtir/comentae/compartilhar*/}
                    <button className='hover:opacity-25'>
                        <Image className='w-7 h-7' alt='' src={iconeComentar}></Image>
                    </button>
                    <button className='hover:opacity-25'>
                        <Image className='w-9 h-7' alt='' src={iconeCompartilhar}></Image>
                    </button>
                    <button className='hover:opacity-25'>
                        <Image className='w-10 h-7' alt='' src={iconeCurtida}></Image>
                    </button>
                </div>

                <div className='w-[20vw] h-[10vh] mx-auto mt-2 flex items-center overflow-y-auto'>{/*Texto Postagem*/}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis
                </div>   
            </div>{/*Fim Postagem 3*/}

        </div>
    
    </div>



  )
}

export default page