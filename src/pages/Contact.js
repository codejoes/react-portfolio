import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => console.log(values);

  return (
    <article className="contact-me" id="contact-me">
      <h2>Contact Me</h2>

      <div className="container mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              className="form-control"
              type="text"
              id="name"
              {...register("name", {
                required: "Required",
                pattern: {
                  value:
                    /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/,
                  message: "Name required!",
                },
              })}
            />
            {errors.name && errors.name.message}
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-control"
              type="email"
              id="email"
              {...register("email", {
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address!",
                },
              })}
            />
            {errors.email && errors.email.message}
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea
              className="form-control"
              type="mesage"
              id="message"
              {...register("message", {
                required: "Required",
                validate: (value) => value !== "" || "Cannot be empty!",
              })}
            />
            {errors.message && errors.message.message}
          </div>
          <button className="btn btn-danger" type="submit">
            {formStatus}
          </button>
        </form>
      </div>
    </article>
  );
};

export default Contact;
