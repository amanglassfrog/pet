"use client";
import { useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from '../coming-soon/animation.json'; // Adjust the path
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const ComingSoon = () => {
    return (
        <>
            <Navbar/>
            <div className="flex flex-col items-center justify-center min-h-screen ">
                <h1 className="text-4xl font-bold text-gray-800 mb-5">Coming Soon</h1>
                
                {/* Animation */}
                <div className="w-[50%]">
                    <Lottie animationData={animationData} loop={true} />
                </div>
                
                <p className="text-gray-600 mt-5">We're working hard to launch soon!</p>
            </div>
            <Footer/>
        </>
    );
};

export default ComingSoon;
