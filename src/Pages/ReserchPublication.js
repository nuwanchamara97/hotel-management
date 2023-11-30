import React from "react";
import Navbar from "../Componnents/Navbar";

export default function ReserchPublication() {
  return (
    <div>
      {/* section 1-------------------------------------------- */}
      <Navbar />

      {/* section 2---------------------------------------------------- */}

      <div className="grid grid-cols-1 grid-flow-col ">
        <div className=" relative">
          <img
            src="https://www.slithm.edu.lk/wp-content/uploads/2021/05/accountant-hand-use-calculate-financial-report-counting-calculator-checking-documents-1.png"
            alt=""
          />
        </div>

        <div className="absolute top-[61rem] left-[57rem] right-0">
          <svg class="animate-bounce w-6 h-6 ...">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg>
          </svg>
        </div>
      </div>

      {/* section 3------------------------------------------------------ */}

      <section>
      <div className="pb-[5rem]">
        <div data-aos="fade-up">
          <h1 className="text-5xl text-[#00ae74] text-center pt-[5rem]">
            Annual Reports
          </h1>
        </div>

        <div data-aos="fade-up ">
          <div data-aos="fade-up">
            <p className="pt-[2rem] text-center">
              We wish to keep you updated about what we do at SLITHM. Our annual
              reports include our key achievements and milestones. Find the
              latest annual reports updated <br /> below. Read more on our
              annual reports to find out what we have been doing recently.
            </p>
          </div>
        </div>

        <div data-aos="fade-up">
          <div className="pt-[5rem] px-[10rem]">
            {/* 1col */}
            <div className="grid grid-cols-2 grid-flow-col gap-4 ">
              <div className="flex ">
                <span>
                  <p className="hover:text-[#00ae74]">Annuwal Reports 2021</p>

                  <span className="text-[#a5a5a5]">
                    -Uploaded-january 31,2023
                  </span>
                </span>
                <div className="pt-[1rem] pl-[25rem] pb-[1rem] flex">
                  <button className=" bg-[#000000] text-white py-[0.5rem] px-[1rem] hover:bg-[#00ae74] flex">
                    Download
                  </button>
                </div>
              </div>
              <div>
                <div className="flex ">
                  <span>
                    <p className="hover:text-[#00ae74]">Annuwal Reports 2020</p>

                    <span className="text-[#a5a5a5]">
                      -Uploaded-january 31,2023
                    </span>
                  </span>
                  <div className="pt-[1rem] pl-[25rem] pb-[1rem] flex">
                    <button className=" bg-[#000000] text-white py-[0.5rem] px-[1rem] hover:bg-[#00ae74] flex">
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <hr />
            </div>

            {/* 2col */}
            <div className="grid grid-cols-2 grid-flow-col gap-4 ">
              <div className="flex ">
                <span>
                  <p className="hover:text-[#00ae74]">Annual Report 2019</p>

                  <span className="text-[#a5a5a5]">
                    -Uploaded-February 1,2022
                  </span>
                </span>
                <div className="pt-[1rem] pl-[25rem] pb-[1rem] flex">
                  <button className=" bg-[#000000] text-white py-[0.5rem] px-[1rem] hover:bg-[#00ae74] flex">
                    Download
                  </button>
                </div>
              </div>
              <div>
                <div className="flex ">
                  <span>
                    <p className="hover:text-[#00ae74]">Annuwal Reports 2018</p>

                    <span className="text-[#a5a5a5]">
                      -Uploaded-january 1,2022
                    </span>
                  </span>
                  <div className="pt-[1rem] pl-[25rem] pb-[1rem] flex">
                    <button className=" bg-[#000000] text-white py-[0.5rem] px-[1rem] hover:bg-[#00ae74] flex">
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <hr />
            </div>

            {/* 3 col */}
            <div className="grid grid-cols-2 grid-flow-col gap-4 ">
              <div className="flex ">
                <span>
                  <p className="hover:text-[#00ae74]">Annual Report 2017</p>

                  <span className="text-[#a5a5a5]">
                    -Uploaded-January20,2022
                  </span>
                </span>
                <div className="pt-[1rem] pl-[25rem] pb-[1rem] flex">
                  <button className=" bg-[#000000] text-white py-[0.5rem] px-[1rem] hover:bg-[#00ae74] flex">
                    Download
                  </button>
                </div>
              </div>
              <div>
                <div className="flex ">
                  <span>
                    <p className="hover:text-[#00ae74]">Annuwal Reports 2021</p>

                    <span className="text-[#a5a5a5]">
                      -Uploaded-january 31,2023
                    </span>
                  </span>
                  <div className="pt-[1rem] pl-[25rem] pb-[1rem] flex">
                    <button className=" bg-[#000000] text-white py-[0.5rem] px-[1rem] hover:bg-[#00ae74] flex">
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <hr />
            </div>

            {/* 4 col */}
            <div className="grid grid-cols-2 grid-flow-col gap-4 ">
              <div className="flex ">
                <span>
                  <p className="hover:text-[#00ae74]">Annual Report 2015</p>

                  <span className="text-[#a5a5a5]">
                    -Uploaded-January20,2022
                  </span>
                </span>
                <div className="pt-[1rem] pl-[25rem] pb-[1rem] flex">
                  <button className=" bg-[#000000] text-white py-[0.5rem] px-[1rem] hover:bg-[#00ae74] flex">
                    Download
                  </button>
                </div>
              </div>
              <div></div>
              <hr />
            </div>
          </div>
        </div>
      </div>

      </section>


      {/* section 4 */}

      <section>
        <div><h1>Research Publications</h1></div>
      </section>

    </div>
  );
}
