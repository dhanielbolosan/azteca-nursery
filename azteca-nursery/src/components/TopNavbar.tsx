
import { Container, Nav, Navbar, NavbarBrand, NavLink, NavbarToggle, NavbarCollapse } from 'react-bootstrap';
import React from 'react';

const TopNavbar: React.FC = () => {
    return (
        <Navbar className="fixed-top custom-navbar" expand="lg">
            <Container className="position-relative">
                <NavbarBrand
                    href="/"
                    className="position-absolute start-50 translate-middle-x"
                >
                    Azteca Nursery
                </NavbarBrand>
                <NavbarToggle aria-controls="basic-navbar-nav" className="ms-auto" />
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink href="/about-us">About Us</NavLink>
                        <NavLink href="/catalog">Catalog</NavLink>
                    </Nav>
                    <Nav className="ms-auto">
                        <NavLink href="/swap-meet">Swap Meet</NavLink>
                        <NavLink href="/contact-us">Contact Us</NavLink>
                        <NavLink href="/">EN/ES</NavLink>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    );
};

export default TopNavbar;
