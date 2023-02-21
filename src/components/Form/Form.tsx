import React from "react";
import useForm from "../../hooks/useForm";

import "./Form.css";

interface FormType {
  onSubmit: (citySearch: string) => void;
}

const Form = ({ onSubmit }: FormType) => {
  const { citySearch, handleChange } = useForm()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(citySearch)
  };

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <input type="text" name="text" value={citySearch} placeholder="City..." onChange={handleChange}></input>
      <button className="btn-submit" type="submit">
        Search
      </button>
    </form>
  );
};

export default React.memo(Form);
