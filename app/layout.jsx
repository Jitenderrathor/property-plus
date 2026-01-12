import "@/assets/styles/globals.css";

export const metadata = {
    title:"Property Plus", 
  }
const MainLayout = ({ children }) => {
  
  return (
    <html>
      {/* Add suppressHydrationWarning here */}
      <body suppressHydrationWarning>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
