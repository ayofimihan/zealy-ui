import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6 bg-red border-l border-r  border-gray-600 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center pt-2">
          <Image src="/buildspace-logo.png" width={50} height={50} alt="logo" />
          <span className="text-white font-bold ml-2 text-sm">Buildspace</span>
        </div>
        <div className="md:flex space-x-4 text-white ml-5 text-sm font-semibold hidden">
          <div className="mt-3 text-xs font-light">
            <a href="/" className="hover:text-darkGrey">Create a Community</a>
          </div>
          <div className="glass-button-dark-bg">
            <a href="/">Login</a>
          </div>
          <div className="glass-button-white-bg bg-white text-black">
            <a href="/">Create an Account</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
