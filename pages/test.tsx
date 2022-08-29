import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const TestPage: NextPage = () => {
  return (
    <Layout>
        <>
          <Head>
            <title>Test Page</title>
            <meta name="description" content="Test Description" />
          </Head>
          <div>
            <h1>Test Page</h1>
          </div>
        </>
    </Layout>
  )
}

export default TestPage
