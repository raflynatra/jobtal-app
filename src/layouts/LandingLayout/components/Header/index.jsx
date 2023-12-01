import React, { useState } from "react";
import UserLogin from "../../../../components/User/UserLogin";
import HeaderLogo from "./Logo";
import Menu from "./Menu";
import HamburgerIcon from "../../Icons/HamburgerIcon";

function Header() {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-10 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex items-center justify-between flex-wrap mx-auto md:flex-nowrap">
          <HeaderLogo />
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <HamburgerIcon />
          </button>
          <Menu open={open} setOpen={setOpen} />
        </div>
      </nav>
      <UserLogin onClose={() => setShowModal(false)} show={showModal} />
    </>
  );
}

export default Header;
