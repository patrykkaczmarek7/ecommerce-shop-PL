import Head from 'next/head'

const contact = () => {

    return(
      <div className="background container-fluid">
      <Head>
        <title>Home</title>
      </Head>
      <div className="row">
        {/* column */}
        <div className="col-md w-100" style={{height: "100vh"}}>
          <div className="box">
            <div className="container" style={{color: "#52340A"}}>
              <div className="card border-0 shadow my-5 p-md-4">
                <div className="card-body p-5">
                  <h1 className="text-center">Kontakt</h1>
                  <hr/>
                  <p className="lead">Godziny pracy: pn - pią 8:00 - 16:00</p>
                  <p className="lead">Telefon: +48 123 123 123</p>
                  <p className="lead mb-0">e-mail: example@table.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
  
  export default contact