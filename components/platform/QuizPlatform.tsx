import React from "react";
import QuizList from "./QuizList";

const QuizPlatform = () => {
  return (
    <div className=" w-full">
      <div className=" sm:px-0">
        <h3 className="text-base font-semibold leading-7 flex items-center justify-center text-gray-900">
          Quiz Dashboard
        </h3>
      </div>
      <QuizList data="" />
    </div>
  );
};

export default QuizPlatform;
