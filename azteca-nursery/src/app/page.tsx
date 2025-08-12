import { Container, Button } from "react-bootstrap";

const homepageImages = [
    "/homepage-holder1.jpg",
    "/homepage-holder2.jpg",
    "/homepage-holder3.jpg",
];

export default function Home() {
  return (
    <>
      <div id="home" className="homepage section">
        <div className="homepage-pic" id="pic3"/>
        <div className="homepage-pic" id="pic2"/>
        <div className="homepage-pic" id="pic1"/>
        <div className="homepage-overlay" />
        <div className="homepage-content">
          <Container>
            <h1 style={{ fontFamily: "American Brewery Rough", color: "#faf4e9", fontSize: "3rem"}}>Azteca Nursery</h1>
            <h2 style= {{ fontFamily: "Montserrat", color: "#f8cf2c" }}>Locally Grown Plants</h2>
            <Button className="custom-button">View Catalog</Button>
          </Container>
        </div>
      </div>
      <div id="about" className="section">
        <Container>
          <h2>About Us</h2>
          <p>This is the About Us section.</p>
        </Container>
      </div>

      <div id="catalog" className="section">
        <Container>
          <h2>Catalog</h2>
          <p>This is the Catalog section.</p>
        </Container>
      </div>

      <div id="swap-meet" className="section">
        <Container>
          <h2>Swap Meet</h2>
          <p>This is the Swap Meet section.</p>
        </Container>
      </div>

      <div id="contact" className="section">
        <Container>
          <h2>Contact</h2>
          <p>This is the Contact section.</p>
        </Container>
      </div>
    </>
  );
}
