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
                <Navbar.Brand>D&D</Navbar.Brand>
                {Auth.loggedIn() ? (
                    <>
                        <Nav className='me-auto'>
                            <Nav.Link> <Link to='/'>Home</Link> </Nav.Link>
                            <Nav.Link><Link to="/profile">Me</Link></Nav.Link>
                            <Nav.Link> <a href="/" onClick={() => {localStorage.removeItem('id_token'), window.location.assign('/')}}>
                                Logout
                            </a></Nav.Link>

                        </Nav>
                    </>
                ) : (
                    <Nav className="me-auto">
                        <Nav.Link> <Link to='/'>Home</Link> </Nav.Link>
                        <Nav.Link><Link to='/login'>Login</Link></Nav.Link>
                        <Nav.Link><Link to='/login'>Sign up</Link></Nav.Link>
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
