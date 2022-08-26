import React, { useState } from 'react'
import './AddFriend.css'
import {axiosWithAuth} from './apiWithAuth'
import { useHistory } from 'react-router-dom'

const initialAddFriend = {
    name: '',
    email: ''
}

export default function AddFriend(props) {
    const [newFriend, setNewFriend] = useState(initialAddFriend)
    const { setMessage, setFriends } = props
    const history = useHistory()

    if(!localStorage.getItem('token')) {
        history.push('/login')
        setMessage('Please Login First')
    } else {
        setMessage('')
    }

    const onSubmit = evt => {
        evt.preventDefault()
        axiosWithAuth().post(props.url + 'friends', newFriend)
            .then(res => {
                setFriends(res.data)
                setMessage('Friend succesfully added')
                history.push('/friends')
            })
            .catch(err => {
                console.log(err)
            })
    }

    const changeHandler = evt => {
        const { name, value } = evt.target
        setNewFriend({...newFriend, [name]: value})
    }
    
    return (
        <div className='addfriend-container'>
            <form className='loginform' onSubmit={onSubmit}>
                <label><span id='login-label'>ADD FRIEND</span><br />
                    <label htmlFor='name'>NAME<br />
                        <input minLength={3} onChange={changeHandler} value={newFriend.name} name='name' id='name' type='text' placeholder='enter friend name'/>
                    </label><br />
                    <label htmlFor='email'>EMAIL<br />
                        <input minLength={3} onChange={changeHandler} value={newFriend.email} name='email' id='email' type='email' placeholder='enter friend email' />
                    </label>
                </label><br />
                <button id='submit-btn' disabled={newFriend.name === '' || newFriend.email === '' ? true : false}>Submit</button>
            </form>
        </div>
    )
}