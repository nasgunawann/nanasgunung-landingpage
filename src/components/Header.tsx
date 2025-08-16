import React from "react";
import Logo from "../assets/logo.png";
import {
  Disclosure,
  DisclosurePanel,
  DisclosureButton,
  Transition,
} from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faCogs,
  faFolderOpen,
  faPaperPlane,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  return (
    <Disclosure
      as="header"
      className="sticky top-0 z-50 bg-orange-500/80 backdrop-blur-md font-poppins"
    >
      {({ open }) => (
        <>
          <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 text-white">
            <img src={Logo} alt="Nanasgunung Logo" className="h-14" />

            {/* Desktop menu */}
            <ul className="hidden md:flex space-x-6 text-l font-medium">
              <li>
                <a
                  href="#home"
                  className="hover:bg-white hover:text-orange-500 transition rounded-full px-3 py-2"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:bg-white hover:text-orange-500 transition rounded-full px-3 py-2"
                >
                  Tentang
                </a>
              </li>
              <li>
                <a
                  href="#layanan"
                  className="hover:bg-white hover:text-orange-500 transition rounded-full px-3 py-2"
                >
                  Layanan
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:bg-white hover:text-orange-500 transition rounded-full px-3 py-2"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="bg-green-500 hover:bg-white hover:text-green-500 transition rounded-full px-3 py-2"
                >
                  Mulai Dengan Kami
                </a>
              </li>
            </ul>

            {/* Burger button mobile */}
            <div className="md:hidden">
              <DisclosureButton aria-label="Toggle Menu">
                <FontAwesomeIcon icon={open ? faTimes : faBars} size="lg" />
              </DisclosureButton>
            </div>
          </nav>

          {/* Mobile menu with Transition */}
          <Transition
            show={open}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-2"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-2"
          >
            <DisclosurePanel className="md:hidden absolute top-full left-0 w-full">
              <div className="w-full bg-white shadow divide-y divide-gray-50">
                <a
                  href="#home"
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 transition"
                >
                  <FontAwesomeIcon icon={faHome} className="text-orange-500" />
                  <span>Home</span>
                </a>
                <a
                  href="#about"
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 transition"
                >
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    className="text-orange-500"
                  />
                  <span>Tentang</span>
                </a>
                <a
                  href="#layanan"
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 transition"
                >
                  <FontAwesomeIcon icon={faCogs} className="text-orange-500" />
                  <span>Layanan</span>
                </a>
                <a
                  href="#portfolio"
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 transition"
                >
                  <FontAwesomeIcon
                    icon={faFolderOpen}
                    className="text-orange-500"
                  />
                  <span>Portfolio</span>
                </a>
                <a
                  href="#contact"
                  className="flex items-center space-x-3 px-4 py-3 text-white bg-gradient-to-r from-green-500 to-green-400 hover:opacity-90 transition"
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="text-white" />
                  <span>Mulai Dengan Kami</span>
                </a>
              </div>
            </DisclosurePanel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
