import React from "react";
import "./index.css";

const Form = () => {
  return (
    <div className='form'>
      <div className="container">
        <form action="">
          <label htmlFor="">What Do you think?</label>
          <input type="text"/>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
