import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

function Friends(props) {

    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const friendsList = friends.map(friend => (
        <div key={friend.id}>
            <h3>{friend.name}</h3>
            <h4>{friend.age}</h4>
            <h5>{friend.email}</h5>
        </div>
    ))

    return (
        <div>
            {friendsList}
        </div>
    )
}

export default Friends