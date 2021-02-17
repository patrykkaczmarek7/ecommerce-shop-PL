import Head from 'next/head'
import Link from 'next/link'
import { Animate } from 'react-simple-animate'

const Empty_cart = () => {
  return(
    <Animate play start={{ opacity: 0, transform: 'translateY(-40px)' }} end={{ opacity: 1, transform: 'translateY(0)' }}>
      <div className="emptycart container-fluid">
        <Head>
          <title>Zacznij zakupy</title>
        </Head>
        <div className="row">
          {/* column */}
          <div className="col-md w-100" style={{height: "100vh"}}>
            <div className="box">
              <div className="container text-center" style={{color: "#52340A"}}>
                <div className="card border-0 shadow my-5 p-md-4">
                  <div className="card-body p-5">
                    <h1 className="text-center">Koszyk jest pusty</h1>
                    <hr/>
                    <Link href="/products">
                      <button
                        className="woodbtn"
                        >
                          <a className="woodbtn">produkty</a>
                      </button>
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Animate>
  )
}



export default Empty_cart