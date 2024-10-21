// PetHealthSection.js
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function PetHealthSection() {
  return (
    <section className="py-12 bg-white text-center" id="products">
      <h2 className="text-4xl font-bold">
        We <span className="text-orange-500">care</span> for your pet friends
        like you do
      </h2>
      <h2 className="text-4xl font-bold mb-4">Your Pet’s Health</h2>
      <p className="max-w-lg mx-auto text-gray-600 mb-12">
        Our commitment to providing quality and certified products for pet care
        is unwavering. All we want is to help you find the pet care range that
        your pets look forward to.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {/* Card 1 */}
        <div className="bg-pink-50 p-6 rounded-lg w-72 shadow-lg flex flex-col justify-between min-h-[350px]">
          <div>
            <Swiper
              spaceBetween={30}
              breakpoints={{
                640: {
                  slidesPerView: 1, // Display 2 slides on small screens
                  spaceBetween: 20, // Space between slides for small screens
                },
                768: {
                  slidesPerView: 1, // Display 3 slides on tablets
                  spaceBetween: 25, // Space between slides for tablets
                },
                1024: {
                  slidesPerView: 1, // Display 4.5 slides on desktop
                  spaceBetween: 30, // Space between slides for desktop
                },
              }}
              pagination={{ clickable: true }}
              modules={[Navigation, Autoplay, Pagination]}
              autoplay={{
                delay: 3000, // Time delay in ms between slides
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
            >
              <SwiperSlide>
                <Image
                  src="/shampoo1.png"
                  alt="All Natural"
                  width={400}
                  height={400}
                  className="mx-auto rounded"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/shampoo2.png"
                  alt="All Natural"
                  width={400}
                  height={400}
                  className="mx-auto rounded"
                />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <Image
                  src="/shampoo3.png"
                  alt="All Natural"
                  width={400}
                  height={400}
                  className="mx-auto rounded"
                />
              </SwiperSlide>
            </Swiper>

            <h3 className="text-xl font-semibold mb-3 pt-4">
              ANTI-TICK SHAMPOO
            </h3>
            <p className="text-gray-600 mb-4">
              Available in two size ranges of 200 ml and 20 ml, this shampoo is
              all your pet needs to get a tick-free and shiny coat with a
              refreshing neem fragrance.{" "}
            </p>
          </div>
          <a href="/enquire-now">
            <button className="mt-2 py-2 px-2 bg-orange-400 text-white rounded-lg w-full text-sm md:text-base flex items-center justify-center hover:bg-orange-504 transition">
              Enquire Now
              <span className="ml-2 moving-arrow">⟶</span>
            </button>
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-green-50 p-6 rounded-lg w-72 shadow-lg flex flex-col justify-between min-h-[350px]">
          <div>
            <Swiper
              spaceBetween={30}
              breakpoints={{
                640: {
                  slidesPerView: 1, // Display 2 slides on small screens
                  spaceBetween: 20, // Space between slides for small screens
                },
                768: {
                  slidesPerView: 1, // Display 3 slides on tablets
                  spaceBetween: 25, // Space between slides for tablets
                },
                1024: {
                  slidesPerView: 1, // Display 4.5 slides on desktop
                  spaceBetween: 30, // Space between slides for desktop
                },
              }}
              pagination={{ clickable: true }}
              modules={[Navigation, Autoplay, Pagination]}
              autoplay={{
                delay: 3000, // Time delay in ms between slides
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
            >
              <SwiperSlide>
                <Image
                  src="/drybath.png"
                  alt="All Natural"
                  width={400}
                  height={400}
                  className="mx-auto rounded"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/drybath2.png"
                  alt="All Natural"
                  width={400}
                  height={400}
                  className="mx-auto rounded"
                />
              </SwiperSlide>{" "}
            </Swiper>
            <h3 className="text-xl font-semibold mb-3 pt-4">
              DRY BATH MOMENTS
            </h3>
            <p className="text-gray-600 mb-4">
              The dry bath shampoo range in moments is exactly what promotes
              cleanliness and health to make the playtime junctures memorable.
            </p>
          </div>
          <a href="/enquire-now">
            {" "}
            <button className="mt-2 py-2 px-2 bg-orange-400 text-white rounded-lg w-full text-sm md:text-base flex items-center justify-center hover:bg-orange-500 transition">
              Enquire Now
              <span className="ml-2 moving-arrow">⟶</span>
            </button>
          </a>
        </div>

        {/* Card 3 */}
        <div className="bg-blue-50 p-6 rounded-lg w-72 shadow-lg flex flex-col justify-between min-h-[350px]">
          <div>
            <Swiper
              spaceBetween={30}
              breakpoints={{
                640: {
                  slidesPerView: 1, // Display 2 slides on small screens
                  spaceBetween: 20, // Space between slides for small screens
                },
                768: {
                  slidesPerView: 1, // Display 3 slides on tablets
                  spaceBetween: 25, // Space between slides for tablets
                },
                1024: {
                  slidesPerView: 1, // Display 4.5 slides on desktop
                  spaceBetween: 30, // Space between slides for desktop
                },
              }}
              pagination={{ clickable: true }}
              modules={[Navigation, Autoplay, Pagination]}
              autoplay={{
                delay: 3000, // Time delay in ms between slides
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
            >
              <SwiperSlide>
                <Image
                  src="/pawbalm.png"
                  alt="All Natural"
                  width={400}
                  height={400}
                  className="mx-auto rounded"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/pawbalm2.png"
                  alt="All Natural"
                  width={400}
                  height={400}
                  className="mx-auto rounded"
                />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <Image
                  src="/pawbalm3.png"
                  alt="All Natural"
                  width={400}
                  height={400}
                  className="mx-auto rounded"
                />
              </SwiperSlide>{" "}
            </Swiper>
            <h3 className="text-xl font-semibold mb-3 pt-4">
              PAW BALM STRAWBERRY{" "}
            </h3>
            <p className="text-gray-600 mb-4">
              Fruity and refreshing paw balm with a soft and velvety texture for
              a lick-safe pet-caring experience.
            </p>
          </div>
          <a href="/enquire-now">
            {" "}
            <button className="mt-2 py-2 px-2 bg-orange-400 text-white rounded-lg w-full text-sm md:text-base flex items-center justify-center hover:bg-orange-500 transition">
              Enquire Now
              <span className="ml-2 moving-arrow">⟶</span>
            </button>
          </a>
        </div>

        {/* Card 4 */}
        <div className="bg-[#FFF9F8] p-6 rounded-lg w-72 shadow-lg flex flex-col justify-between min-h-[350px]">
          <div>
            <Swiper
              spaceBetween={30}
              breakpoints={{
                640: {
                  slidesPerView: 1, // Display 2 slides on small screens
                  spaceBetween: 20, // Space between slides for small screens
                },
                768: {
                  slidesPerView: 1, // Display 3 slides on tablets
                  spaceBetween: 25, // Space between slides for tablets
                },
                1024: {
                  slidesPerView: 1, // Display 4.5 slides on desktop
                  spaceBetween: 30, // Space between slides for desktop
                },
              }}
              pagination={{ clickable: true }}
              modules={[Navigation, Autoplay, Pagination]}
              autoplay={{
                delay: 3000, // Time delay in ms between slides
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
            >
              <SwiperSlide>
                <Image
                  src="/perfume1.png"
                  alt="All Natural"
                  width={400}
                  height={400}
                  className="mx-auto rounded"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/perfume2.png"
                  alt="All Natural"
                  width={400}
                  height={400}
                  className="mx-auto rounded"
                />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <Image
                  src="/perfume3.png"
                  alt="All Natural"
                  width={400}
                  height={400}
                  className="mx-auto rounded"
                />
              </SwiperSlide>
            </Swiper>
            <h3 className="text-xl font-semibold mb-3 pt-4">
              PET PERFUME DIAMOND SPARKLE
            </h3>
            <p className="text-gray-600 mb-4">
              Notes that resonate with your pet’s pleasant moods and a happy
              playtime, this diamond sparkle pet perfume is safe and simply, the
              best.
            </p>
          </div>
          <a href="/enquire-now">
            {" "}
            <button className="mt-2 py-2 px-2 bg-orange-400 text-white rounded-lg w-full text-sm md:text-base flex items-center justify-center hover:bg-orange-500 transition">
              Enquire Now
              <span className="ml-2 moving-arrow">⟶</span>
            </button>
          </a>
        </div>
        <div className=" bg-[#FFF9F8] p-6 rounded-lg w-72 shadow-lg flex flex-col justify-between min-h-[350px]">
          <div>
            <Swiper
              spaceBetween={30}
              breakpoints={{
                640: {
                  slidesPerView: 1, // Display 2 slides on small screens
                  spaceBetween: 20, // Space between slides for small screens
                },
                768: {
                  slidesPerView: 1, // Display 3 slides on tablets
                  spaceBetween: 25, // Space between slides for tablets
                },
                1024: {
                  slidesPerView: 1, // Display 4.5 slides on desktop
                  spaceBetween: 30, // Space between slides for desktop
                },
              }}
              pagination={{ clickable: true }}
              modules={[Navigation, Autoplay, Pagination]}
              autoplay={{
                delay: 3000, // Time delay in ms between slides
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
            >
              <SwiperSlide>
                <Image
                  src="/itchshampoo.png"
                  alt="All Natural"
                  width={400}
                  height={400}
                  className="mx-auto rounded"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/itchshampoo2.png"
                  alt="All Natural"
                  width={400}
                  height={400}
                  className="mx-auto rounded"
                />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <Image
                  src="/itchshampoo3.png"
                  alt="All Natural"
                  width={400}
                  height={400}
                  className="mx-auto rounded"
                />
              </SwiperSlide>
            </Swiper>

            <h3 className="text-xl font-semibold mb-3 pt-4">
              ANTI-ITCH SHAMPOO
            </h3>
            <p className="text-gray-600 mb-4">
              With aqua fragrance and chamomile action, get your pet the gift of
              an irritation-free fur coat with itch-free formula, available in
              two sizes: 200 ml and 20 ml.
            </p>
          </div>
          <a href="/enquire-now">
            {" "}
            <button className="mt-2 py-2 px-2 bg-orange-400 text-white rounded-lg w-full text-sm md:text-base flex items-center justify-center hover:bg-orange-504 transition">
              Enquire Now
              <span className="ml-2 moving-arrow">⟶</span>
            </button>
          </a>
        </div>
        <div className=" bg-blue-50 p-6 rounded-lg w-72 shadow-lg flex flex-col justify-between min-h-[350px]">
          <div>
            <Swiper
              spaceBetween={30}
              breakpoints={{
                640: {
                  slidesPerView: 1, // Display 2 slides on small screens
                  spaceBetween: 20, // Space between slides for small screens
                },
                768: {
                  slidesPerView: 1, // Display 3 slides on tablets
                  spaceBetween: 25, // Space between slides for tablets
                },
                1024: {
                  slidesPerView: 1, // Display 4.5 slides on desktop
                  spaceBetween: 30, // Space between slides for desktop
                },
              }}
              pagination={{ clickable: true }}
              modules={[Navigation, Autoplay, Pagination]}
              autoplay={{
                delay: 3000, // Time delay in ms between slides
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
            >
              <SwiperSlide>
                <Image
                  src="/drybathluxe.png"
                  alt="All Natural"
                  width={400}
                  height={400}
                  className="mx-auto rounded"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/drybathluxe2.png"
                  alt="All Natural"
                  width={400}
                  height={400}
                  className="mx-auto rounded"
                />
              </SwiperSlide>{" "}
            </Swiper>
            <h3 className="text-xl font-semibold mb-3 pt-4">
              DRY BATH LUXE BOUTIQUE
            </h3>
            <p className="text-gray-600 mb-4">
              With natural ingredients like aloe vera and essential oils, the
              luxe boutique dry bath shampoo gives a luxury feel to a regular
              cleanliness session
            </p>
          </div>
          <a href="/enquire-now">
            {" "}
            <button className="mt-2 py-2 px-2 bg-orange-400 text-white rounded-lg w-full text-sm md:text-base flex items-center justify-center hover:bg-orange-500 transition">
              Enquire Now
              <span className="ml-2 moving-arrow">⟶</span>
            </button>
          </a>
        </div>
        <div className="bg-green-50 p-6 rounded-lg w-72 shadow-lg flex flex-col justify-between min-h-[350px]">
          <div>
            <Swiper
              spaceBetween={30}
              breakpoints={{
                640: {
                  slidesPerView: 1, // Display 2 slides on small screens
                  spaceBetween: 20, // Space between slides for small screens
                },
                768: {
                  slidesPerView: 1, // Display 3 slides on tablets
                  spaceBetween: 25, // Space between slides for tablets
                },
                1024: {
                  slidesPerView: 1, // Display 4.5 slides on desktop
                  spaceBetween: 30, // Space between slides for desktop
                },
              }}
              pagination={{ clickable: true }}
              modules={[Navigation, Autoplay, Pagination]}
              autoplay={{
                delay: 3000, // Time delay in ms between slides
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
            >
              <SwiperSlide>
                <Image
                  src="/cocpawbutter.png"
                  alt="All Natural"
                  width={400}
                  height={400}
                  className="mx-auto rounded"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/cocpawbutter2.png"
                  alt="All Natural"
                  width={400}
                  height={400}
                  className="mx-auto rounded"
                />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <Image
                  src="/cocpawbutter3.png"
                  alt="All Natural"
                  width={400}
                  height={400}
                  className="mx-auto rounded"
                />
              </SwiperSlide>{" "}
            </Swiper>
            <h3 className="text-xl font-semibold mb-3 pt-4">
              PAW BALM COCO BUTTER{" "}
            </h3>
            <p className="text-gray-600 mb-4">
              A paw balm as soft and smooth as coco for lick-friendly pet care
              and soothing paw-perfect playtime.
            </p>
          </div>
          <a href="/enquire-now">
            {" "}
            <button className="mt-2 py-2 px-2 bg-orange-400 text-white rounded-lg w-full text-sm md:text-base flex items-center justify-center hover:bg-orange-500 transition">
              Enquire Now
              <span className="ml-2 moving-arrow">⟶</span>
            </button>
          </a>
        </div>
        <div className=" bg-pink-50 p-6 rounded-lg w-72 shadow-lg flex flex-col justify-between min-h-[350px]">
          <div>
            <Swiper
              spaceBetween={30}
              breakpoints={{
                640: {
                  slidesPerView: 1, // Display 2 slides on small screens
                  spaceBetween: 20, // Space between slides for small screens
                },
                768: {
                  slidesPerView: 1, // Display 3 slides on tablets
                  spaceBetween: 25, // Space between slides for tablets
                },
                1024: {
                  slidesPerView: 1, // Display 4.5 slides on desktop
                  spaceBetween: 30, // Space between slides for desktop
                },
              }}
              pagination={{ clickable: true }}
              modules={[Navigation, Autoplay, Pagination]}
              autoplay={{
                delay: 3000, // Time delay in ms between slides
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
            >
              <SwiperSlide>
                <Image
                  src="/aquaperfume.png"
                  alt="All Natural"
                  width={400}
                  height={400}
                  className="mx-auto rounded"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/aquaperfume2.png"
                  alt="All Natural"
                  width={400}
                  height={400}
                  className="mx-auto rounded"
                />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <Image
                  src="/aquaperfume3.png"
                  alt="All Natural"
                  width={400}
                  height={400}
                  className="mx-auto rounded"
                />
              </SwiperSlide>
            </Swiper>
            <h3 className="text-xl font-semibold mb-3 pt-4">
              PET PERFUME AQUA
            </h3>
            <p className="text-gray-600 mb-4">
              With refreshing notes and tones of smell, this pet perfume is
              perfect for a pleasant scent that promotes cleanliness and care
              for your pets.{" "}
            </p>
          </div>
          <a href="/enyuire-now">
            {" "}
            <button className="mt-2 py-2 px-2 bg-orange-400 text-white rounded-lg w-full text-sm md:text-base flex items-center justify-center hover:bg-orange-500 transition">
              Enquire Now
              <span className="ml-2 moving-arrow">⟶</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
