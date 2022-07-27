import { React, useState } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';


const Header = () => {
    const [loginShow, setLoginShow] = useState(false)
    const [signUpShow, setSignUpShow] = useState(false)
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">D&D</Navbar.Brand>
                {Auth.loggedIn() ? (
                    <div>Hello</div>
                ) : (
                    <Nav className="me-auto">
                        <Nav.Link> <Link to='/'>Home</Link> </Nav.Link>
                        <Nav.Link onClick={() => setLoginShow(!loginShow)}><Link to='/login'>Login</Link></Nav.Link>
                        <Nav.Link onClick={() => setSignUpShow(!signUpShow)}>Sign up</Nav.Link>
                    </Nav>
                )}
                {loginShow ?
                    <div className='logged'>
                        <input type="text" placeholder='username' />
                    </div>
                    : ""
                }
            </Container>
        </Navbar>
    );
};

export default Header
