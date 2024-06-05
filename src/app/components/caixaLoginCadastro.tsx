import React, { Children } from 'react'

function CaixaLoginCadastro({children}:any) {
  return (
    <div className="w-[20vw] h-[70vh] bg-white rounded-xl flex items-center justify-center flex-col 
    gap-8 shadow-2xl shadow-black overflow-y-auto py-8">
        {children}
    </div>
  )
}

export default CaixaLoginCadastro