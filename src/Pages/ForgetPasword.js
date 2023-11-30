import React from "react";

export default function ForgetPasword() {
  return (
    <div>
      <div>
        <div className="flex">
          <img
            className="pl-[2rem] pt-[1rem] pb-[1rem]"
            src="http://lms.slithm.edu.lk/theme/image.php/fop/theme/1645503902//icons/apps"
            alt=""
          />
          <p className="pt-[1rem] pl-[105rem]">|</p>
          <p className="pt-[1rem] pl-[1rem]">Login</p>
        </div>

        <hr />
        <p className="pl-[3rem] pt-[2rem]">
          To reset your password, submit your username or your email address
          below. If we can find you in the database, an email will be sent to
          your email address, with instructions how to get access again.
        </p>
      </div>

      <div className="pt-[2rem] px-[2rem]">
        <fieldset class="border border-solid border-1 border-[#000000] p-3">
          <legend class="text-sm ">
            <p className="text-bold text-2xl">Search by username</p>{" "}
          </legend>

          <div className="">
            <div className="sm:col-span-3 py-3 flex ">
              <label
                htmlFor="first-name"
                className="pt-[1rem] pr-[1rem] pl-[10rem] block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2 ">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block px-[5rem] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="pl-[20rem] ">
              <button
                type="button"
                class="inline-block  rounded bg-blue-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-blue-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
              >
                Search
              </button>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="pt-[2rem] px-[2rem]">
        <fieldset class="border border-solid border-1 border-[#000000] p-3">
          <legend class="text-sm ">
            <p className="text-bold text-2xl">Search by email address</p>{" "}
          </legend>

          <div className="">
            <div className="sm:col-span-3 py-3 flex ">
              <label
                htmlFor="Emailaddress"
                className="pt-[1rem] pr-[1rem] pl-[10rem] block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2 ">
                <input
                  type="text"
                  name="Emailaddress"
                  id="Emailaddress"
                  autoComplete="given-name"
                  className="block px-[5rem] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="pl-[20rem] ">
              <button
                type="button"
                class="inline-block  rounded bg-blue-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-blue-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
              >
                Search
              </button>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
