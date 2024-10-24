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
                <meta name="google-site-verification" content="sl2813YiVanE1sUEhBlAfCmb5oUcjaO-d7oNn_GQI7c" />

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
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WN3NK4JX');
          `}
        </Script>
      </head>
      <body className={`${fuzzyBubbles.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WN3NK4JX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
