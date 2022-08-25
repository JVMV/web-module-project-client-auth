import React, { useState } from 'react'
import './login.css'

const initialFormValues = {
    username: '',
    password: ''
}

export default function LoginForm (props) {
    const [formInput, setFormInput] = useState(initialFormValues)

    const changeHandler = (evt) => {
        console.log(evt)
        const { name, value } = evt.target
        setFormInput({...formInput, [name]: value})
    }

    const onSubmit = (evt) => {
        evt.preventDefault()
        console.log('it wrks')
    }

    return (
        <div className='loginform-container'>
            <form className='loginform' onSubmit={() => onSubmit()}>
                <label><span id='login-label'>LOGIN</span><br />
                    <label htmlFor='username'>USERNAME<br />
                        <input onChange={changeHandler} value={formInput.username} name='username' id='username' type='text' placeholder='enter username'/>
                    </label><br />
                    <label htmlFor='password'>PASSWORD<br />
                        <input onChange={changeHandler} value={formInput.password} name='password' id='password' type='password' placeholder='enter password' />
                    </label>
                </label><br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}