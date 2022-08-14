import Carousel from "react-bootstrap/Carousel";

export default function CarouselTest({ images }) {
  return (
    <div className="mx-3 bg-dark rounded">
      <Carousel fade interval={5000}>
        {images.map((image, i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              style={{ height: "500px", objectFit: "contain" }}
              src={image}
              alt="First slide"
            />
            {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
