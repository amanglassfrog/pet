"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";  // Import the Next.js router hook
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const EnquireNow = () => {
   const router = useRouter(); 
   // Check for Getform's thank you URL and redirect to the custom thank you page
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if redirected to Getform's thank you URL
      if (window.location.href.includes("https://getform.io/thank-you?id=alljomwa")) {
        // Redirect to the custom thank you page
        router.push("/coming-soon");
      }
    }
  }, [router]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    products: [],
    message: ""
  });

  const [loading, setLoading] = useState(false);
  // Initialize the router

  const productsOptions = [
    { id: 1, name: "ANTI-TICK SHAMPOO" },
    { id: 2, name: "DRY BATH MOMENTS" },
    { id: 3, name: "PAW BALM STRAWBERRY" },
    { id: 4, name: "PET PERFUME DIAMOND SPARKLE" },
    { id: 5, name: "ANTI-ITCH SHAMPOO" },
    { id: 6, name: "DRY BATH LUXE BOUTIQUE" },
    { id: 7, name: "PAW BALM COCO BUTTER" },
    { id: 8, name: "PET PERFUME AQUA" },
  ];

 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProductChange = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFormData({ ...formData, products: value });
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-5">
        <div className="w-full container p-4">
          <h1 className="text-3xl font-bold mb-8">Enquire Now</h1>
          <form
           action="https://getform.io/f/alljomwa" method="POST"
            className="bg-white shadow-md rounded-lg p-8 space-y-6"
          >
            {/* Name Field */}
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 rounded p-3 w-full"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded p-3 w-full"
                required
              />
            </div>

            {/* Mobile Field */}
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="mobile">
                Mobile Number
              </label>
              <input
                type="text"
                name="mobile"
                id="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="border border-gray-300 rounded p-3 w-full"
                required
                maxLength={10}
              />
            </div>

            {/* Products Field */}
            <div className="mb-4">
              <label className="block text-gray-700">Select Product</label>
              <select
                name="category"
                type="option"
                value={formData.products}
                onChange={handleProductChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select Product</option>
                {productsOptions.map((product) => (
                  <option key={product.id} value={product.name}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-300 rounded p-3 w-full"
                rows="4"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-right">
              <button
                type="submit"
                className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition duration-200"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EnquireNow;
