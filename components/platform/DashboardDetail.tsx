"use client";
import React, { useState } from "react";
import classes from "../styles/profile.module.css";
import { FaEdit } from "react-icons/fa";
import TestListDashboard from "./TestListDashboard";
import QuizList from "./QuizList";

const DashboardDetail = ({ data }: any) => {
  return (
    <div className=" w-full">
      <div className=" sm:px-0">
        <h3 className="text-base font-semibold leading-7 flex items-center justify-center text-gray-900">
          Dashboard
        </h3>
      </div>
      <TestListDashboard data =""/>
      <QuizList data = ""/>   
    </div>
  );
};

export default DashboardDetail;
