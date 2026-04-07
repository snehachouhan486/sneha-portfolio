import Carousel from "react-bootstrap/Carousel";
import "./carsal.css";

function Carsal() {
  return (
    <Carousel   fade={false}
  indicators
  controls
  interval={2000}
  pause={false}
  className="mern-carousel"
>

      <Carousel.Item>
        <div className="slide slide-react">
          <div className="glass-card">
          
            <img src="img3.png" alt="" />
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="slide slide-node">
          <div className="glass-card">
            <img src="img4.jpg" alt="" />
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="slide slide-mern">
          <div className="glass-card">
            <img src="img6.jpeg" alt="" />
          </div>
        </div>
      </Carousel.Item>

       <Carousel.Item>
        <div className="slide slide-mern">
          <div className="glass-card">
            <img src="img9.jpg" alt="" />
          </div>
        </div>
      </Carousel.Item>
        <Carousel.Item>
        <div className="slide slide-mern">
          <div className="glass-card">
            <img src="img16.png" alt="" />
          </div>
        </div>
      </Carousel.Item>


    </Carousel>
  );
}

export default Carsal;