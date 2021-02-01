import Head from 'next/head'
import { useState, useContext, useEffect } from 'react'
import {DataContext} from '../store/GlobalState'

import { getData } from '../utils/fetchData'
import ProductItem from '../components/product/ProductItem'
import filterSearch from '../utils/filterSearch'
import {useRouter} from 'next/router'
import Filter from '../components/Filter'

const Home = () => {
  return(
    <div className="home_page">
      <Head>
        <title>Home</title>
      </Head>
      <a>Home</a>
    </div>
  )
}



export default Home