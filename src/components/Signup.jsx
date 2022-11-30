// import { useState} from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Form, Input, Button } from 'antd'

// export default function Signup() {
//   const [form, setForm] = useState({})
//   const navigate = useNavigate()

//   const handleFormSubmit = e => {
//     e.preventDefault()

//     fetch('http://127.0.0.1:5002/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(form)
//   })
// }

// return (
//   <>
//   <Form action='submit' onSubmit={handleFormSubmit} method='post'>
// <h1>Signup</h1>
// <label htmlFor="">Email</label>
// <Input type='email' onChange={e => setForm({ ...form, email: e.target.value})}/>
// <br />
// <label htmlFor="">Password</label>
// <Input type='password' onChange={e => setForm({ ...form, password: e.target.value})}/>
// <Button type='submit'>Signup</Button>
//   </Form>
// <br /><br />
// already have an account?
// <Button onClick={() => navigate('/')}>Login</Button>
//   </>
// )

// }

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const [form, setForm] = useState({})
  const navigate = useNavigate()

  const handleFormSubmit = e => {
    // stop the page from refreshing
    e.preventDefault()

    // send data/body to API
    fetch('http://127.0.0.1:5002/signup', {
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
      <form action='submit' onSubmit={handleFormSubmit} method='post'>
        <h2>Sign up</h2>
        <label htmlFor=''>Email: </label>
        <input type='email' onChange={e => setForm({ ...form, email: e.target.value })} />
        <br />
        <label htmlFor=''>Password: </label>
        <input type='password' onChange={e => setForm({ ...form, password: e.target.value })} />
        <button type='submit'>Sign up</button>
      </form>
      <br /><br />
      already have an account?
      <button onClick={() => navigate('/login')}>Login</button>
    </>
  )
}