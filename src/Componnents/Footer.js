import React from "react";

export default function Footer() {
  return (
    <div className=" grid grid-cols-1    xl:grid-cols-1  bg-[#343434]">
      <div className="grid grid-cols-1    xl:grid-cols-6 ">
        <div className=" bg-[#343434]"></div>
        <div className="">
          <div className="bg-[#343434]">
            <img
              className="pt-28"
              src="https://www.slithm.edu.lk/wp-content/uploads/2022/03/slithum-logo-main.jpg"
              alt=""
            />
          </div>
          <div className="bg-[#343434] text-white pt-20">
            <p>
              The Sri Lanka Institute of Tourism and Hotel Management (SLITHM)
              is the only approved premier institute in Sri Lanka offering
              courses in both hotel and hospitality as well as travel and
              tourism{" "}
            </p>
          </div>
        </div>
        <div className=" bg-[#343434] ">
          <p className="text-white font-bold pt-28 pl-5 ">ABOUT SLITHM</p>
          <hr className="w-28 border-2 " />
          <div className="text-white pt-10 pl-5 leading-loose">
            <p>Home</p>
            <p>About Us</p>
            <p>Courses</p>
            <p>Branchers</p>
            <p>Careers</p>
            <p>News & Events</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className=" bg-[#343434]">
          <p className="text-white font-bold pt-28 pl-5 ">QUICK LINKS</p>
          <hr className="w-28 border-2 " />
          <div className="text-white pt-10 pl-5 leading-loose">
            <p>Research & Publications</p>
            <p>Facilities & Activities</p>
            <p>Procurement</p>
            <p>LMS</p>
            <p>Library</p>
          </div>
        </div>
        <div className=" bg-[#343434]">
          <p className="text-white font-bold pt-28 pl-5 ">QUICK LINKS</p>
          <hr className="w-28 border-2 " />
          <div className="text-white pt-10 pl-5 leading-loose">
            <p>No.78, Galle Road, Colombo 03 ,Sri Lanka.</p>
            <p>+94112208312</p>
            <p>+94112382219</p>
            <p>info@slithm.edu.lk</p>
            <div className="flex pt-10 gap-4 ">
              <img
                className="w-[2rem] "
                src="https://th.bing.com/th/id/OIP.luVQRwEED51xpMYyFrpnVgHaHa?pid=ImgDet&w=180&h=180&c=7"
                alt=""
              />
              <img
                className="w-[2rem] h-[2rem] "
                src="https://th.bing.com/th/id/OIP.jPmHyBfNRs_TTPat6HyprQHaHa?pid=ImgDet&w=180&h=180&c=7"
                alt=""
              />
              <img
                className="w-[2rem] h-[2rem] "
                src="https://th.bing.com/th/id/OIP.JqsxUn88p4sZmAsrGbOC_gHaHa?pid=ImgDet&w=180&h=180&c=7"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" bg-[#343434]"></div>
      </div>
      <br />
      <hr className="pt-10 " />
      <p className="text-white text-center pb-10">
        Copyright c 2023-SLITHM-All Rights Reserved. Concept, Design &
        Development by{" "}
        <a className="text-black" href="https://www.weblankan.com/">
          {" "}
          WebLankan
        </a>
      </p>
    </div>
  );
}
