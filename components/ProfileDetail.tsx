"use client";
import React, { useState } from "react";
import classes from "../styles/profile.module.css";
import { FaEdit } from "react-icons/fa";

const ProfileDetail = ({data}: any) => {
  return (
    // <form
    //   className="block w-[70%] m-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ]  justify-center items-center"
    //   onSubmit={submitHandler}
    // >
    //     <div className="w-full">hi</div>
    //   <div className={`${classes.form__group}`}>
    //     <input
    //       name="description"
    //       value={formData.description}
    //       onChange={handleChange}
    //       placeholder="Description"
    //     />
    //   </div>
    //   <div className={`${classes.form__group}`}>
    //     <input
    //       name="description"
    //       value={formData.description}
    //       onChange={handleChange}
    //       placeholder="Description"
    //     />
    //   </div>
    //   <div className={`${classes.form__group}`}>
    //     <input
    //       name="description"
    //       value={formData.description}
    //       onChange={handleChange}
    //       placeholder="Description"
    //     />
    //   </div>
    //   <div className={`${classes.form__group}`}>
    //     <input
    //       name="description"
    //       value={formData.description}
    //       onChange={handleChange}
    //       placeholder="Description"
    //     />
    //   </div>
    //   <div className={`${classes.form__group}`}>
    //     <input
    //       name="description"
    //       value={formData.description}
    //       onChange={handleChange}
    //       placeholder="Description"
    //     />
    //   </div>
    //   <div className={`${classes.form__group}`}>
    //     <input
    //       name="description"
    //       value={formData.description}
    //       onChange={handleChange}
    //       placeholder="Description"
    //     />
    //   </div>

    //   <div className={`${classes.form__group}`}>
    //     <textarea
    //       rows={5}
    //       name="explain"
    //       value={formData.explain}
    //       onChange={handleChange}
    //       placeholder="Explaination"
    //       required
    //     />
    //   </div>

    //   <button className="text-gray-500" type="submit">
    //     Send
    //   </button>
    //   <div dangerouslySetInnerHTML={{ __html: formData.description }}></div>
    //   {formData && formData.subject && <p>You selected: {formData.subject}</p>}
    // </form>
    <div className=" px-1 mx-5">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Applicant Information {data.username}
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500 flex">
          Personal details{" "}
          <button className="flex justify-center text-center items-center ml-2 text-blue-600">
            <FaEdit />
          </button>
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Full name
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Margot Foster
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Email address
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              rishabh.kumbh@gmail.com
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              About
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              mollitia esse quia error voluptatum aperiam. Totam quam obcaecati,
              alias laudantium dolorem eum cumque optio veniam cupiditate enim
              quis nihil doloremque ut fuga ducimus. Corporis recusandae
              mollitia aspernatur ab magnam provident, modi nobis fugiat minima
              omnis id optio, tempore dicta ad.
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Social Sites
            </dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul
                role="list"
                className="divide-y divide-gray-100 rounded-md border border-gray-200"
              >
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">Instagram</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      {"www.instagram.com/in/rishabhgaud"}
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">Github</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      {"www.github.com/in/rishabhgaud"}
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">Linkedin</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      {"www.linkedin.com/in/rishabhgaud"}
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">Leetcode</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      {"www.leetcode.com/rishabh-gaud"}
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">Facebook</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      {"www.facebook.com/in/rishabhgaud"}
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default ProfileDetail;
