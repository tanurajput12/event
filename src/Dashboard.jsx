import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import './Styles/Style.css';

const Dashboard = () => {
  const [input, setInput] = useState({
    email: '',
    name: '',
    surname: '',
    password: ''
  });
  const navi = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    const api = "http://localhost:3000/database";
    axios
      .post(api, input)
      .then((res) => {
        alert("Data Inserted Successfully");
        navi("/ticket");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div className="form">
        <h1>Dashboard</h1>
        <Form onSubmit={handleSubmit}> {/* Use onSubmit for the form */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={input.email}
              onChange={handleInput}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Enter your First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              name="name" // Removed extra space
              value={input.name}
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicSurname">
            <Form.Label>Enter your Surname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Surname"
              name="surname"
              value={input.surname}
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={input.password}
              onChange={handleInput}
            />
          </Form.Group>

          <button type="submit" className="card-button"> {/* Changed to type="submit" */}
            Click
          </button>
        </Form>
      </div>
    </>
  );
};

export default Dashboard;