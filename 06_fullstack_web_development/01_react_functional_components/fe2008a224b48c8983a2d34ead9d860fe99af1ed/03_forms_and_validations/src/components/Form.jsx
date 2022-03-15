import React from "react";

const Form = () => {
  const [formText, setFormText] = React.useState(formText);
  const [error, setError] = React.useState("");
  const stringPatternValidation = (stringVal) => {
    return /\s/g.test(stringVal);
  };
  const handleInputText = (event) => {
    const value = event.target.value;
    setFormText(event.target.value);
    stringPatternValidation(value) ? setError("*no spaces allowed") : setError("");
  };
  // const handleFormInfos = (event) => {
  //   return setFormText(event.target.value);
  // };

  return (
    <form onSubmit={handleInputText}>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          onChange={handleInputText}
          type="text"
          className="form-control"
          id="firstName"
          placeholder="a space"
          value={formText}
        />
        <p className="text-danger">{error && error}</p>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
