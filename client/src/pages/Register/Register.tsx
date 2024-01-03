import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate()

  const handleRegister = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(username.length >= 3 && password.length >= 4) {
      try{
        await axios.post("http://localhost:3001/auth/register", {
          username, password
        });
        navigate("/login")
      } catch(err) {
        console.log(err);
      }
      setUsername("");
      setPassword("");
     }else {
      toast("Minimum 3 characters in username and 4 characters in password!")
     }
  
  }
  return (
    <div className="wrapper">
      <div className="h-100 w-100 d-flex align-items-center justify-content-center fs-4">
        <Form className="form bg-dark p-4 text-light rounded" onSubmit={handleRegister}>
          <h1 className="w-100 text-center fs-1 py-2 rounded">Register</h1>
          <Form.Group className="mb-1">
            <Form.Label>Username</Form.Label>
            <Form.Control
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="username"
              placeholder="Enter Username"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
            />
          </Form.Group>
          <Button variant="success" type="submit" className="w-100">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
