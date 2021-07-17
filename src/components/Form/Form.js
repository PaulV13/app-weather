import React, { useState } from "react";

import "./Form.css";

const Form = ({ onSubmit, isDisabled, setDisabled }) => {
  const [citySearch, setCitySearch] = useState("");

  const handleChange = (e) => {
    if (e.target.value === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    setCitySearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ citySearch, setCitySearch });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="city"
        value={citySearch}
        onChange={handleChange}
        placeholder="Ciudad..."
      ></input>
      <button
        className={isDisabled ? "" : "btn-submit"}
        type="submit"
        disabled={isDisabled}
      >
        Buscar
      </button>
    </form>
  );
};

export default React.memo(Form);
