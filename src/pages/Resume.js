import React from "react";

const Resume = () => {
  return (
    <div className="resume">
      <a href="./files/Fake Resume.pdf" download>
        Download My Resume
      </a>

      <ul className="">
        Front End: -------------------------------------------------------------
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>

      <ul className="footer-space">
        Back End: -------------------------------------------------------------
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
};

export default Resume;
