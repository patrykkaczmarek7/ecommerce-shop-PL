import Head from 'next/head'
import { useContext } from 'react'
import {DataContext} from '../store/GlobalState'
import Link from 'next/link'
import { Animate } from 'react-simple-animate'

const Users = () => {
    const {state, dispatch} = useContext(DataContext)
    const {users, auth, modal} = state

    if(!auth.user) return null;
    return(
        <Animate play start={{ opacity: 0, transform: 'translateY(-40px)' }} end={{ opacity: 1, transform: 'translateY(0)' }}>
            <div className="table-responsive">
                <Head>
                    <title>Użytkownicy</title>
                </Head>

                <table className="table w-100">
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Zdjęcie</th>
                            <th>Imię i nazwisko</th>
                            <th>E-mail</th>
                            <th>Admin</th>
                            <th>Akcja</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            users.map((user, index)=> (
                                <tr key={user._id} style={{cursor: 'pointer'}}>
                                    <th>{index + 1}</th>
                                    <th>{user._id}</th>
                                    <th>
                                        <img src={user.avatar} alt={user.avatar}
                                        style={{
                                            borderRadius: '50%', width: '35px', height: '35px', 
                                            overflow: 'hidden', objectFit: 'cover'
                                        }} />
                                    </th>
                                    <th>{user.name}</th>
                                    <th>{user.email}</th>
                                    <th>
                                        {
                                            user.role === 'admin'
                                            ? user.root ? <i className="fas fa-check text-success"> Pełne prawa</i>
                                                        : <i className="fas fa-check text-success"></i>

                                            :<i className="fas fa-times text-danger"></i>
                                        }
                                    </th>
                                    <th>
                                        <Link href={
                                            auth.user.root && auth.user.email !== user.email
                                            ? `/edit_user/${user._id}` : '#!'
                                        }>
                                            <a><i className="fas fa-edit text-info mr-2" title="Edit"></i></a>
                                        </Link>

                                        {
                                            auth.user.root && auth.user.email !== user.email
                                            ? <i className="fas fa-trash-alt text-danger ml-2" title="Remove"
                                            data-toggle="modal" data-target="#exampleModal"
                                            onClick={() => dispatch({
                                                type: 'ADD_MODAL',
                                                payload: [{ data: users, id: user._id, title: user.name, type: 'ADD_USERS' }]
                                            })}></i>
                                            
                                            : <i className="fas fa-trash-alt text-danger ml-2" title="Remove"></i>
                                        }

                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
        </Animate>
    )
}

export default Users