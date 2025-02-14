import React from "react";
import Navbar from "../../components/navbar/navbar";
import { Link } from "react-router-dom";

function successScreen() {
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
        <div className="w-full max-w-2xl bg-[#041E23] text-[#fffff] rounded-[40px] p-10 border border-solid border-[#0E464F]">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-[32px] font-family font-normal text-[#FFFFFF]">
                Ready
              </h2>
              <span className="text-[16px] font-Roboto text-[#FAFAFA] leading-[150%]">
                step 3/3
              </span>
            </div>
            {/* progress Bar */}
            <div className="w-full h-1 bg-[#0E464F] rounded-full">
              <div className="h-full w-3/3 bg-[#24A0B5] rounded-full"></div>
            </div>
            <p className="text-[32px] font-Alatsi font-Normal text-[#ffffff] text-center">
              Your Ticket is Booked!
            </p>
            <p className="text-[16px] text-[#fafafa] mb-8 font-Roboto text-center leading-[24px] font-normal">
              Check your email for a copy or you can{" "}
              <span className="font-bold">download</span>
            </p>

            <div className="max-w-xs mx-auto bg-[##031e21] text-[#ffffff] p-4 rounded-[16px] border border-solid border-[#24A0B5]">
              <h2 className="text-[34px] font-Rage leading-[100%] text-center font-normal">
                Techember Fest ”25
              </h2>
              <p className="text-[14px] text-[#ffffff] font-Roboto font-normal text-center mt-1">
                📍 04 Rumens road, Ikoyi, Lagos
              </p>
              <p className="text-[14px] text-[#ffffff] font-Roboto font-normal text-center mt-1">
                📅 March 15, 2025 | 7:00 PM
              </p>

              <div className="flex justify-center my-4">
                <img
                  src="/mnt/data/Container.png"
                  alt="User"
                  className="w-24 h-24 rounded-lg object-cover"
                />
              </div>

              <div className="bg-[#08343C] p-[14px] rounded-[8px] border border-solid border-[#133D44]">
                <div className="mb-2">
                  <label className="text-[12px]   font-Roboto font-normal text-[#ffffff] leading-[150%] opacity-[0.33]">
                    Enter your name
                  </label>
                  <p className="text-[#ffffff] font-Roboto font-[700px] leading-[150%]">
                    Avi Chukwu
                  </p>
                </div>
                <div className="mb-2">
                  <label className="text-[12px]   font-Roboto font-normal text-[#ffffff] leading-[150%] opacity-[0.33]">
                    Enter your email
                  </label>
                  <p className="text-[#ffffff] font-Roboto font-[700px] leading-[150%]">
                    User@email.com
                  </p>
                </div>
                <div className="flex justify-between mb-2 text-sm">
                  <p className="text-[12px]   font-Roboto font-normal text-[#ffffff] leading-[150%] opacity-[0.33]">
                    Ticket Type:
                  </p>
                  <p className="text-white font-medium">VIP</p>
                </div>
                <div className="flex justify-between mb-2 text-sm">
                  <p className="text-[12px]   font-Roboto font-normal text-[#ffffff] leading-[150%] opacity-[0.33]">
                    Ticket for:
                  </p>
                  <p className="text-[#fffff] font-medium">1</p>
                </div>
                <div>
                  <label className="text-[12px]   font-Roboto font-normal text-[#ffffff] leading-[150%] opacity-[0.33]">
                    Special request?
                  </label>
                  <p className="text-[#ffffff] font-Roboto leading-[15px] text-[12px]">
                    Nil ? Or the users sad story they write in there gets this
                    whole space, Max of three rows{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              to="/"
              className="w-full sm:w-1/2 py-3 px-6 rounded-lg font-family text-[#24A0B5]  text-[16px] font-normal leading-[150%] transition-colors border border-solid  border-[#24A0B5] cursor-pointer text-center"
            >
              Book Another Ticket
            </Link>

            <button className="w-full sm:w-1/2 py-3 px-3 rounded-lg font-family text-[#ffffff] bg-[#24A0B5] text-center cursor-pointer">
              Download Ticket
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default successScreen;
