import React from "react";

const Newsletter = () => {
  return (
    <div className="flex  items-center justify-between bg-[#eaf4f2] p-8">
      <div className="container px-4 py-2 mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl  text-purple-600 mb-4 text-center">
            Sign Up for Our Vet-Approved Monthly Newsletter
          </h2>
          <div className="flex items-center justify-center w-full max-w-md">
            <form action="https://getform.io/f/alljomwa" method="POST">
              {" "}
              <input
                type="email"
                placeholder="Your email address"
                className="p-3 w-full border border-gray-300 rounded-l-lg focus:outline-none"
              />
              <button className="bg-orange-500 text-white px-6 py-3 rounded-r-lg hover:bg-orange-600 w-full">
                Sign Up
              </button>
            </form>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            By signing up you agree to our{" "}
            <a href="#" className="text-orange-500 underline">
              Terms & Condition
            </a>
          </p>
        </div>
        <div className="mt-6 w-full  md:w-1/2 flex justify-center">
          <img
            src="/pp2.png" // Replace this with your image source
            alt="Person and dog"
            className="h-auto md:h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
