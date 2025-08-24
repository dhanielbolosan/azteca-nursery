
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
            <Button className="custom-button">View Catalog</Button>
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
          <h2>Catalog</h2>
          <p>This is the Catalog section.</p>
        </Container>
      </div>

      {/* Swap meet */}
      <div id="swap-meet" className="section">
        <Container>
          <h2>Swap Meet</h2>
          <p>This is the Swap Meet section.</p>
        </Container>
      </div>

      {/* Contact */}
      <div id="contact" className="section">
        <Container>
          <h2>Contact</h2>
          <p>This is the Contact section.</p>
        </Container>
      </div>
    </>
  );
}
