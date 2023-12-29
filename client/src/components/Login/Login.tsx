import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [_,setCookies] = useCookies(["access_token"])

  const navigate = useNavigate()

  const handleRegister = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    try{
      const response = await axios.post("http://localhost:3001/auth/login", {
        username, password
      });
      setCookies("access_token", response.data.token)
      window.localStorage.setItem("userID", response.data.userID)
      navigate("/")
    } catch(err) {
      console.log(err);
    }
    setUsername("");
    setPassword("");
  }

  return (
    <div className="wrapper">
      <div className="h-100 w-100 d-flex align-items-center justify-content-center fs-4">
        <Form className="form bg-dark p-4 text-light rounded" onSubmit={handleRegister}>
          <h1 className="w-100 text-center fs-1 py-2 rounded">Login</h1>
          <Form.Group className="mb-1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="username"
              placeholder="Enter email"
            />
            <Form.Text className="text-light fs-6">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button
            variant="success"
            type="submit"
            className="w-100"
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
