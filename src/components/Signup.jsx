// import { Layout, Form, Input, Button } from "antd"

// export default function Signup({setUser}) {
//   const handleFormSubmit = (values) => {
//     fetch('http://localhost:3030/signup', {
// method: 'POST',
// headers: {'Content-Type': 'application/json'},
// body: JSON.stringify(values)
//     })
//     .then(response => response.json())
//     .then(setUser)
//     .catch(alert)
//   }
//   return (
//     <Layout.Content>
//       <h1>Signup</h1>
//       <Form onFinish={handleFormSubmit}>
// <Form.Item label="Email" name="email" rules={[{
//   required: true,
//   message: 'Please enter a valid email address'
// }]}>
//   <Input />
// </Form.Item>
// <Form.Item label="Password" name="password" rules={[{
//   required: true,
//   message: 'Please enter password'
// }]}>
// <Input.Password />
// </Form.Item>
// <Form.Item>
//   <Button type="primary" htmlType="submit">Signup</Button>
// </Form.Item>
//       </Form>
//     </Layout.Content>
//   )
// }