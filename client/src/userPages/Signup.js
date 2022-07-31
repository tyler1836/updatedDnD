import {React, useState} from 'react'
import Stack from 'react-bootstrap/Stack'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import dnd from '../dnd.png'
import {useMutation} from '@apollo/client'
import {ADD_USER, LOGIN_USER} from '../utils/mutations'
import Auth from '../utils/auth'

function Signup() {
  const [login, setLogin] = useState({email: "", password: ""})
  const [createUser, setCreateUser] = useState({email: "", username: "", password: "", isGm: false})
  const [loginUser, ] = useMutation(LOGIN_USER);
  const [addUser, { error: signupError }] = useMutation(ADD_USER);

  const loginChange = (event) => {
    const {name, value} = event.target

    setLogin({
      ...login,
      [name]: value
    })
  }
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const { data } = await loginUser({
        variables: { ...login }
      });
      console.log(data)
      Auth.login(data.login.token);
      setLogin({
        email: "",
        password: ""
      })
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    const {name, value} = event.target

    setCreateUser({
      ...createUser,
      [name]: value
    })
  }

  const handleCreateUser = async (event) => {
    event.preventDefault();
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...createUser }
      });
      //Now when you sign up successfully, you'll be redirected to the homepage with your token stored in localStorage!
      Auth.login(data.addUser.token);
      console.log(data);
      setCreateUser({
        username: "",
        email: "",
        password: ""
      })
    } catch (e) {
      alert("Password must be longer")
      console.error(e);
    }
  };
  return (
    <div className='loggedIn'>
      <img src={dnd} alt=""  style={{maxHeight: '300px'}} className='banner'/>
      <Form className='getProfile'>
        <h3>Login</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="Text" placeholder="Enter username" name='email' value={login.email} onChange={loginChange}/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' value={login.password} onChange={loginChange}/>
        </Form.Group>
        <Button variant="secondary" type="submit" onClick={handleLogin}>
          Submit
        </Button>
      </Form>
      <Form className='getProfile'>
        <h3>Register</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name='email' value={createUser.email} onChange={handleChange}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" name='username' value={createUser.username} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' value={createUser.password} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Are you a DM/GM" checked={createUser.isGm = true}/>
        </Form.Group>
        <Button variant="secondary" type="submit" onClick={handleCreateUser}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Signup