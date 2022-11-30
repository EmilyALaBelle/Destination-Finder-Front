// import { useState } from "react";
// import { initializeApp } from "firebase/app";
// import {getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
// import { Button, Input, Form } from "antd";

// const firebaseConfig = 
//   {
//     apiKey: "AIzaSyD1gnhRz27vGYDHC5S6IPZWyoHdf1h7r3g",
//     authDomain: "final-practice-el.firebaseapp.com",
//     projectId: "final-practice-el",
//     storageBucket: "final-practice-el.appspot.com",
//     messagingSenderId: "462758781095",
//     appId: "1:462758781095:web:1207c0f124d1f90a6b3b82"
//   };
  
// export default function Login({ setUser }){
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const handleLogin = async (e) => {
//     e.preventDefault()
//     const app = initializeApp(firebaseConfig)
//     const auth = getAuth(app)
//     const response = await signInWithEmailAndPassword(auth, email, password)
//     .catch(alert)
//     setUser(response.user)
//   }
//   const handleGoogleLogin = async () => {
//     const app = initializeApp(firebaseConfig)
//     const auth = getAuth(app)
//     const provider = new GoogleAuthProvider()
//     const response = await signInWithPopup(auth, provider)
//     .catch(alert)
//     setUser(response.user)
//   }
//   return (
//     <>
//     <h1>Login</h1>
//     <Form onSubmit={handleLogin}>
//       <label htmlFor="email"> Email:{' '}
// <Input type="email" name="email" 
// value={email} onChange={e => setEmail(e.target.value)}
// placeholder="yourname@domain.com" />
//       </label><br />
//       <label htmlFor="password">Password:{' '}
// <Input type="password" name="password" 
// value={password} onChange={e => setPassword(e.target.value)}
// placeholder="......."/>
//       </label><br />
//       <Button type="submit">Login</Button>
//     </Form>
//     <br />
//     <Button onClick={handleGoogleLogin}>Sign in with Google</Button>
//     </>
//   )
// }







// import { Input, Layout, Button,Form } from "antd"




// export default function Login({setUser, setToken}) {
// const handleFormSubmit = (values) => {
//   fetch('http://localhost:3030/login', {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(values)
//   })
//   .then(response => response.json())
//   .then(data => {
//     setToken(data.token)
//     setUser(data.user)
//   })
//   .catch(alert)
// }
//   return (
  
// <Layout.Content>
//   <h1>Login</h1>
//   <Form onFinish={handleFormSubmit}>
// <Form.Item label="Email" name="email" rules={[{
//   required: true,
//   message: 'Please enter a valid email address'
// }]}>
//   <Input />
// </Form.Item>
// <Form.Item label="Password" name="password" rules={[{
//   required: true,
//   message: 'Please enter a password'
// }]}>
// <Input.Password />
// </Form.Item>
// <Form.Item>
//   <Button type="primary" htmlType="submit">Login</Button>
// </Form.Item>
//   </Form>
// </Layout.Content> 
//   )
// }