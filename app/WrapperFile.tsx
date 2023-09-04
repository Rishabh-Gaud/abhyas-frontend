"use client";

import React from "react";
import { RecoilRoot } from "recoil";

type wrapperprops = {
    children:any;
}

const RecoilRootWrapper:React.FC<wrapperprops> = ({ children }) => {
  return <RecoilRoot >{children}</RecoilRoot>;
}

export default RecoilRootWrapper;