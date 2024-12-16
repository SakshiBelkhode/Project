const Navbar = () => {
  return (
    <nav className=" bg-emerald-500    flex items-center justify-between  py-5 px-10">
      <h2 className="text-2xl ">sheriyans</h2>
      <div className="flex gap-8  items-center">
        <h4 className="text-xl"> Contact</h4>
        <h4 className="text-xl">About </h4>
        <h4 className="text-xl"> Services </h4>
        <h4 className="text-xl">Your Account</h4>
      </div>
    </nav>
  );
};

export default Navbar;
