import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Carousel } from 'react-bootstrap'
import Link from 'next/link'
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate"

const Home = () => {

  return(
    <Animate play start={{ opacity: 0, transform: 'translateX(-40px)' }} end={{ opacity: 1, transform: 'translateX(0)' }}>
    <div 
      className="container-fluid"
      style={{height: "85vh"}}
    >
      <Head>
        <title>Home</title>
      </Head>

      <div className="row">
        {/* 1 column */}
        <div className="col-md w-100 pt-3">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{height: "85vh"}}
                src="https://files.clickweb.home.pl/1b/38/1b382cea-349c-4bf5-8cd1-d081f10d3e60.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <i>Nulla vitae elit libero, a pharetra augue mollis interdum.</i>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{height: "85vh"}}
                src="https://a.allegroimg.com/s1024/0ccda5/7046accb4f18937915f14bbb7733"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</i>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{height: "85vh"}}
                src="https://art-madam.pl/zdjecie/stolik-kawowy-stolikzplastradrewna,bdxnwrlrlwpnwlxq.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <i>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</i>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        {/* 2 column */}
        <div 
          className="col-md w-100" 
          style={{height: "85vh"}}
        >
          <div className="box">
            <div className="row d-flex justify-content-center">
              <div className="p-2">
              <Link href="/contact">
                <button
                  className="woodbtn"
                  >
                    <a className="woodbtn">kontakt</a>
                </button>
                </Link>
              </div>
              <div className="p-2">
              <Link href="/products">
                <button
                  className="woodbtn"
                  >
                    <a className="woodbtn">produkty</a>
                </button>
                </Link>
              </div>
            </div>
  
            <br/>

            <div className="text-center h3" style={{color: "#52340A"}}>
            <i>Wykonujemy stoły z plastra drewna
              na zamówienie</i>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Animate>
  )
}



export default Home