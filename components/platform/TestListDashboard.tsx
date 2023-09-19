import React from "react";
import CreateTest from "./createTest/CreateTest";

const TestListDashboard = ({data}: any) => {
  return (
    <>
     {/* <div className=" float-right mr-5 ">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Create Test
        </button>
      </div> */}
      <CreateTest/>
      <div className="mt-6">
      <dl className="divide-y divide-gray-100">
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">
            Coding Test
          </dt>
          <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            <ul
              role="list"
              className="divide-y divide-gray-100 rounded-md border border-gray-200"
            >
              <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                <div className="flex w-0 flex-1 items-center">
                  <div className="ml-4 flex min-w-0 flex-1 gap-2">
                    <span className="truncate font-medium">Google OA</span>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <a
                    href={`${data.instagram}`}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Open Test
                  </a>
                </div>
              </li>
              <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                <div className="flex w-0 flex-1 items-center">
                  <div className="ml-4 flex min-w-0 flex-1 gap-2">
                    <span className="truncate font-medium">Twitter OA</span>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <a
                    href={`${data.instagram}`}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Open Test
                  </a>
                </div>
              </li>
              <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                <div className="flex w-0 flex-1 items-center">
                  <div className="ml-4 flex min-w-0 flex-1 gap-2">
                    <span className="truncate font-medium">Meta OA</span>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <a
                    href={`${data.instagram}`}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Open Test
                  </a>
                </div>
              </li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
    </>
  );
};

export default TestListDashboard;
