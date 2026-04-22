"use client";

import { ReactNode } from "react";
import ProgressBarProvider from "../Progressbar";

const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ProgressBarProvider>{children}</ProgressBarProvider>
    </>
  );
};

export default AppProviders;
