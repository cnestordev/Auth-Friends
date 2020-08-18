import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Box } from '../styled/styles'

import AddUser from './AddUser'

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
    }, [friends])


    const friendsList = friends.map(friend => (
        <div className="box" key={friend.id}>
            <h3>{friend.name}</h3>
            <h4>{friend.age}</h4>
            <h5>{friend.email}</h5>
        </div>
    ))

    return (
        <Box>
            <AddUser />
            <div className="flexContainer">
                {friendsList}
            </div>
        </Box>
    )
}

export default Friends