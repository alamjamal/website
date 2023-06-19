import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Gallery.css";
class Gallery extends React.Component {
  render() {
    return (
      <div className="carousel112">
        <Carousel autoPlay interval="2000" transitionTime="1000" infiniteLoop>
          <div>
            <img
              src="https://media.istockphoto.com/id/1302742624/photo/aerial-view-of-lake-tahoe-shoreline-with-mountains-and-turquoise-blue-waters.jpg?b=1&s=170667a&w=0&k=20&c=AiB8q6RRezpfRWizgJh1aLrzP9012ZNywdzzxMcG3SE="
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1506057213367-028a17ec52e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/id/1388623445/photo/bear-skin-state-trail-bridge.jpg?b=1&s=170667a&w=0&k=20&c=guB8b7svJuFkYd0L9SecXafAHn5eI2dZSBolrZlaA4s="
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1475776408506-9a5371e7a068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>

          <div>
            <img
              src="https://media.istockphoto.com/id/1388623445/photo/bear-skin-state-trail-bridge.jpg?b=1&s=170667a&w=0&k=20&c=guB8b7svJuFkYd0L9SecXafAHn5eI2dZSBolrZlaA4s="
              alt=""
            />
          </div>
        </Carousel>
      </div>
    );
  }
}
export default Gallery;
