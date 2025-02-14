import React from "react";
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";

export default function Attendeeform(props) {
  return (
    <main
      className="min-h-screen pt-4"
      style={{
        background:
          "radial-gradient(52.52% 32.71% at 50% 97.66%, rgba(36, 160, 181, 0.20) 0%, rgba(36, 160, 181, 0.00) 100%), #02191D",
      }}
    >
      <Navbar />
      <div className="p-4 flex items-center justify-center">
        <div className="w-full max-w-2xl bg-[#041E23] text-[#fffff] rounded-[40px] p-12 border border-solid border-[#0E464F]">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-[32px] font-family font-normal text-[#FFFFFF]">
                Attendee Details
              </h2>
              <span className="text-[16px] font-Roboto text-[#FAFAFA] leading-[150%]">
                step 2/3
              </span>
            </div>
            {/* progress Bar */}
            <div className="w-full h-1 bg-[#0E464F] rounded-full">
              <div className="h-full w-2/3 bg-[#24A0B5] rounded-full"></div>
            </div>
            <div className="space-y-6 mt-2 px-6 pt-5 pb-12 bg-[#08252B] rounded-[24px] border border-solid border-[#0E464F]">
              {/* upload section */}
              <div className="space-y-2">
                <label className="text-[16px] text-[#FAFAFA] font-Roboto font-normal leading-[150%] pb-3">
                  Upload Profile Photo
                </label>
                <div className=" relative h-[120px] aspect-square mt-8 max-w-[600px] w-full mx-auto bg-[#041E23]  flex items-center justify-center">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-[180px] h-[180px] rounded-[32px] border-4 border-[#24a0b5]  cursor-pointer flex flex-col items-center justify-center text-center p-6 bg-[#0E464F]">
                    <label
                      for="profile-upload"
                      className="cursor-pointer flex flex-col items-center justify-center"
                    >
                      <svg
                        className="w-8 h-8 mb-2 flex align-center justify-center"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M25.2639 14.816C24.6812 10.2267 20.7505 6.66669 16.0052 6.66669C12.3305 6.66669 9.13854 8.81469 7.68121 12.2C4.81721 13.056 2.67188 15.76 2.67188 18.6667C2.67188 22.3427 5.66254 25.3334 9.33854 25.3334H10.6719V22.6667H9.33854C7.13321 22.6667 5.33854 20.872 5.33854 18.6667C5.33854 16.7947 6.93721 14.9907 8.90254 14.6454L9.67721 14.5094L9.93321 13.7654C10.8705 11.0307 13.1972 9.33335 16.0052 9.33335C19.6812 9.33335 22.6719 12.324 22.6719 16V17.3334H24.0052C25.4759 17.3334 26.6719 18.5294 26.6719 20C26.6719 21.4707 25.4759 22.6667 24.0052 22.6667H21.3385V25.3334H24.0052C26.9465 25.3334 29.3385 22.9414 29.3385 20C29.337 18.8047 28.9347 17.6444 28.196 16.7047C27.4574 15.7649 26.425 15.0999 25.2639 14.816Z"
                          fill="#FAFAFA"
                        />
                        <path
                          d="M17.3385 18.6667V13.3334H14.6719V18.6667H10.6719L16.0052 25.3334L21.3385 18.6667H17.3385Z"
                          fill="#FAFAFA"
                        />
                      </svg>

                      <p className="text-[16px] font-Roboto leading-[150%]  font-normal text-[#FAFAFA]">
                        Drag & drop or click to upload
                      </p>
                    </label>
                    <input
                      id="profile-upload"
                      type="file"
                      class="hidden"
                      aria-label="Upload Profile Photo"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* straight line */}
          <div className="w-full h-1 bg-[#07373F] mt-8 rounded-[32px] border border-solid border-[#07373F]"></div>
          <form class="mt-4">
            <label
              for="name"
              class="block mb-1 font-Roboto leading-[150%] text-[16px] font-normal text-[#FAFAFA]"
            >
              Enter your name
            </label>
            <input
              id="name"
              type="text"
              class="w-full p-3 rounded-[12px] placeholder-[#ffff]  bg-[#07373F] border border-solid border-[#07373F] focus:ring-2 focus:ring-[#07373F] focus:outline-none"
              required
            />

            <label
              for="email"
              class="block mt-4 mb-1 font-Roboto leading-[150%] text-[16px] font-normal text-[#FAFAFA]"
            >
              Enter your email *
            </label>
            <div class="relative">
              <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#ffffff]">
                ✉️
              </span>
              <input
                id="email"
                type="email"
                class="w-full pl-10 p-3  rounded-[12px] placeholder-[#ffffff] bg-[#07373F] border border-solid border-[#07373F] focus:ring-2 focus:ring-[#07373F] focus:outline-none"
                placeholder="hello@aviolagos.io"
                required
              />
            </div>

            <label
              for="special-request"
              class="block mt-4 mb-1 font-Roboto leading-[150%] text-[16px] font-normal text-[#FAFAFA]"
            >
              Special request?
            </label>
            <textarea
              id="special-request"
              class="w-full p-3 h-[127px] rounded-[12px] placeholder-[#AAAAAA] bg-[#07373F] border border-solid border-[#07373F] focus:ring-2 focus:ring-[#07373F] focus:outline-none"
              placeholder="Textarea"
            ></textarea>

            <div class="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/"
                type="button"
                class=" w-full text-center sm:w-1/2 py-3 px-3 rounded-lg font-family text-[#24A0B5]  text-[16px] font-normal leading-[150%] transition-colors border border-solid  border-[#24A0B5] cursor-pointer"
              >
                Back
              </Link>
              <Link
                to="/success"
                type="submit"
                class="w-full  sm:w-1/2 py-3 px-3 rounded-lg font-family text-[#ffffff] bg-[#24A0B5] text-center cursor-pointer"
              >
                Get My Free Ticket
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
