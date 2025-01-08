import type { NextPage } from 'next'
import Head from "next/head";
import Dashboard from '../components/organisms/Dashboard/Index'

const Home: NextPage = () => {
  return (
    <>
      
      <Head>
          <title>Nextjs-Dev Blog</title>
          <link rel="icon" href="/favicon.ico" />    
      </Head>
      <Dashboard />

    </>
  )
}

export default Home
