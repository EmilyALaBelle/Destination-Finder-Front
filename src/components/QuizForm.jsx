import { Form, Layout, Button, Radio } from "antd"
import questions from "../questions"
import './QuizForm.css'
import { useNavigate } from "react-router-dom"

const onChange = (e) => {
  console.log(`radio checked:${e.target.value}`)
}
export default function QuizForm() {
  const navigate = useNavigate()

  const handleQuizSubmit = (values) => {
    fetch(`http://127.0.0.1:5002/destination`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify(values)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        navigate("/results")
      })
      .catch(err => {
        alert(err)
      })
  }


  return (
    <Form onFinish={handleQuizSubmit}>
      <Layout.Content style={{ marginTop: 24 }}>
        <div className="quiz-form-main-container">
          {questions.map(question => (
            <div key={question.value} className="form-item-container">
              <Form.Item name={question.value} rules={[{
                required: true,
                message: 'Please select an option'
              
              }]}>
                <Radio.Group onChange={onChange} placeholder={question.label} options={question.options}>
                </Radio.Group>
              </Form.Item>
            </div>
          ))}
        </div>
      </Layout.Content>
      <Button type="primary" htmlType="submit"  >
        Submit Vote
      </Button>
    </Form>
  )
}