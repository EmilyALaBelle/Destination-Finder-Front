import { useState } from "react"
import { useParams } from "react-router-dom"
import { Form, Layout, Select, Button } from "antd"
import questions from "../questions"
import './QuizForm.css'


export default function QuizForm() {
  const {destinationId} = useParams()
  const [loading, setLoading] = useState(false)

  const handleQuizSubmit = (values) => {
    setLoading(true)
    fetch(`http://127.0.0.1:5002/destinations/${destinationId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then(response => response.json())
      .then(data => {
        setLoading(false)
      })
      .catch(err => {
        alert(err)
        setLoading(true)
      })
  }
  return (
    <Form onFinish={handleQuizSubmit}>
      <Layout.Content style ={{marginTop: 24}}>
        <div className="quiz-form-main-container"
       style={{padding: '16px 1em 4px 1em', textAlign: 'left'}} >
          {questions.map(question => (
            <div key={question.value} className="form-item-container">
              <Form.Item name={question.value} rules={[{
                required: true,
                message: 'Please select an option'
              }]}>
                <Select placeholder={question.label}
                  options={question.options}
                  dropdownStyle={{ textAlign: 'left' }}
                />
              </Form.Item>
            </div>
          ))}
        </div>
      </Layout.Content>
      <Button type="primary" htmlType="submit" Loading={loading}>
        Submit Vote
      </Button>
    </Form>
  )
}