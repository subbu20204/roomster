"use client";

import React, { useState } from "react";
import { Navbar } from "../components/Navbar";

const RoommateRecommendationForm = () => {
  const [income, setIncome] = useState("10000+");
  const [cleanliness, setCleanliness] = useState(5);
  const [lifestyle, setLifestyle] = useState([]);
  const [hobbies, setHobbies] = useState("");
  const [isEditable, setIsEditable] = useState(false);

  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  const handleCleanlinessChange = (e) => {
    setCleanliness(Number(e.target.value));
  };

  const handleLifestyleChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setLifestyle(selectedOptions);
  };

  const handleHobbiesChange = (e) => {
    setHobbies(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log("Form submitted:", { income, cleanliness, lifestyle, hobbies });
  };

  const handleToggle = () => {
    setIsEditable(!isEditable);
  };

  return (
    <>
      <Navbar />
      <div className="mt-8 ml-16 flex flex-col justify-center align-center w-[70%] items-start">
        <h1 className="text-[#2e2e2e] font-bold mb-4 text-grey text-[40px] lg:leading-[48px] p-3">
          Let's get To Know You 
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 w-full">
          <div class="relative">
            <input
              type="text"
              id="profession"
              name="profession"
              placeholder="profession"
              class="border rounded-lg px-4 py-2 w-[60%] text-gray-700 focus:outline-none focus:border-blue-500 focus:scale-105 transition-all duration-300 ease-in-out"
            />
          </div>

          <div class="relative">
            <input
              type="text"
              id="lifestyle"
              name="lifestyle"
              placeholder="lifestyle"
              class="border rounded-lg px-4 py-2 w-[60%] text-gray-700 focus:outline-none focus:border-blue-500 focus:scale-105 transition-all duration-300 ease-in-out"
            />
          </div>

          <div class="relative">
            <input
              type="text"
              id="hobbies"
              name="hobbies"
              placeholder="hobbies"
              class="border rounded-lg px-4 py-2 w-[60%] text-gray-700 focus:outline-none focus:border-blue-500 focus:scale-105 transition-all duration-300 ease-in-out"
            />
          </div>

          <div class="relative">
            <input
              type="text"
              id="city"
              name="city"
              placeholder="city"
              class="border rounded-lg px-4 py-2 w-[60%] text-gray-700 focus:outline-none focus:border-blue-500 focus:scale-105 transition-all duration-300 ease-in-out"
            />
          </div>
        </form>
      </div>

      {/* <div className="mt-8 ml-16 flex items-center justify-between ">
        <div className="bg-[#FFFF] p-16 rounded-[5px] w-[70%] ">
          <h1 className="text-2xl font-medium mb-4 text-[60px] lg:leading-[60px]">
            Let's get To Know You{" "}
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col p-5 border border-gray-300 rounded-lg m-5">
              <label
                htmlFor="income-toggle"
                className="flex items-center cursor-pointer mb-4"
              >
                <div className="relative">
                  <input
                    id="income-toggle"
                    type="checkbox"
                    className="sr-only"
                    checked={isEditable}
                    onChange={handleToggle}
                  />
                  <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                  <div
                    className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
                      isEditable ? "transform translate-x-6" : ""
                    }`}
                  ></div>
                </div>
                <div className="ml-3 text-gray-700 font-medium">
                  Enable Income Input
                </div>
              </label>
              <label
                htmlFor="income"
                className="block text-sm font-medium text-gray-700"
              >
                Income:
              </label>
              <input
                id="income"
                type="text"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                disabled={!isEditable}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                  !isEditable ? "bg-gray-100" : "bg-white"
                }`}
                placeholder="Enter your income"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="cleanliness"
                className="block text-sm font-medium text-gray-700"
              >
                Cleanliness (1-10):
              </label>
              <input
                type="range"
                id="cleanliness"
                name="cleanliness"
                min="1"
                max="10"
                value={cleanliness}
                onChange={handleCleanlinessChange}
                className="mt-1 block w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="lifestyle"
                className="block text-sm font-medium text-gray-700"
              >
                Lifestyle:
              </label>
              <select
                id="lifestyle"
                name="lifestyle"
                multiple
                value={lifestyle}
                onChange={handleLifestyleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300 sm:text-sm"
              >
                <option value="early-bird">Early Bird</option>
                <option value="night-owl">Night Owl</option>
                <option value="active">Active</option>
                <option value="introverted">Introverted</option>
                <option value="social">Social</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="hobbies"
                className="block text-sm font-medium text-gray-700"
              >
                Hobbies (comma-separated):
              </label>
              <input
                type="text"
                id="hobbies"
                name="hobbies"
                value={hobbies}
                onChange={handleHobbiesChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300 sm:text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div> */}
    </>
  );
};

export default RoommateRecommendationForm;
