"use client";
import React, { useState } from "react";
import classes from "../../../styles/testform.module.css";
import { subject_details } from "@/utils/problems/page";

const CreateTest = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    cpp: 0,
    cprogramming: 0,
    arithmaticaptitude:0,
    datainterpretation: 0,
    logicalreasoning: 0,
    nonverbalreasoning: 0,
    verbalreasoning: 0,
    verbalability:0,
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
    console.log("submit", {...formData,author:"rishabh"});
    // post api 
    setFormData({
      title: "",
      description: "",
      cpp: 0,
      cprogramming: 0,
      arithmaticaptitude:0,
      datainterpretation: 0,
      logicalreasoning: 0,
      nonverbalreasoning: 0,
      verbalreasoning: 0,
      verbalability:0,
    });
    closeModal()
  };
  return (
    <div className="mr-3">
      <button
        className="block float-right  mt-2  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
        type="button"
        onClick={toggleModal}
      >
        Create Test
      </button>

      {modalVisible && (
        <div
          id="popup-modal"
          className="fixed  z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full max-w-full  "
        >
          <div className="relative w-full max-w-xl max-h-full right-[-40%] top-[10%]">
            <div className="relative bg-white rounded-lg shadow  ">
              <button
                type="button"
                className="absolute top-3  right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
                onClick={closeModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 mt-2 ml-2 ">
                
                <form
                  className=" w-full my-5 ml-1  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  justify-center items-center"
                  onSubmit={submitHandler}
                >

                  <div className={`${classes.form__group} mt-1`}>
                    <input
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Quiz Title"
                      required
                    />
                  </div>
                  <div className={`${classes.form__group}`}>
                    <textarea
                      rows={2}
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Description"
                      required
                    />
                  </div>
                 
                    {
                      subject_details.map((subjectData, index) => {
                        return (
                          <div key={index} className={`${classes.form__group}`}>
                            <label>{subjectData.name}</label>
                          <input
                                  type="number"
                                  name={subjectData.name}
                                  value={formData[subjectData['name'] as keyof typeof formData]}
                                  onChange={handleChange}
                                  placeholder={subjectData.name}
                                  
                                />
                        </div>
                        );
                      })
                    }
                 
                 
                  <button
                  type="submit"
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Send
                </button>
                </form>
               
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CreateTest;
