import React from 'react';
import { Navbar, Button,FormControl,Form,Nav } from 'react-bootstrap';
const navigation =()=>
{
    return(
        <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">EXPLORE</Navbar.Brand>
                <Navbar.Brand href="#home">CATEGORIES</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <button >Search</button>
                 </Form>
                </Navbar>
        )
    }
    export default navigation;