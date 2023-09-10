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
              {`${data.first_name} ${data.last_name}`}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Email address
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {data.email}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              About
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {data.about ? data.about : (<span className="text-red-500">please, update your about!</span>)}
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
                  {data.instagram ? (<a
                      href={`${data.instagram}`}
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                       {data.instagram} 
                    </a>) : (<span className="text-red-500">please, update your instagram!</span>)}
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">Github</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                  {data.github ? (<a
                      href={`${data.github}`}
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                       {data.github} 
                    </a>) : (<span className="text-red-500">please, update your github!</span>)}
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">Linkedin</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                  {data.linkedin ? (<a
                      href={`${data.linkedin}`}
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                       {data.linkedin} 
                    </a>) : (<span className="text-red-500">please, update your linkedin!</span>)}
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">Leetcode</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                  {data.leetcode ? (<a
                      href={`${data.leetcode}`}
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      {data.leetcode}
                    </a>) : (<span className="text-red-500">please, update your leetcode!</span>)}
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">Facebook</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                  {data.facebook ? (<a
                      href={`${data.facebook}`}
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      {data.facebook}
                    </a>) : (<span className="text-red-500">please, update your facebook!</span>)}
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
