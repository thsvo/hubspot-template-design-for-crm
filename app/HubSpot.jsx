"use client"; // Ensure it's a client component

import { useEffect } from "react";

const HubSpotMeetings = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);




  return (
    <div>
      <h2 className="text-3xl text-center font-bold mb-2 mt-3 text-[#2c3e50]" id="contract">
      Book Your CRM Audit Now
      </h2>
      <div
        className="meetings-iframe-container"
        data-src="https://meetings.hubspot.com/jhelmy?embed=true"
      ></div>
    </div>
  );
};

export default HubSpotMeetings;
