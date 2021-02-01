import Head from 'next/head'

const Empty_cart = () => {
  return(
      <div>
          <Head>
            <title>Zacznij zakupy</title>
        </Head>
        <img 
          className="img-responsive w-100" 
          src="/empty_cart1.jpg" 
          style={{height: "88vh"}}
        />
      </div>
  )
}



export default Empty_cart