import "./globals.css";
import Footer from "@/component/Footer";

export const metadata = {
  title: "Google Clone",
  description: "Google Clone made with Nex.js & Tailwind.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {children}
        <Footer />
      </body>
    </html>
  );
}
