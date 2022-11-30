import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Button, Input, Form} from 'antd'

export default function Login() {
  const [form, setForm] = useState({})
  const navigate = useNavigate()

  const handleFormSubmit = e => {
    // stop the page from refreshing
    e.preventDefault()

    // send data/body to API
    fetch('http://127.0.0.1:5002/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('userToken', data.accessToken)
        navigate('/account')
      })
      .catch(err => console.error(err))
  }

  return (
    <>
      <Form action='submit' onSubmit={handleFormSubmit} method='post'>
        <h2>Log in</h2>
        <label htmlFor=''>Email: </label>
        <Input type='email' onChange={e => setForm({ ...form, email: e.target.value })} />
        <br />
        <label htmlFor=''>Password: </label>
        <Input type='password' onChange={e => setForm({ ...form, password: e.target.value })} />
        <Button type='submit'>Login</Button>
      </Form>
      <br /><br />
      Don't have an account? 
      <Button onClick={() => navigate('/signup')}>Sign up</Button>
    </>
  )
}