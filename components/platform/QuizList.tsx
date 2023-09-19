import React from "react";
import CreateTest from "./createTest/CreateTest";

const QuizList = ({ data }: any) => {
  return (
    <>
  <CreateTest/>
    <div className="mt-6">
      <dl className="divide-y divide-gray-100">
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Quiz</dt>
          <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            <ul
              role="list"
              className="divide-y divide-gray-100 rounded-md border border-gray-200"
            >
              <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                <div className="flex w-0 flex-1 items-center">
                  <div className="ml-4 flex min-w-0 flex-1 gap-2">
                    <span className="truncate font-medium">CAT-1</span>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <a
                    href={``}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Open Quiz
                  </a>
                </div>
              </li>
              <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                <div className="flex w-0 flex-1 items-center">
                  <div className="ml-4 flex min-w-0 flex-1 gap-2">
                    <span className="truncate font-medium">SSC-1</span>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <a
                    href={`${data.instagram}`}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Open Quiz
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

export default QuizList;
