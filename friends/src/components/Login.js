import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Container } from '../styled/styles'

function Login(props) {

    const history = useHistory()

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setIsLoading(true)
        axiosWithAuth()
            .post('/api/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                setIsLoading(false)
                history.push('/friends')
            })
            .catch(err => {
                setError(err.message)
                setIsLoading(false)
            })
    }

    return (
        <Container>
            <h1>Login in</h1>
            <form onSubmit={handleSubmit} autoComplete="off">
                <input onChange={handleChange} value={credentials.username} name="username" type="text" placeholder="username" />
                <input onChange={handleChange} value={credentials.password} name="password" type="password" placeholder="password" />
                <button>{isLoading ? 'FETCHING' : 'Submit'}</button>
                {error && <h3>{error}</h3>}
            </form>
        </Container>
    )
}

export default Login