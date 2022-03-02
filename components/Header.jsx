import React, { useContext } from 'react'
import Link from 'next/link';


const categorias = [{ nome: 'Terror', links: 'terror' }, { nome: 'Ação', links: 'acao' }]

const Header = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-blue-400 py-8'>
        <div className='md:float-left block'>
          <Link rel="stylesheet" href="/">
            <span className='cursor-pointer font-bold text-4xl text-white'>
              Blog Horror
            </span>
          </Link>
        </div>
        <div className='hidden md:float-left md:contents'>
          {categorias.map((categorias) => (
            <Link key={categorias.links} href={`/categorias/${categorias.links}`}>
              <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                {categorias.nome}
              </span>
            </Link>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Header