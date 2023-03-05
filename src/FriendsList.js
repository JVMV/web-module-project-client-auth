import React, { useEffect } from 'react'
import {axiosWithAuth} from './apiWithAuth'
import './FriendsList.css'
import { useHistory } from 'react-router-dom'


export default function FriendsList(props) {
    const { friends, setFriends, setMessage } = props
    const { url } = props
    const history = useHistory()

    if(!localStorage.getItem('token')) {
        history.push('/login')
        setMessage('Please Login First')
    } else {
        setMessage('')
    }

    useEffect(() => {
        axiosWithAuth().get(url + 'friends')
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [friends])

    const deleteFriend = () => {
        return null
    }


    return (
        friends.length === 0 
        ? <div id='friendslist-container'>
            <div id='friendslist-title'>LOADING..</div>
          </div>
        : <div id='friendslist-container'>
            <div id='friendslist-title'>FRIENDS LIST</div>
            {friends.map(friend => {
                const { id, age, email, name } = friend
                return (
                    <div id='friend-item' key={id}>
                        <div>
                            <strong>Name: </strong>
                            <span>{name}</span>
                        </div>
                        <div>
                            <strong>Age: </strong>
                            <span>{age}</span>
                            </div>
                        <div>
                            <strong>Email: </strong>
                            <span>{email}</span>
                        </div>
                        <div>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}