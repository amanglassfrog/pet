import { Fuzzy_Bubbles } from "next/font/google"; // Import Fuzzy Bubbles font
import "./globals.css";
import Script from "next/script";

// Import Fuzzy Bubbles font with the specified subset and preloading
const fuzzyBubbles = Fuzzy_Bubbles({
  weight: ["400", "700"], // Specify the font weights
  variable: "--font-fuzzy-bubbles", // Define the CSS variable for font
  subsets: ["latin"], // Specify the subset
  preload: true, // Enable preloading
});

export const metadata = {
  title: "PURE PAW PET CARE",
  description: "Your true partner in the pet care journey!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KT8NY70ZMK"
          strategy="afterInteractive"
          async
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KT8NY70ZMK');
          `}
        </Script>
      </head>
      <body className={`${fuzzyBubbles.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
