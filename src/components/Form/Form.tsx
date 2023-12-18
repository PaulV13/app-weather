import React, { useState } from "react";

import "./Form.css";
interface FormType {
  onSubmit: (citySearch: string) => void;
}

const Form = ({ onSubmit }: FormType) => {
  const [citySearch, setCitySearch] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCitySearch(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(citySearch)
    setCitySearch("")
  };

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <input type="text" name="text" value={citySearch} placeholder="City..." onChange={handleChange}></input>
      <button className="btn-submit" type="submit" disabled={citySearch === ""} >
        Search
      </button>
    </form>
  );
};

export default React.memo(Form);
