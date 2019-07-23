import React from "react";

const Form = props => (
  <form>
    <div className="form-group">
      <label htmlFor="topic">
        <strong>Artist Name</strong>
      </label>
      <input
        className="form-control"
        id="topic"
        type="text"
        value={props.q}
        placeholder="enter the artist name"
        name="q"
        onChange={props.handleInputChange}
        required
      />
      
    </div>
    <div className="pull-right">
      <button
        onClick={props.handleFormSubmit}
        type="submit"
        className="btn btn-lg btn-danger"
      >
        Submit
      </button>
    </div>
  </form>
);

export default Form;
