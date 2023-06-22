import "./style.css";
import photo from "src/assets/images/home-photo.png";
import Gallery from "./Gallery";
const PublicEvents = () => {
  return (
    <div>
      <div className="home-photo">
        <h1>PUBLIC EVENTS</h1>
        <img src={photo} alt="homephoto" />
      </div>
      <div className="row-1">
        <div className="video-part">
          {/* <video src={video} type="video/mp4" className="video" controls>
            djkssd
          </video> */}
          <Gallery />
        </div>
        <div className="content-part">
          <h5>Upcoming</h5>
          <h3>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididun
          </p>
        </div>
      </div>
      <div className="row-2">
        <div className="content-part">
          <h5>Completed</h5>
          <h3>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididun
          </p>
        </div>
        <div className="video-part">
          {/* <video src={video} type="video/mp4" className="video" controls>
            djkssd
          </video> */}
          <Gallery />
        </div>
      </div>
      <div className="row-1">
        <div className="video-part">
          {/* <video src={video} type="video/mp4" className="video" controls>
            djkssd
          </video> */}
          <Gallery />
        </div>
        <div className="content-part">
          <h5>Upcoming</h5>
          <h3>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididun
          </p>
        </div>
      </div>
      <div className="row-2">
        <div className="content-part">
          <h5>Completed</h5>
          <h3>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididun
          </p>
        </div>
        <div className="video-part">
          {/* <video src={video} type="video/mp4" className="video" controls>
            djkssd
          </video> */}
          <Gallery />
        </div>
      </div>
      <div className="next-page">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>&gt;</div>
      </div>
    </div>
  );
};

export default PublicEvents;
