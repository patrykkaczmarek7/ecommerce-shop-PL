import Head from 'next/head'
import { Carousel } from 'react-bootstrap'
import Link from 'next/link'

const Home = () => {
  return(
    <div className="container-fluid">
      <Head>
        <title>Home</title>
      </Head>
      <div className="row">
        {/* 1 column */}
        <div className="col-md w-100">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{height: "88vh"}}
                src="https://files.clickweb.home.pl/1b/38/1b382cea-349c-4bf5-8cd1-d081f10d3e60.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{height: "88vh"}}
                src="https://a.allegroimg.com/s1024/0ccda5/7046accb4f18937915f14bbb7733"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{height: "88vh"}}
                src="https://art-madam.pl/zdjecie/stolik-kawowy-stolikzplastradrewna,bdxnwrlrlwpnwlxq.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        {/* 2 column */}
        <div className="col-md w-100" style={{height: "88vh"}}>
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
            <a>Wykonujemy stoły z plastra drewna
              na zamówienie</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Home