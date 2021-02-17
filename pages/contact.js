import Head from 'next/head'
import { Animate } from 'react-simple-animate'

const contact = () => {

    return(
      <Animate play start={{ opacity: 0, transform: 'translateY(-40px)' }} end={{ opacity: 1, transform: 'translateY(0)' }}>
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
                    <p className="lead">Telefon: +48 123 123 125</p>
                    <p className="lead mb-0">e-mail: example@table.com</p>
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
  
  export default contact