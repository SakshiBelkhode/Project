import { useContext } from "react";
import { DataContext } from "../context/Usercontext";

const Header = () => {
  const data = useContext(DataContext);
  return <div>Header {data}</div>;
};

export default Header;
