import React from "react";
import classes from "../../styles/form.module.css";

const Form = () => {
  const submitHandler = () => {
    e.preventDefault();
  };
  return (
    <form autoComplete="off" action="https://formspree.io/f/mknabdpp" method="POST" className={`${classes.form}`} onSubmit={submitHandler}>
      <div className={`${classes.form__group}`}>
        <input
          type="text" 
          id="name"
          name="name"
          placeholder="Your Name" required />
      </div>
      <div className={`${classes.form__group}`}>
        <input 
        type="email" 
        id="email"
        name="email"
        placeholder="Email Address" required />
      </div>
      <div className={`${classes.form__group}`}>
        <input 
        type="text" 
        id="subject"
        name="subject"
        placeholder="Subject" required />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea 
        type="text"
        id="message" 
        name="message"
        rows={4} placeholder="Message" required />
      </div>

      <button className="primary__btn" type="submit"> Send </button>
    </form>
  );
};

export default Form;
