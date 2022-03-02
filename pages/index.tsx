import Head from 'next/head'
import { PostCard, Categorias, PostWidget } from '../components'


const posts = [
  { titulo: 'Panico 5', excerpt: 'A Sequencia tão aguardada' },
  { titulo: 'Chainsaw Massacre', excerpt: 'A Sequencia tão aguardada' },
]


const Home = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Blog Horror</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>

        <div className="lg:col-span-8 col-span-1" >
          {posts.map((post) => (
            <PostCard post={post} key={post.titulo} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">

          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categorias />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
