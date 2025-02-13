import React from "react";
import Navbar from "../navbar/navbar";

export default function Attendeeform() {
  return (
    <div
      className="min-h-screen pt-4"
      style={{
        background:
          "radial-gradient(52.52% 32.71% at 50% 97.66%, rgba(36, 160, 181, 0.20) 0%, rgba(36, 160, 181, 0.00) 100%), #02191D",
      }}
    >
      <Navbar />
      <h1 className="text-center font-family text-red-500">attending Form</h1>
    </div>
  );
}
