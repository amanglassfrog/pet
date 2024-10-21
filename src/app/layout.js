import { Fuzzy_Bubbles } from "next/font/google"; // Import Fuzzy Bubbles
import "./globals.css";
import Script from "next/script";


// Import Fuzzy Bubbles font with the specified subset and preloading
const fuzzyBubbles = Fuzzy_Bubbles({
  weight: ["400", "700"], // Customize the weights you need
  variable: "--font-fuzzy-bubbles",
  subsets: ["latin"], // Specify the subset (e.g., "latin" or any other available)
  preload: true, // Enable or disable preloading as needed
});

export const metadata = {
  title: "PURE PAW PET CARE",
  description: "Your true partner in the pet care journey! ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-E2K2R6FDCZ"
        strategy="afterInteractive"
        async
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-E2K2R6FDCZ');
        `}
      </Script>
      </head>
      <body className={`${fuzzyBubbles.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
