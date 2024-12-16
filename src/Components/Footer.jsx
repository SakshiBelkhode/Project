import { useContext } from "react";
import { DataContext } from "../context/Usercontext";

const Footer = () => {
  const data = useContext(DataContext);
  return <div>Footer {data}</div>;
};

export default Footer;
