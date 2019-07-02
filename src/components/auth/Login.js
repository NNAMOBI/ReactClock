import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button"


function Login() {
  return (
<div id="formcontainer">
    <div className="field">
      <h4>SIGN IN TO YOUR ACCOUNT</h4>

      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        {['checkbox'].map(type => (
          <div key={type} className="mb-3">
            <Form.Check type={type} id={`check-api-${type}`}>
              <Form.Check.Input type={type} isValid />
              <Form.Check.Label>Keep me signed in</Form.Check.Label>
              <Form.Control.Feedback type="valid"></Form.Control.Feedback>
            </Form.Check>
          </div>
        ))}

        <Button variant="primary" size="lg" block>
          submit
    </Button>
    <p>Forgot your password?</p>
      </Form>





    </div>
    </div>





  )
}

export default Login;