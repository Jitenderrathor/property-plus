import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider"; // Ensure this path is correct
import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property Plus",
  description: "Real Estate Application",
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {/* The Provider MUST be inside the body */}
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
