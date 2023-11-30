import React from "react";

export default function Lecthurerlogin() {
  return (
    <div>
      <div className="relative">
        <div className="grid grid-cols-1  grid-flow-col  ">
          <img
            className="w-full"
            src="http://lms.slithm.edu.lk/pluginfile.php/1/local_appearance/attachment/0/slithm_login_back%20%281%29.jpg"
            alt=""
          />
        </div>
        <div className="bg-[#ffffff] w-[30rem] h-[30rem]  absolute top-[20rem] left-[45rem] right-0">
          <img
            className="px-[12rem] pt-[4rem]"
            src="http://slithm.edu.lk/wp-content/themes/slithm2017/images/slithm-logo.png"
            alt=""
          />
          <p className="text-center pt-[2rem]">Learning Management System</p>

          {/* username */}
          <div className="sm:col-span-3 py-3">
            <div className="mt-2">
              <div className="px-[3rem]">
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="given-name"
                  placeholder="Username"
                  className="block  rounded-md border-0 py-1.5 px-[6rem] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          {/* pasword */}
          <div className="sm:col-span-3 py-3">
            <div className="mt-2">
              <div className="px-[3rem]">
                <input
                  type="text"
                  name="password"
                  id="password"
                  autoComplete="given-name"
                  placeholder="Password"
                  className="block  rounded-md border-0 py-1.5 px-[6rem] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="pl-[12rem] pt-[1rem]">
            <button
              type="button"
              class="inline-block rounded bg-blue-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-blue-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
            >
              Login
            </button>
          </div>

          <div>
            <p className="pl-[3rem] pt-[2rem] text-sky-400">
              Forgot password ?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
