"use client";
import React from "react";
import NamePlate1 from "@/components/ui/nameplate/NamePlate";
import Heading from "../ui/heading/Heading";

const Profile = () => {
  return (
    <main className="grid grid-cols-1 justify-start place-content-center min-h-screen ">
      <Heading text={"My Profile"} size={"text-4xl text-center"} />
      <div className="justify-self-center">
        <div className="grid grid-cols-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <div className="justify-self-start w-full">
            <NamePlate1 _type="text" _text={"Heloo"} _placeholder="Your Name" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
