import React from 'react'

function LinhaSeparacao({ tamanho }: any) {
    return (
      <div className={`w-[${tamanho}] border-t border-gray-200 mt-4`}></div>
    );
  }
  
  export default LinhaSeparacao;
  