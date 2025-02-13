import React, { useState } from "react";
import { Link } from "react-router-dom";

const tickets = [
  {
    type: "REGULAR",
    price: "Free",
    seats: "20/52",
    access: "REGULAR ACCESS",
  },
  { type: "VIP", price: "$150", seats: "20/52", access: "VIP ACCESS" },
  { type: "VVIP", price: "$150", seats: "20/52", access: "VVIP ACCESS" },
];

function Ticketlist() {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [ticketCount, setTicketCount] = useState(1);

  return (
    <div className="min-h-screen  p-4 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-[#041E23] text-[#FFFFFF] rounded-[40px] p-12 border border-solid border-[#0E464F]">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-[32px] font-family font-normal">
              Ticket Selection
            </h2>
            <span className="text-[16px] font-Roboto text-[#FAFAFA] leading-[150%]">
              Step 1/3
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1 bg-[#0E464F] rounded-full">
            <div className="h-full w-1/3 bg-[#24A0B5] rounded-full"></div>
          </div>
        </div>

        <div className="space-y-6 mt-6 p-6 bg-[#08252B] rounded-4xl border border-solid border-[#0E464F]">
          {/* Event Info */}
          <div
            className=" p-6 rounded-[24px] text-center space-y-3 backdrop-blur-md(8px)  border-r-2 border-solid  border-r-[#07373f] border-b-2  border-b-[#07373f] border-l-2 border-l-[#07373f]"
            style={{
              background:
                "radial-gradient(57.42% 106.59% at 14.02% 32.06%, rgba(36, 160, 181, 0.20) 0%, rgba(36, 160, 181, 0.00) 100%), rgba(10, 12, 17, 0.10)",
            }}
          >
            <h1 className="text-[62px] font-Rage text-[#FAFAFA] font-normal leading-[100%]">
              Techember Fest ”25
            </h1>
            <p className="text-[16px] text-[#FAFAFA] leading-[150%] font-normal font-Roboto">
              Join us for an unforgettable experience at [Event Name]! Secure
              your spot now.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-[16px] text-[#FAFAFA] font-Roboto leading-[150%] font-normal">
              <span className="flex items-center gap-1">
                📍 [Event Location]
              </span>
              <span className="hidden sm:inline">| | </span>
              <span>March 15, 2025 7:00 PM</span>
            </div>
          </div>

          <div className="w-full h-1 bg-[#07373F]  rounded-[32px] border border-solid border-[#07373F]">
            {/* <div className="h-full w-1/3 bg-[#24A0B5] rounded-full"></div> */}
          </div>

          {/* Ticket Options */}
          <div className="space-y-4">
            <h3 className="text-[16px] text-[#FAFAFA] font-Roboto leading-[150%] font-normal">
              Select Ticket Type:
            </h3>
            <div className="grid grid-cols-1 bg-[#05222] p-4 rounded-[24px] border border-solid border-[#07373F] sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tickets.map((ticket) => (
                <button
                  key={ticket.type}
                  onClick={() => setSelectedTicket(ticket.type)}
                  className={`p-3 rounded-[12px] border transition-all hover:bg-[#2C545B] hover:border hover:border-solid hover:border-[#197686] ${
                    selectedTicket === ticket.type
                      ? "bg-[#12464E] border border-solid border-[#197686] cursor-pointer"
                      : "border-2 border-solid border-[#197686] bg-[#05222] rounded-[12px] cursor-pointer"
                  }`}
                >
                  <span className="block text-[#fffff] font-Roboto text-[20px] font-[600px] leading-[110%]">
                    {ticket.price}
                  </span>
                  <span className="block pt-2 text-[#fffff] font-Roboto text-[12px] font-normal leading-[%150]">
                    {ticket.access}
                  </span>
                  <span className="block text-[10px] font-Roboto leading-[150%] text-[#D9D9D9] mt-1">
                    {ticket.seats}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Ticket Count */}
          <div className="space-y-2">
            <label
              htmlFor="ticketCount"
              className="block text-[16px] text-[#FAFAFA] font-normal font-Roboto leading-[150%]"
            >
              Number of Tickets
            </label>
            <select
              id="ticketCount"
              value={ticketCount}
              onChange={(e) => setTicketCount(Number(e.target.value))}
              className="w-full p-3 rounded-[12px] border border-solid border-[#07373f] focus:ring-2 focus:ring-bg-[#07373f] focus:border-transparent"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num} className="bg-[#07373f]">
                  {num}
                </option>
              ))}
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="w-full sm:w-1/2 py-3 px-6 rounded-lg font-family text-[#24A0B5]  text-[16px] font-normal leading-[150%] transition-colors border border-solid  border-[#24A0B5] cursor-pointer ">
              Cancel
            </button>

            <Link
              to="/attendee"
              className="w-full sm:w-1/2 py-3 px-3 rounded-lg font-family text-[#fffff] bg-[#24A0B5] text-center cursor-pointer"
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticketlist;
