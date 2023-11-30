import React from "react";
import "./Navbar.css";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function classNames2(...classes) {
  return classes.filter(Boolean).join(" ");
}

function classNames3(...classes) {
  return classes.filter(Boolean).join(" ");
}

function classNames4(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <div class="grid grid-cols-1    xl:grid-cols-2 ">
      <div className="  flex ">
        <img
          className="pl-28 pr-0 "
          src="https://www.slithm.edu.lk/wp-content/uploads/2022/03/slithum-logo-main.jpg"
          alt="logo"
        />
        <img
          className="glogo "
          src="https://www.logolynx.com/images/logolynx/99/993fd37cbf6e5b933351ef6363984ab3.png"
          alt=""
        />
      </div>
      <div className="grid grid-rows-2  ">
        <div className=" pl-20 pt-3 bg-[#062475] rounded-full">
          {/* publication dropdown */}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="pr-8 inline-flex w-full justify-center gap-x-1 rounded-md  px-0 py-0   text-white   ">
                Publications
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Annual Reports
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      // <a
                      //   href="#"
                      //   className={classNames(
                      //     active
                      //       ? "bg-gray-100 text-gray-900"
                      //       : "text-gray-700",
                      //     "block px-4 py-2 text-sm"
                      //   )}
                      // >
                      <Link
                        to="ReserchPublication"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Reserch Publications
                      </Link>
                      // </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        News Magazines
                      </a>
                    )}
                  </Menu.Item>
                  <form method="POST" action="#"></form>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          {/* <Link to="Internationalstudents">
            <button className="pr-10 text-white">international Students</button>
          </Link> */}

          <Link to="Internationalstudents" className="pr-10 text-white">
           international Students
          </Link>

          <button className="pr-10 text-white">Facilities & activities</button>

          {/* LMS dropdown */}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="pr-8 inline-flex w-full justify-center gap-x-1 rounded-md  px-0 py-0   text-white   ">
                LMS
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      // <a
                      //   href="StudentLogin"
                      //   className={classNames2(
                      //     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      //     'block px-4 py-2 text-sm'
                      //   )}
                      // >

                      <Link
                        to="StudentLogin"
                        className={classNames2(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Student Login
                      </Link>

                      // </a>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      // <a
                      //   href="#"
                      //   className={classNames2(
                      //     active
                      //       ? "bg-gray-100 text-gray-900"
                      //       : "text-gray-700",
                      //     "block px-4 py-2 text-sm"
                      //   )}
                      // >

                      <Link
                        to="Lecthurerlogin"
                        className={classNames2(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Lecthure Login
                      </Link>
                      // </a>
                    )}
                  </Menu.Item>
                  <form method="POST" action="#"></form>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <button className="pr-10 text-white">Library</button>
          <button className="pr-10  bg-[#ffffff] hover:bg-blue-700 text-black font-light  py-2 px-4 rounded-full  ">
            Apply Now
          </button>
        </div>
        <div className="pl-10 pt-3 ">
          <button className="pr-5">Home</button>

          {/* About Us Drop down */}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="pr-5 inline-flex w-full justify-center gap-x-1 rounded-md  px-0 py-0   text-black   ">
                About Us
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-blue"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames3(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Corporate Information
                      </a>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames3(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Administration
                      </a>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames3(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Academic Staff
                      </a>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames3(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Policies, Procedures & Art
                      </a>
                    )}
                  </Menu.Item>
                  <form method="POST" action="#"></form>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <button className="pr-5">Courses</button>
          <button className="pr-5">Provincial Colleges</button>

          {/* News amd events */}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="pr-8 inline-flex w-full justify-center gap-x-1 rounded-md  px-0 py-0   text-black   ">
                News and Events
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-black"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames4(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        News and Events
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames4(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Procurement
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames4(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Job and Bank
                      </a>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames4(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Vacancies
                      </a>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames4(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Proposed Degree Programmes
                      </a>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames4(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Gallery
                      </a>
                    )}
                  </Menu.Item>
                  <form method="POST" action="#"></form>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <button className="pr-5">Samudra Training Hotel</button>
          <button className="pr-5 ">Contact Us</button>
        </div>
      </div>
    </div>
  );
}
