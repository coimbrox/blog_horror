import Head from 'next/head'

const posts = [
  { titulo: 'Panico 5', excrept: 'A Sequencia tão aguardada' },
  { titulo: 'Chainsaw Massacre', excrept: 'A Sequencia tão aguardada' },
]


const Home = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Blog Horror</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='gird grid-cols-1 lg:grid-cols-12'>

      </div>
    </div>
  )
}

export default Home
