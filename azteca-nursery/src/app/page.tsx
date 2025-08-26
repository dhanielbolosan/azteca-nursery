'use client';

import { Container, Button, Image } from "react-bootstrap";
import FeaturedSlider from "@/components/FeaturedSlider";

export default function Home() {
  const featuredPlants = [
    {
      id: 1,
      name: "Plant 1",
      image: "/images/plants/123_1 2.JPEG",
      price: 10,
      description: "A beautiful plant 1"
    },
    {
      id: 2,
      name: "Plant 2",
      image: "/images/plants/123_1 3.JPEG",
      price: 15,
      description: "A beautiful plant 2"
    },
    {
      id: 3,
      name: "Plant 3",
      image: "/images/plants/123_1 4.JPEG",
      price: 20,
      description: "A beautiful plant 3"
    },
    {
      id: 4,
      name: "Plant 4",
      image: "/images/plants/123_1 5.JPEG",
      price: 15,
      description: "A beautiful plant 4"
    },
    {
      id: 5,
      name: "Plant 5",
      image: "/images/plants/123_1 6.JPEG",
      price: 20,
      description: "A beautiful plant 5"
    }
  ]

  return (
    <>
      {/* Homepage */}
      <div id="home" className="homepage section">
        <div className="homepage-pic" id="pic3"/>
        <div className="homepage-pic" id="pic2"/>
        <div className="homepage-pic" id="pic1"/>
        <div className="homepage-overlay" />
        <div className="homepage-content">
          <Container>
            <h1 style={{ fontFamily: "American Brewery Rough", color: "#faf4e9", fontSize: "3rem"}}>Azteca Nursery</h1>
            <h2 style= {{ fontFamily: "Montserrat", color: "#f8cf2c" }}>Locally Grown Plants</h2>
            <Button className="custom-button" href="/catalog">View Catalog</Button>
          </Container>
        </div>
      </div>

      {/* About Us */}
      <div id="about" className="about-us section">
        <div className="about-content">
          <Image className="about-image" src="/images/about-us-holder1.jpg" alt="Image of Azteca Nursery Owner" />
          <div className="about-text">
            <h2 className="about-title">About Us</h2>
            <p className="about-text"> Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl malesuada lacinia integer nunc posuere ut hendrerit semper vel class aptent taciti sociosqu ad litora torquent per conubia nostra inceptos himenaeos orci varius natoque penatibus et magnis dis parturient montes nascetur ridiculus mus donec rhoncus eros lobortis nulla molestie mattis scelerisque maximus eget fermentum odio phasellus non purus est efficitur laoreet mauris pharetra vestibulum fusce dictum risus blandit quis suspendisse aliquet nisi sodales consequat magna ante condimentum neque at luctus nibh finibus facilisis dapibus etiam interdum tortor ligula congue sollicitudin erat viverra ac tincidunt nam porta elementum a enim euismod quam.
            </p>
          </div>
        </div>
      </div>


      {/* Catalog */}
      <div id="catalog" className="section">
        <Container>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "1rem"}}>
            <h2 style={{ fontFamily: "Pt Serif", color: "#242124", fontSize:"2rem" }}>Featured Plants</h2>
            <a href="/catalog"style={{ fontFamily: "Pt Serif", color: "#242124", cursor: "pointer", fontSize: "1.5rem" }}>View More</a>
          </div>
          <FeaturedSlider plants={featuredPlants} />
        </Container>
      </div>

      {/* Swap Meet */}
      <div id="swap-meet" className="section">
        <Container>
          <h1 style={{ fontFamily: 'Pt Serif', color: "#242124" }}>Catch Us At Our Stand!</h1>
          <Image className="stand-image" src="/images/homepage-holder2.jpg" alt="Image of Stand in Swap Meet"/>
          <h3 style={{ fontWeight: 'bold' }}>Maui Swap Meet</h3>
            <p>
            310 W Kaahumanu Ave, Kahului, HI 96732<br />
            Saturday 7am - 1pm
            </p>
          <Button
            className="custom-button"
            onClick={() => window.open("https://maps.app.goo.gl/KELbZ4s9K6irmpwJ9", "_blank")}
            >
              Get Directions
          </Button>
        </Container>
      </div>
    </>
  );
}
