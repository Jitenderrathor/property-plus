import "@/assets/styles/globals.css";

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
