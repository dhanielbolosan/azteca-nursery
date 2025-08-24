import { Container, Row, Col } from "react-bootstrap";
// import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer id="footer" className="custom-footer py-5">
            <Container>
                <Row>
                    <Col className="mb-3 mb-md-0">
                        <h5 style={{ fontFamily: 'Pt Serif'}}>Have a Question?</h5>
                        <p><strong>Email</strong><br/><a href="mailto:Leodoloresflores62@gmail.com" className="footer-link">Leodoloresflores62@gmail.com</a></p>
                        <p><strong>Phone</strong><br/><a href="tel:+18082506847" className="footer-link">(808)-250-6847</a></p>
                    </Col>
                    <Col>
                        <h5 style={{ fontFamily: 'Pt Serif'}}>Navigate</h5>
                        <p><Link href="/#about" className="footer-link">About Us</Link></p>
                        <p><Link href="/catalog" className="footer-link">Catalog</Link></p>
                        <p><Link href="/#swap-meet" className="footer-link">Swap Meet</Link></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;