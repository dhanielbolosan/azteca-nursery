'use client';

import { Container, Button, Image } from "react-bootstrap";
import PlantCard from "@/components/PlantCard";

export default function Home() {
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
          <PlantCard />
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
