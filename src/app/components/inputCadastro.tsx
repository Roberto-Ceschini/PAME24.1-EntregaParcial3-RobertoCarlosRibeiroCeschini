import React from 'react'

function InputCadastro({texto, tipo}:any) {
  return (
    <input className='w-[15vw] h-[5vh] indent-3 border-2 ' placeholder = {texto} type = {tipo}></input>
  )
}

export default InputCadastro