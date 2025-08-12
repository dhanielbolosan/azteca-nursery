'use client';

import React from 'react';
import { Container, Nav, Navbar, NavLink, Offcanvas} from 'react-bootstrap';

const TopNavbar: React.FC = () => {
    return (
        <Navbar expand="lg" className="fixed-top custom-navbar">
            <Container className="position-relative">
                <Navbar.Brand href="#" className="position-absolute start-50 translate-middle-x">Azteca Nursery</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" className="d-lg-none ms-auto" />
                <Navbar.Offcanvas className="custom-offcanvas" id="offcanvasNavbar-expand-lg" aria-labelledby="offcanvasNavbarLabel-expand-lg" placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                            Azteca Nursery
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="me-auto">
                            <NavLink href="/about-us">About Us</NavLink>
                            <NavLink href="/catalog">Catalog</NavLink>
                        </Nav>
                        <Nav className="ms-auto">
                            <NavLink href="/swap-meet">Swap Meet</NavLink>
                            <NavLink href="/contact-us">Contact Us</NavLink>
                            <NavLink href="/">EN/ES</NavLink>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default TopNavbar;
