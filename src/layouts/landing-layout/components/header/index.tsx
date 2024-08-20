import React from "react";
import HeaderLogo from "../logo";
import Menu from "../menu";
import HamburgerIcon from "@/assets/icons/hamburger-icon";
import Login from "@/features/login";

const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <nav className="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-10 top-0 left-0 border-b border-gray-200 box-border">
        <div className="container flex items-center justify-between flex-wrap mx-auto md:flex-nowrap">
          <HeaderLogo />
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <HamburgerIcon />
          </button>
          <Menu open={open} setOpen={setOpen} />
        </div>
      </nav>
      <Login onClose={() => setShowModal(false)} show={showModal} />
    </>
  );
};

export default Header;
