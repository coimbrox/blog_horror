import React from 'react'

import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => {
  console.log(post)
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className="relative iverflow-hidden shadow-md pb-80 mb-6">
        <img src={post.imagem.url} alt={post.titulo} className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg' />
      </div>
      <h1 className='transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold'>
        <Link href={`/post/${post.link}`} >
          {post.titulo}
        </Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lb:mb-0 w-full lg:w-auto mr-8">
          <img alt={post.autor.nome}
            height='30px'
            width='30px'
            className='aling-middle rounded-full'
            src={post.autor.foto.url} />
        </div>
      </div>
    </div>
  )
}

export default PostCard