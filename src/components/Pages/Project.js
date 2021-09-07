import React from "react";
import "./Project.css";
import {Carousel} from "react-bootstrap";

function Project () {
    return(
        <div>
            <h1 className="text-center mt-3"><i>Project I've Make!</i></h1>
            <div className="container mt-3">
                <div className="row">
           <Carousel>
            <Carousel.Item interval={1000}>
              <img
              style={{ height: "550px"}}
                className="d-block w-100"
                src="./assets/cloudatik.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
              style={{ height: "550px"}}
                className="d-block w-100"
                src="./assets/Dengue.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
              style={{ height: "550px"}}
                className="d-block w-100"
                src="./assets/android.png"
                alt="Third slide"
              />
        </Carousel.Item>
</Carousel>
</div>
</div>
        </div>
    )
}

export default Project;