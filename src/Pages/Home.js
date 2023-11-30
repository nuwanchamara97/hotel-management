import React from "react";
import Navbar from "../Componnents/Navbar";
import Carousel from "../Componnents/Carousel";
import Footer from "../Componnents/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import "./Home.css";
import Section4Carousel from "../Componnents/Section4Carousel";

AOS.init();

export default function Home() {
  return (
    <div>
      {/* section 1 ....................*/}

      <Navbar />

      {/* section 2 ......................*/}
      <Carousel />

      {/* section 3 ...................*/}

      <section>
        <div className="grid grid-cols-1    xl:grid-cols-2  bg-[#e5eef1]">
          <div>
            <img
              className="pt-40 pl-40 pb-40"
              src="https://www.slithm.edu.lk/wp-content/uploads/2022/02/Group_472.png"
              alt=""
            />
          </div>
          <div className="px-[5rem] xl:pr-80">
            <div data-aos="fade-up">
              <h1 className="pt-20 text-5xl text-[#00ae74] ">
                Welcome to SLITHM
              </h1>
            </div>

            <div data-aos="fade-up">
              <p className="pt-10 italic font-semibold">
                Open up career prospects locally and globally with
                internationally recognized hotel& hospitality <br /> programs.
              </p>
            </div>

            <div data-aos="fade-up">
              <p className="indent-4 md:indent-0 pt-5 text-justify">
                Established in 1964,the Sri Lanka Institute of Tourism and Hotel
                Management (SLITHM) is the only government-approved premier
                Institute in Sri Lanka. The purpose of this establishment was to
                train young men and women to advance further into the
                hospitality and travel industry. SLITHM is managed by the
                Ministry of Tourism.Further,in order to facilitate student
                island-wide, provincial schools have been set up in
                Anuradhapura, Bandarawela, Kandy, Koggala, Rathnapura,
                Kurunegala, Jaffna and Pasikudah.
              </p>
            </div>

            <div className="pt-20 flex">
              <button
                type="button"
                className="flex gap-4 inline-block rounded bg-primary px-16 pb-4 pt-4 text-xl font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-[#00ae74] bg-[#343434] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                VIEW DETAILS
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}

      <section>
        <div className="relative ">
          <div className="grid grid-rows-2 grid-flow-col  ">
            <div className="bg-[#00ae74] pb-[20rem] relative">
              <div data-aos="fade-up  ">
                <h1 className="text-white font text-5xl font-semibold text-center pt-40">
                  Our Areas
                </h1>
                <div data-aos="fade-up">
                  <p className="text-white pt-[3rem] px-[30rem] text-center">
                    At SLITHM we aspire to provide our students with the best
                    experience in their relevant fields catering towards the
                    advancement of their knowledge.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className=" ">
              <div className="pt-[30rem] px-[45rem]">
                <button
                  type="button"
                  className=" flex gap-4 inline-block rounded bg-primary px-16 pb-4 pt-4 text-xl font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-[#00ae74] bg-[#343434] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  VIEW DETAILS
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className=" absolute top-[30rem] left-0 right-0 px-[18rem] ">
            <Section4Carousel />
          </div>
        </div>
      </section>

      {/* section 5........................................ */}

      <section>
        <div className="bg-[#00b2ec] pb-[10rem] h-full">
          <div data-aos="fade-up">
            <h1 className="text-white font-semibold text-center text-4xl  pt-[5rem]">
              Facilities at SLITHM
            </h1>
          </div>
          <div data-aos="fade-up">
            <p className="text-center text-white text-1xl pt-10">
              SLITHM seeks to offer many extra facilities to the students
              enabling them to experience a holistic education whist <br />
              devaloping both their soft skils as well as their hard skils
            </p>
          </div>
          <div className="pt-16">
            <div className=" grid grid-cols-5 gap-4   ">
              <div className=""></div>
              <div className=" w-full">
                <div className="flip-card w-full">
                  <div className="flip-card-inner w-full">
                    <div className="flip-card-front w-full">
                      <img
                        className="pt-10 pl-[9rem]"
                        src="	https://www.slithm.edu.lk/wp-content/uploads/2021/05/cooking-1.png"
                        alt="Avatar"
                      />
                      <p className="text-2xl font-semibold pt-5">
                        Training Kitchen
                      </p>
                      <p className="pt-5 px-[2rem]">
                        A fully equipped and state-of-the-art kitchen for
                        students to use.{" "}
                      </p>
                    </div>
                    <div className="flip-card-back w-full relative ">
                      <img
                        className="object-cover h-full w-full"
                        src="	https://www.slithm.edu.lk/wp-content/uploads/2022/02/training_kitchen.jpg"
                        alt=""
                      />
                      <h1 className="absolute top-[5rem] left-[7rem] text-[#00b2ec] text-2xl font-semibold">
                        Training Kitchen
                      </h1>
                      <p className="absolute top-[8rem] px-[2rem]">
                        A fully equipped and state-of-the-art kitchen for
                        students to use.{" "}
                      </p>
                      {/* <div className='flex top-0 left-0 '>
          <button className=''>View Details </button>
          <img src="https://www.slithm.edu.lk/wp-content/uploads/2021/05/Icon-feather-arrow-left-1.png" alt="" />
          </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flip-card w-full">
                  <div className="flip-card-inner w-full">
                    <div className="flip-card-front w-full">
                      <img
                        className="pt-10 pl-[9rem]"
                        src="		https://www.slithm.edu.lk/wp-content/uploads/2022/01/male-chef.png"
                        alt="Avatar"
                      />
                      <p className="text-2xl font-semibold pt-5">
                        Training Kitchen
                      </p>
                      <p className="pt-5 px-[2rem]">
                        A fully equipped and state-of-the-art kitchen for
                        students to use.{" "}
                      </p>
                    </div>
                    <div className="flip-card-back w-full relative ">
                      <img
                        className="object-cover h-full w-full"
                        src="	https://www.slithm.edu.lk/wp-content/uploads/2022/02/training_resturent.jpg"
                        alt=""
                      />
                      <h1 className="absolute top-[5rem] left-[5rem] text-[#00b2ec] text-2xl font-semibold">
                        Training Restaurants
                      </h1>
                      <p className="absolute top-[8rem] px-[2rem]">
                        Preparing the students for the real experience through
                        our curriculum{" "}
                      </p>
                      {/* <div className='flex top-0 left-0 '>
          <button className=''>View Details </button>
          <img src="https://www.slithm.edu.lk/wp-content/uploads/2021/05/Icon-feather-arrow-left-1.png" alt="" />
          </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flip-card w-full">
                  <div className="flip-card-inner w-full">
                    <div className="flip-card-front w-full">
                      <img
                        className="pt-10 pl-[9rem]"
                        src="		https://www.slithm.edu.lk/wp-content/uploads/2021/05/cooking.png"
                        alt="Avatar"
                      />
                      <p className="text-2xl font-semibold pt-5">
                        Samudra Training School
                      </p>
                      <p className="pt-5 px-[2rem]">
                        Training done by professionals in the field to advance
                        knowledge.{" "}
                      </p>
                    </div>
                    <div className="flip-card-back w-full relative ">
                      <img
                        className="object-cover h-full w-full"
                        src="	https://www.slithm.edu.lk/wp-content/uploads/2022/02/samudra_training.jpg
                        "
                        alt=""
                      />
                      <h1 className="absolute top-[5rem] left-[3rem] text-[#00b2ec] text-2xl font-semibold">
                        Samudra Training School
                      </h1>
                      <p className="absolute top-[8rem] px-[2rem]">
                        Training done by professionals in the field to advance
                        knowledge.{" "}
                      </p>
                      {/* <div className='flex top-0 left-0 '>
          <button className=''>View Details </button>
          <img src="https://www.slithm.edu.lk/wp-content/uploads/2021/05/Icon-feather-arrow-left-1.png" alt="" />
          </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className=""></div>
              <div className=""></div>
              <div className="">
                <div className="flip-card w-full">
                  <div className="flip-card-inner w-full">
                    <div className="flip-card-front w-full">
                      <img
                        className="pt-10 pl-[9rem]"
                        src="	https://www.slithm.edu.lk/wp-content/uploads/2021/05/book.png"
                        alt="Avatar"
                      />
                      <p className="text-2xl font-semibold pt-5">Library</p>
                      <p className="pt-5 px-[2rem]">
                        A well-read and researched library is on offer for our
                        students.{" "}
                      </p>
                    </div>
                    <div className="flip-card-back w-full relative ">
                      <img
                        className="object-cover h-full w-full"
                        src="	https://www.slithm.edu.lk/wp-content/uploads/2022/02/library.jpg"
                        alt=""
                      />
                      <h1 className="absolute top-[5rem] left-[9rem] text-[#00b2ec] text-2xl font-semibold">
                        Library
                      </h1>
                      <p className="absolute top-[8rem] px-[2rem]">
                        A well-read and researched library is on offer for our
                        students.{" "}
                      </p>
                      {/* <div className='flex top-0 left-0 '>
          <button className=''>View Details </button>
          <img src="https://www.slithm.edu.lk/wp-content/uploads/2021/05/Icon-feather-arrow-left-1.png" alt="" />
          </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flip-card w-full">
                  <div className="flip-card-inner w-full">
                    <div className="flip-card-front w-full">
                      <img
                        className="pt-10 pl-[9rem]"
                        src="	https://www.slithm.edu.lk/wp-content/uploads/2021/05/dumbbell.png"
                        alt="Avatar"
                      />
                      <p className="text-2xl font-semibold pt-5">Gym</p>
                      <p className="pt-5 px-[2rem]">
                        Our students are given the opportunity to take care of
                        their physical health too.{" "}
                      </p>
                    </div>
                    <div className="flip-card-back w-full relative ">
                      <img
                        className="object-cover h-full w-full"
                        src="	https://www.slithm.edu.lk/wp-content/uploads/2022/02/training_kitchen.jpg"
                        alt=""
                      />
                      <h1 className="absolute top-[5rem] left-[9rem] text-[#00b2ec] text-2xl font-semibold">
                        Gym
                      </h1>
                      <p className="absolute top-[8rem] px-[2rem]">
                        Our students are given the opportunity to take care of
                        their physical health too.{" "}
                      </p>
                      {/* <div className='flex top-0 left-0 '>
          <button className=''>View Details </button>
          <img src="https://www.slithm.edu.lk/wp-content/uploads/2021/05/Icon-feather-arrow-left-1.png" alt="" />
          </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flip-card w-full">
                  <div className="flip-card-inner w-full">
                    <div className="flip-card-front w-full">
                      <img
                        className="pt-10 pl-[9rem]"
                        src="	https://www.slithm.edu.lk/wp-content/uploads/2021/05/computer.png"
                        alt="Avatar"
                      />
                      <p className="text-2xl font-semibold pt-5">IT Lab</p>
                      <p className="pt-5 px-[2rem]">
                        Our IT library provides students with much-needed
                        IT-related material.{" "}
                      </p>
                    </div>
                    <div className="flip-card-back w-full relative ">
                      <img
                        className="object-cover h-full w-full"
                        src="	https://www.slithm.edu.lk/wp-content/uploads/2022/02/computer_lab.jpg"
                        alt=""
                      />
                      <h1 className="absolute top-[5rem] left-[9rem] text-[#00b2ec] text-2xl font-semibold ">
                        IT Lab
                      </h1>
                      <p className="absolute top-[8rem] px-[2rem]">
                        Our IT library provides students with much-needed
                        IT-related material.{" "}
                      </p>
                      {/* <div className='flex top-0 left-0 '>
          <button className=''>View Details </button>
          <img src="https://www.slithm.edu.lk/wp-content/uploads/2021/05/Icon-feather-arrow-left-1.png" alt="" />
          </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className=""></div>
            </div>
          </div>
          <div className="pt-[5rem] pl-[50rem] pb-[1rem]">
            <button
              type="button"
              className=" flex gap-4 inline-block rounded bg-primary px-16 pb-4 pt-4 text-xl font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-[#00ae74] bg-[#343434] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              VIEW DETAILS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* section 6--------------------------------- */}

      <section>
        <div className="">
          <div data-aos="fade-up">
            <p className="text-5xl font-semibold text-[#00ae74] pt-[5rem] text-center">
              Why Choose Us
            </p>{" "}
          </div>
          <div data-aos="fade-up">
            <p className="pt-[3rem] px-[25rem] text-center">
              At SLITHM our priority is to ensure that every student who passes
              through our doors is a well-versed and wholesome individual. Our
              institute looks into our students' productivity by training them
              with essential life skills and helping them to reach new heights.
              We provide equal opportunities for our students to learn in an
              equitable and hospitable environment that will help them in many
              ways and ensure sustainable growth in the tourism and hospitality
              industry and create inter-connected networks while building
              partnerships.{" "}
            </p>
          </div>
          <div>
            <div className="grid grid-cols-8 grid-flow-col gap-4 pt-[5rem]">
              <div></div>
              <div></div>
              <div data-aos="zoom-in">
                <div>
                  <img
                    className="pl-[3.5rem]"
                    src="https://www.slithm.edu.lk/wp-content/uploads/2021/05/Group-374.png"
                    alt=""
                  />
                </div>
              </div>
              <div data-aos="zoom-in">
                <div>
                  <img
                    className="pl-[3.5rem]"
                    src="	https://www.slithm.edu.lk/wp-content/uploads/2021/05/Group-375.png"
                    alt=""
                  />
                </div>
              </div>
              <div data-aos="zoom-in">
                <div>
                  <img
                    className="pl-[3.5rem]"
                    src="https://www.slithm.edu.lk/wp-content/uploads/2021/05/Group-374.png"
                    alt=""
                  />
                </div>
              </div>
              <div data-aos="zoom-in">
                <div>
                  <img
                    className="pl-[3.5rem]"
                    src="	https://www.slithm.edu.lk/wp-content/uploads/2021/05/Group-375.png"
                    alt=""
                  />
                </div>
              </div>

              <div></div>
              <div></div>

              <img src="	" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* section 7-------------------------------------------------- */}

      <section>
        <div className="pt-[10rem] relative">
          <div className=" ">
            <img
              src="https://www.slithm.edu.lk/wp-content/uploads/2022/01/Samudra-Training-School.png"
              alt=""
            />
          </div>
          <div className="absolute  top-[40rem] left-[48rem] right-0">
            <button
              type="button"
              className=" flex gap-4 inline-block rounded bg-white px-16 pb-4 pt-4 text-xl font-medium uppercase leading-normal text-[#000000]  transition duration-150 ease-in-out hover:bg-[#00ae74] bg-[#343434] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              VIEW DETAILS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* section 8--------------------------------------------------- */}

      <section>
        <div className="grid grid-cols-2 grid-flow-col border border-2">
          <div>
            <h1 className="text-[#00ae74] text-4xl pl-[15rem] pt-[5rem]">
              News & Events
            </h1>
          </div>
          <div>
            <h1 className="text-[#00ae74] text-4xl pl-[15rem] pt-[5rem]">
              Event Calender
            </h1>
          </div>
        </div>
      </section>

      {/* section 9--------------------------------------------- */}

      <section>
        <div className="relative">
          <div>
            <img
              src="	https://www.slithm.edu.lk/wp-content/uploads/2022/02/new_student_registration.jpg"
              alt=""
            />
          </div>
          <div className="absolute  top-[30rem] left-[75rem] right-0">
            <button
              type="button"
              className=" flex gap-4 inline-block rounded bg-white px-16 pb-4 pt-4 text-xl font-medium uppercase leading-normal text-[#000000]  transition duration-150 ease-in-out  bg-[#343434] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              Enroll Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* section 10--------------------------------------------------- */}

      <section>
        <div className="grid grid-cols-3 grid-flow-col ">
          <div className="w-full grid grid-rows-2 grid-flow-col relative h-[46.5rem]">
            <div className="  "></div>
            <div className="absolute top-[5rem] left-0 right-0">
              <div className="bg-[#00ae74] ">
                <div className="">
                  <p className="text-white text-7xl pl-[5rem] pt-[5rem]">"</p>
                  <p className="text-white text-5xl italic px-[5rem]">
                    Step into a <br />
                    rewarding <br /> career with career- <br />
                    oriented <br />
                    hotel and <br /> hospitality <br /> programs
                  </p>
                  <p className="text-white pt-[5rem] px-[5rem] pb-[5rem]">
                    Learn essential skills such as knife skills and life skills
                    to everything in between from our carefully curated courses
                    that will enable you to understand everything that you love
                    about hospitality and tourism.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2  w-full">
            <div className="w-full h-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/HcuX7xUxj_0?si=oAzDIPaUEVxkimtQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            {/* <video className="h-full w-full " controls autoPlay muted>
              <source
                src="https://www.youtube.com/watch?v=HcuX7xUxj_0&t=6s"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video> */}
          </div>
        </div>
      </section>
      {/* section 11........................................ */}
      <section>
        <div className="bg-[#e5eef1]">
          <h1 className="font-semibold text-5xl text-[#37bf92] pt-[10rem] text-center">
            Announcements
          </h1>

          <div data-aos="flip-left">
            <div className="grid grid-cols-5 grid-flow-col pb-[]">
              <div className="w-full  "></div>
              <div className="pt-[5rem] w-full">
                <h1 className="font-semibold text-1xl pb-5">
                  SLITHM 2023 – 1st Course Intake
                </h1>

                <a href="https://www.slithm.edu.lk/wp-content/uploads/2022/10/SLITHM-English-27-x-10-kua-2.pdf">
                  <p className="text-cyan-500">
                    {" "}
                    http://www.slithm.edu.lk/wp-content/uploads/2022/10/SLITHM-English-27-x-10-kua-2.pdf
                  </p>
                </a>
                <p className="font-semibold text-1xl pt-5 pb-5">
                  Paper Advertisement – Sinhala
                </p>
                <a href="https://www.slithm.edu.lk/wp-content/uploads/2022/10/SLITHM-Sinhala-27-x-08-kua-2.pdf">
                  <p className="text-cyan-500">
                    {" "}
                    http://www.slithm.edu.lk/wp-content/uploads/2022/10/SLITHM-Sinhala-27-x-08-kua-2.pdf
                  </p>
                </a>
              </div>
              <div className="w-full  pt-[5rem] pl-[3rem] ">
                <h1 className="font-semibold text-1xl pb-5">
                  PINK DAY at SLITHM
                </h1>
                <p>
                  Awareness Programme on Breast Cancer Prevention for the SLITHM
                  Female Staff will held on 7th of October at SLITHM Auditorium
                </p>
                <img
                  className="pt-5"
                  src="	https://www.slithm.edu.lk/wp-content/uploads/2022/10/IMG-20221005-WA0004-212x300.jpg"
                  alt=""
                />
              </div>
              <div className="w-full  pt-[5rem] pl-[3rem]  ">
                <h1 className="font-semibold pb-5 pl-0">
                  Foreign Language Courses at SLITHM
                </h1>
                <p>
                  New Foreign language courses are going to start at SLITHM.
                  Enroll Now…!!!
                </p>
                <img
                  className="pt-10"
                  src="https://www.slithm.edu.lk/wp-content/uploads/2022/09/IMG-20220909-WA0011-300x300.jpg"
                  alt=""
                />
              </div>
              <div className="w-full"></div>
            </div>
            <div className="pt-[2rem] pl-[50rem] pb-[10rem] ">
              <button
                type="button"
                className=" flex gap-4 inline-block rounded bg-primary px-16 pb-4 pt-4 text-xl font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-[#00ae74] bg-[#343434] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                VIEW DETAILS
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* section 12--------------------------- */}

      <section>
        <div>
          <div data-aos="fade-up">
            <h1 className="text-[#00ae74] font-semibold text-4xl text-center pt-[5rem]">
              Our Partners
            </h1>
          </div>
          <div data-aos="fade-up">
            <p className="text-center pt-[2rem]">
              We are committed to creating strong academic partnerships with
              recognized world-leading institutions. We are proud to announce
              that we have partnered with a wide <br /> range of institutions
              that underpins our excellence. Find the list of our partners
              below.{" "}
            </p>

            <div className="pt-[5rem] pb-[5rem]">
              <div className="grid grid-cols-6 grid-flow-col ">
                <div></div>

                <div>
                  <div data-aos="fade-up">
                    <img
                      src="	https://www.slithm.edu.lk/wp-content/uploads/2023/05/m-tou.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div data-aos="fade-up">
                    <img
                      src="https://www.slithm.edu.lk/wp-content/uploads/2023/05/tourisum.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div data-aos="fade-up">
                    <img
                      src="https://www.slithm.edu.lk/wp-content/uploads/2023/05/tourisum.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div data-aos="fade-up">
                    <img
                      src="	https://www.slithm.edu.lk/wp-content/uploads/2023/05/bureau.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* fixed button ------------------------- */}
      <div className="fixed top-[40rem] left-[102rem] right-0">
        <button className="bg-[#ff0000] py-[0.9rem] px-[2rem] font-semibold text-white text-2xl">
          {" "}
          Apply Now
        </button>
      </div>

      <Footer />
    </div>
  );
}
