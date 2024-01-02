"use client";

import ReduxProvider from "../_redux/provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export default Providers;
