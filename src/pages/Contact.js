import React from "react";

const Contact = () => {
  return (
    <article className="contact-me" id="contact-me">
      <h2>Contact Me</h2>

      <ul>
        <li>
          {" "}
          <a href="www.github.com/codejoes">
            <img src="./images/github-logo.svg" />
          </a>
        </li>
        <li>
          {" "}
          <a href="mailto:josephscodes@gmail.com">
            <img src="./images/gmail-logo.png" />
          </a>
        </li>
      </ul>
    </article>
  );
};

export default Contact;
