import React from "react";
type Props = {
  children: React.ReactNode;
};

const LoginLayout = ({ children }: Props) => {
  return <div className="font">{children}</div>;
};

export default LoginLayout;
