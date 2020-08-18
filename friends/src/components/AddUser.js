import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

function AddUser(props) {

    const initialState = {
        name: '',
        age: '',
        email: ''
    }

    const [data, setData] = useState(initialState)

    const handleChange = e => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
            .post('/api/friends', data)
            .then(res => {
                setData(initialState)
            })
            .catch(err => {
                console.log(err)
                setData(initialState)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={data.name} name="name" type="text" placeholder="name" required />
            <input onChange={handleChange} value={data.age} name="age" type="number" placeholder="age" required />
            <input onChange={handleChange} value={data.email} name="email" type="email" placeholder="email" required />
            <button>Post</button>
        </form>
    )
}

export default AddUser