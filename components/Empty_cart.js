import Head from 'next/head'
import { useState, useContext, useEffect } from 'react'
import {DataContext} from '../store/GlobalState'

import { getData } from '../utils/fetchData'
import ProductItem from './product/ProductItem'
import filterSearch from '../utils/filterSearch'
import {useRouter} from 'next/router'
import Filter from './Filter'

const Empty_cart = () => {
  return(
      <div>
          <Head>
            <title>Zacznij zakupy</title>
        </Head>
        <img className="img-responsive w-100" src="/empty_cart.jpg" alt="not empty"/>
      </div>
  )
}



export default Empty_cart