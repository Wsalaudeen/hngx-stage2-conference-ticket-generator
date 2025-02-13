import Navbar from "../navbar/navbar";
import Ticketlist from "../ticketlist/ticketlist";
import Attendeeform from "../attandeeform/attendeeform";

import React from "react";

export default function Homepage() {
  return (
    <div
      className="min-h-screen pt-4"
      style={{
        background:
          "radial-gradient(52.52% 32.71% at 50% 97.66%, rgba(36, 160, 181, 0.20) 0%, rgba(36, 160, 181, 0.00) 100%), #02191D",
      }}
    >
      <Navbar />
      <Ticketlist />
    </div>
  );
}
