import Head from 'next/head'
import Link from 'next/link'
import {useState, useContext, useEffect} from 'react'
import valid from '../utils/valid'
import {DataContext} from '../store/GlobalState'
import {postData} from '../utils/fetchData'
import { useRouter } from 'next/router'


const Register = () => {
  const initialState = { name: '', email: '', password: '', cf_password: '' }
  const [userData, setUserData] = useState(initialState)
  const { name, email, password, cf_password } = userData

  const {state, dispatch} = useContext(DataContext)
  const { auth } = state

  const router = useRouter()

  const handleChangeInput = e => {
    const {name, value} = e.target
    setUserData({...userData, [name]:value})
    dispatch({ type: 'NOTIFY', payload: {} })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errMsg = valid(name, email, password, cf_password)
    if(errMsg) return dispatch({ type: 'NOTIFY', payload: {error: errMsg} })

    dispatch({ type: 'NOTIFY', payload: {loading: true} })

    const res = await postData('auth/register', userData)
    
    if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })

    return dispatch({ type: 'NOTIFY', payload: {success: res.msg} })
  }

  useEffect(() => {
    if(Object.keys(auth).length !== 0) router.push("/")
  }, [auth])

    return(
      <div className="reglog container-fluid">
      <Head>
        <title>Logowanie</title>
      </Head>
      <div className="row">
        {/* column */}
        <div className="col-md w-100" style={{height: "100vh"}}>
          <div className="box pt-5">
            <div className="container pt-5" style={{color: "#52340A"}}>
              <div className="card border-0 shadow my-5 p-4">
                <div className="card-body">
                  <h1 className="text-center">Rejestracja</h1>
                  <hr/>
                  <form className="mx-auto my-4" style={{maxWidth: '500px'}} onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Imię i nazwisko</label>
                      <input type="text" className="form-control" id="name"
                      name="name" value={name} onChange={handleChangeInput} />
                    </div>

                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">E-mail</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                      name="email" value={email} onChange={handleChangeInput} />
                      <small id="emailHelp" className="form-text text-muted">Twoje dane są chronione na mocy praw RODO.</small>
                    </div>

                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Hasło</label>
                      <input type="password" className="form-control" id="exampleInputPassword1"
                      name="password" value={password} onChange={handleChangeInput} />
                    </div>

                    <div className="form-group">
                      <label htmlFor="exampleInputPassword2">Potwierdź hasło</label>
                      <input type="password" className="form-control" id="exampleInputPassword2"
                      name="cf_password" value={cf_password} onChange={handleChangeInput} />
                    </div>
                    <div className="text-center">
                      <button type="submit" className="woodbtnregister">Rejestracja</button>
                    </div>
                    <p className="my-2">
                      Posiadasz już konto? <Link href="/signin"><a style={{color: 'green'}}>Zaloguj się</a></Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
  
  export default Register