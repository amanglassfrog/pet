import React from "react";
// components/FeatureSection.js
export default function Features() {
  return (
    <section className="py-12 bg-white" id="about-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <img src="/different.png" alt="Quality Icon" className="w-48 h-48 " />
        </div>
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why PurePaw?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our assortment of handpicked products that are tested by leading
            dermatologists, certified by medical organisations, and completely
            pet-friendly formulations are exactly what you need to give your
            pets the love and care they deserve.
          </p>
          <a href="/enquire-now">
            {" "}
            <button className="mt-6 px-6 py-2 border text-white  font-medium rounded-full bg-orange-400 hover:bg-orange-500  hover:text-white transition">
              Enquire Now
            </button>
          </a>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-yellow-100 p-4 rounded-full mb-4">
              <img src="/caticon.png" alt="Quality Icon" className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Uncompromised Quality
            </h3>
            <p className="mt-2 text-gray-600">
              High-quality petcare range and certified products{" "}
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <img src="/dogicon.png" alt="Support Icon" className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              24/7 support
            </h3>
            <p className="mt-2 text-gray-600">
              Got a problem? We are here to help whenever you need{" "}
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <img src="/caticon.png" alt="Shipping Icon" className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Easy Enquiry{" "}
            </h3>
            <p className="mt-2 text-gray-600">
              Just send an enquiry and register your order effortlessly{" "}
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-200 p-4 rounded-full mb-4">
              <img src="/dogicon.png" alt="Returns Icon" className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Quick Shipping{" "}
            </h3>
            <p className="mt-2 text-gray-600">
              From our warehouse to your doorstep, in no time{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
