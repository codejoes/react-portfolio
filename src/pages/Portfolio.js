import React from "react";

const Portfolio = () => {
  return (
    <article class="work" id="work">
      <h2>Work</h2>

      <figure className="work-images">
        <div>
          <div class="custom-card">
            <h4>
              Password Generator
              <br />
              HTML/CSS/JavaScript
            </h4>
            <a href="https://github.com/codejoes" target="_blank">
              <img
                src="./images/password-generator.svg"
                alt="Project 1 Background Image"
              />
            </a>
          </div>
        </div>
        <div>
          <div className="custom-card">
            <h4>
              Coding Quiz
              <br />
              HTML/CSS/JavaScript
            </h4>
            <a href="https://github.com/codejoes" target="_blank">
              <img
                src="./images/timed-quiz.jpg"
                alt="Project 2 Background Image"
              />
            </a>
          </div>
        </div>
        <div>
          <div className="custom-card">
            <h4>
              <span>&#169;</span>YFITOPS
              <br />
              HTML/CSS/JS/APIs
            </h4>
            <a href="https://qelson.github.io/GroupProject1/" target="_blank">
              <img
                src="./images/yfitops-image.png"
                alt="Project 3 Background Image"
              />
            </a>
          </div>
        </div>
        <div>
          <div className="custom-card">
            <h4>
              <span>&#169;</span>Pawz!
              <br />
              Node/Express/MySQL
            </h4>
            <a href="https://github.com/codejoes/Pawz" target="_blank">
              <img
                src="./images/Screenshot 2023-04-13 124858.png"
                alt="Project 4 Background Image"
              />
            </a>
          </div>
        </div>
      </figure>
    </article>
  );
};

export default Portfolio;
