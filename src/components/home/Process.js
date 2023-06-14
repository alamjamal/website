import React from "react";
import processImage from "./images/whiteboard-workflow1.jpeg";
import "./Process.css";
function Process() {
  return (
    <div className="process-section">
      <div className="process-image">
        <div className="process-section-img">
          <img src={processImage} alt="processimage" />
        </div>
        <div className="box-background" />
      </div>
      <div className="process-theory">
        <p className="first-p">How does it work</p>
        <h1>Our Process is easy to understand</h1>
        <p>
          Each intellectually disabled child's needs and abilities are assessed.
          This assessment determines learning goals, preferences, and
          challenges. The teacher evaluates. Based on the assessment,
          E-Deekshaam customises learning plans for each child. The plan details
          the child-specific learning objectives, content, and activities.
        </p>
        <div className="process-theory-list">
          <ul>
            <li>
              <i className="bi bi-check-circle" />
              {/* //<CheckCircleOutlineIcon/>  */}
              <p>
                E-Deekshaam's interactive lessons, videos, and games are
                tailored to the child's needs and pace.
              </p>
            </li>
            <li>
              <i className="bi bi-check-circle" />
              <p>
                E-Deekshaam adjusts the child's education plan and content as
                they progress.
              </p>
            </li>
            <li>
              <i className="bi bi-check-circle" />
              <p>
                It will help or challenge the child based on performance and
                feedback.It also tracks and evaluates intellectually disabled
                children.
              </p>
            </li>
            <li>
              <i className="bi bi-check-circle" />
              <p>
                The system can track children's progress for teachers, parents,
                and therapists.
              </p>
            </li>
            <li>
              <i className="bi bi-check-circle" />
              <p>
                E-Deekshaam reports and analyses the child's strengths,
                weaknesses, and progress. These reports help teachers and staff
                make data-driven decisions. Progress tracking and assessment
                enable individualised instructional strategies and support for
                the child.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Process;
