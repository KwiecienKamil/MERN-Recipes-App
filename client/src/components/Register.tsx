import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {
  return (
  <div className="wrapper">
   <div className='h-100 w-100 d-flex align-items-center justify-content-center fs-4'>
     <Form className='form bg-dark p-4 text-light rounded'>
     <h1 className='w-100 text-center mb-4 fs-1 py-2 rounded'>Register</h1>
    <Form.Group className="mb-2" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-light fs-6">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Button variant="success" type="submit" className='w-100'>
      Submit
    </Button>
  </Form>
  </div>
   </div>
  )
}

export default Register
