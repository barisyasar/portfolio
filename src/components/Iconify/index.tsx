"use client";
import { Icon } from "@iconify/react";

type IconifyProps = {
  icon: string;
  rest?: any;
};

const Iconify: React.FC<IconifyProps> = ({ icon, ...rest }) => {
  return <Icon className="iconify" width="100%" icon={icon} {...rest} />;
};

export default Iconify;
