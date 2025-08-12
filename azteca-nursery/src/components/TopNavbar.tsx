'use client';

import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, Offcanvas} from 'react-bootstrap';

const TopNavbar: React.FC = () => {
    const [solidNavbar, setSolidNavbar] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const homepage = document.getElementById('home');
            if (!homepage) return;

            const homepageHeight = homepage.offsetHeight;

            if (window.scrollY >= (homepageHeight * 0.9)) {
                setSolidNavbar(true);
            } else {
                setSolidNavbar(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <Navbar expand="lg" fixed="top" className={`custom-navbar ${solidNavbar ? 'navbar-solid' : 'navbar-transparent'}`}>
            <Container className="position-relative">
                <Navbar.Brand href="#home" className="position-absolute start-50 translate-middle-x">Azteca Nursery</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" className="d-lg-none ms-auto" />
                <Navbar.Offcanvas className="custom-offcanvas" id="offcanvasNavbar-expand-lg" aria-labelledby="offcanvasNavbarLabel-expand-lg" placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                            Azteca Nursery
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About Us</Nav.Link>
                            <Nav.Link href="#catalog">Catalog</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link href="#swap-meet">Swap Meet</Nav.Link>
                            <Nav.Link href="#contact">Contact Us</Nav.Link>
                            <Nav.Link href="/">EN/ES</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default TopNavbar;
