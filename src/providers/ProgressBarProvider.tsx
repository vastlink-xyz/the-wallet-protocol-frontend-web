"use client";
import React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressBarProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#7bcdc6"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default ProgressBarProvider;