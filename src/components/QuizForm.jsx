import { useState } from "react"
import { Link } from "react-router-dom"
import { Form, Layout, Button, Radio } from "antd"
import questions from "../questions"
import './QuizForm.css'

const onChange = (e) => {
  console.log(`radio checked:${e.target.value}`)
}

export default function QuizForm() {

  const [loading, setLoading] = useState(false)


  const handleQuizSubmit = (values) => {
    setLoading(true)
    fetch(`http://127.0.0.1:5002/destination`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setLoading(false)
      })
      .catch(err => {
        alert(err)
        setLoading(true)
      })
  }
  return (
    <Form onFinish={handleQuizSubmit}>
      <Layout.Content style={{ marginTop: 24 }}>
        <div className="quiz-form-main-container"
          style={{ padding: '16px 1em 4px 1em', textAlign: 'left' }} >
          {questions.map(question => (
            <div key={question.value} className="form-item-container">
              <Form.Item name={question.value} rules={[{
                required: true,
                message: 'Please select an option'
              }]}>
                <Radio.Group onChange={onChange} options={question.options}>
                </Radio.Group>
              </Form.Item>
            </div>
          ))}
        </div>
      </Layout.Content>
      <Link to={"/results"}>
        <Button type="primary" htmlType="submit" loading={loading} >
          Submit Vote
        </Button>
      </Link>
    </Form>
  )
}