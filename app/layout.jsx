import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ContactModalProvider } from "@/context/ContactModalContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Technical Forest Services',
  description: 'Professional Forest Management Solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        />
        <script dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== 'undefined') {
              window.history.scrollRestoration = 'manual';
              window.onload = function() {
                window.scrollTo(0, 0);
              }
            }
          `
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ContactModalProvider>
          {children}
          <Footer />
        </ContactModalProvider>
      </body>
    </html>
  );
}
