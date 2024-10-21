import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function PetShampooSection() {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center  p-8">
      {/* Left Section */}
      <div className="flex-1 lg:p-10 p-4 text-center lg:text-left ">
        <h2 className="text-5xl font-bold text-blue-700">
PUREPAW PET CARE
</h2>
        <p className="text-xl my-4">Your true partner in the pet care journey! </p>
        <p className="text-gray-600 mb-4">
Our collection of products is carefully selected after multiple verifications and dermatologist recommendations. We are here to help in every way possible.        </p>
     <a href='/enquire-now'>  <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
          Enquire Now
        </button></a>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center items-center">
        <Image
          src="/dogs.png"
          alt="Pet Image"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>

      {/* Right Section - Product Grid */}
      <div className="flex-1 lg:w-1/2 grid grid-cols-1 gap-4 p-4 lg:p-10 bg-[#E0F3EB]">
              <div className="p-4 bg-white shadow-lg rounded-lg text-center">
                  <Image
            src="/pp2.png"
            alt="Shampoo"
            width={150}
            height={150}
            className="object-contain mx-auto mb-4"
          />
          <h3 className="text-lg font-bold mb-2 text-orange-500">Book with Us</h3>
          <p className="text-gray-600">
Send in your enquiry to book your order as we soon open up the Add To Cart station.          </p>
        </div>
        <div className="p-4 bg-white shadow-lg rounded-lg text-center">
          <Image
            src="/pp1.png"
            alt="Shampoo"
            width={150}
            height={150}
            className="object-contain mx-auto mb-4"
          />
          <h3 className="text-lg font-bold mb-2 text-orange-500">Support that Stays</h3>
          <p className="text-gray-600">
Happy to help with every little detail, be it your shipment or your selection of any of our products.           </p>
        </div>
      </div>
    </section>
  );
}
