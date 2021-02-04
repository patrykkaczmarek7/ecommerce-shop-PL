import Head from 'next/head'
import Link from 'next/link'

const Empty_cart = () => {
  return(
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
  )
}



export default Empty_cart