import Head from 'next/head'
import Link from 'next/link'
import {useState, useContext, useEffect} from 'react'
import {DataContext} from '../store/GlobalState'
import {postData} from '../utils/fetchData'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'
import { Animate } from 'react-simple-animate'

const Signin = () => {
  const initialState = { email: '', password: '' }
  const [userData, setUserData] = useState(initialState)
  const { email, password } = userData

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
    dispatch({ type: 'NOTIFY', payload: {loading: true} })
    const res = await postData('auth/login', userData)
    
    if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })
    dispatch({ type: 'NOTIFY', payload: {success: res.msg} })

    dispatch({ type: 'AUTH', payload: {
      token: res.access_token,
      user: res.user
    }})

    Cookie.set('refreshtoken', res.refresh_token, {
      path: 'api/auth/accessToken',
      expires: 7
    })

    localStorage.setItem('firstLogin', true)
  }

  useEffect(() => {
    if(Object.keys(auth).length !== 0) router.push("/")
  }, [auth])

    return(
      <Animate play start={{ opacity: 0, transform: 'translateY(-40px)' }} end={{ opacity: 1, transform: 'translateY(0)' }}>
        <div className="reglog container-fluid">
        <Head>
          <title>Logowanie</title>
        </Head>
        <div className="row">
          {/* column */}
          <div className="col-md w-100" style={{height: "100vh"}}>
            <div className="box">
              <div className="container" style={{color: "#52340A"}}>
                <div className="card border-0 shadow my-5 p-4">
                  <div className="card-body">
                    <h1 className="text-center">Logowanie</h1>
                    <hr/>
                    <form className="mx-auto my-4" style={{maxWidth: '500px'}} onSubmit={handleSubmit}>
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
                      <div className="text-center">
                        <button type="submit" className="woodbtnlogin">Zaloguj</button>
                      </div>

                      <p className="my-2">
                        Nie masz jeszcze konta? <Link href="/register"><a style={{color: 'green'}}>Zarejestruj się</a></Link>
                      </p>
                    </form>
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
  
  export default Signin