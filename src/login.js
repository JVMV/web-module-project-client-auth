import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './login.css'
import axios from 'axios'

const initialFormValues = {
    username: '',
    password: ''
}

export default function LoginForm (props) {
    const [formInput, setFormInput] = useState(initialFormValues)
    const {url} = props
    const history = useHistory()

    const changeHandler = (evt) => {
        const { name, value } = evt.target
        setFormInput({...formInput, [name]: value})
    }

    const onSubmit = (evt) => {
        evt.preventDefault()
        axios.post(url + 'login', formInput)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                setFormInput(initialFormValues)
                history.push('/friends')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='loginform-container'>
            <form className='loginform' onSubmit={onSubmit}>
                <label><span id='login-label'>LOGIN</span><br />
                    <label htmlFor='username'>USERNAME<br />
                        <input minLength={3} onChange={changeHandler} value={formInput.username} name='username' id='username' type='text' placeholder='enter username'/>
                    </label><br />
                    <label htmlFor='password'>PASSWORD<br />
                        <input minLength={3} onChange={changeHandler} value={formInput.password} name='password' id='password' type='password' placeholder='enter password' />
                    </label>
                </label><br />
                <button id='submit-btn'>Submit</button>
            </form>
        </div>
    )
}