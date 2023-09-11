"use client";
import React, { useState } from "react";
import classes from "../../../styles/testform.module.css";

const CreateTest = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
    description: "",
    explain: "",
    answer: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  });
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event:any) => {
    setSelectedOption(event.target.value);
  };
  const handleChange = (event:any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submitHandler = (e:any) => {
    e.preventDefault();
    console.log("submit", formData);
    // sendEmail(formData);
    setFormData({
      name: "",
      subject: "",
      message: "",
      description: "",
      explain: "",
      answer: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
    });
  };
  return (
    <form
      className=" w-full m-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  justify-center items-center"
      onSubmit={submitHandler}
    >
      <div className={`${classes.form__group}`}>
        <textarea
          rows={5}
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          rows={3}
          name="option1"
          value={formData.option1}
          onChange={handleChange}
          placeholder="option1"
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          rows={3}
          name="option2"
          value={formData.option2}
          onChange={handleChange}
          placeholder="option2"
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          rows={3}
          name="option3"
          value={formData.option3}
          onChange={handleChange}
          placeholder="option3"
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          rows={3}
          name="option4"
          value={formData.option4}
          onChange={handleChange}
          placeholder="option4"
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          rows={1}
          name="answer"
          value={formData.answer}
          onChange={handleChange}
          placeholder="answer"
          required
        />
      </div>

      <div className={`${classes.form__group}`}>
        <textarea
          rows={5}
          name="explain"
          value={formData.explain}
          onChange={handleChange}
          placeholder="Explaination"
          required
        />
      </div>

      <button className="text-gray-500" type="submit">
        Send
      </button>
      <div dangerouslySetInnerHTML={{ __html: formData.description }}></div>
      {formData && formData.subject && <p>You selected: {formData.subject}</p>}
    </form>
  );
};

export default CreateTest;
