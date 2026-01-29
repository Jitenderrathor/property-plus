import Navbar from "@/components/Navbar";
import "@/assets/styles/globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Property Plus",
  keywords:
    "real estate, property, homes, apartments, buying, selling, renting",
  description:
    "Discover Your Dream Home with Property Plus - Your Ultimate Real Estate Companion",
};
function MainLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default MainLayout;
