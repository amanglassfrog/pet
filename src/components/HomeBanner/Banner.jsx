// components/Banner.js

import Image from "next/image";

const Banner = () => {
  return (
    <section className="bg-gray-50   flex items-center justify-between w-full">
      <div className="container px-4 py-4 mx-auto flex items-center flex-col md:flex-row">
        {/* Left Content */}
        <div className=" w-full md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-medium  text-[#C77AE3] mb-6">
            Paw-fect Love and Care for your Pets!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your pets need the ultimate care and comfort and we ensure that.
            With our handpicked selection of dermatologist-tested petcare
            products, change the way you express your love to your little fluffy
            friends.
          </p>
          <a href="#products">
            {" "}
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-colors">
              See What&apos;s New
            </button>
          </a>
        </div>

        {/* Right Content (Image) */}
        <div className="relative flex-shrink-0 w-full md:w-1/2">
          <Image
            src="/catdog.png"
            alt="Pet Food Product"
            layout="responsive"
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
