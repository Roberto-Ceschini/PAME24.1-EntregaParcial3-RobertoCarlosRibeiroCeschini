import React from 'react'
import Image from 'next/image'

function Usuario({ texto, imagem}: any) {
    return (

        <>
            <button className='w-[13vw] h-7 bg-slate-100 hover:bg-slate-300 hover:text-white flex items-center 
        rounded-md font-medium indent-3 py-5 mb-4'>
                <Image className='w-20 h-20 rounded-full -ml-3' src={imagem} alt=''></Image>
                {texto}
            </button>
        </>

    )
}

export default Usuario