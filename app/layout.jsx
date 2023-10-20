import "@/styles/globals.css";

import Nav from "@/components/Nav";

export const metadata = {
  title: "Lucky Draw",
  description: "Randomly lucky draw coupon",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        {children}
      </body>
    </html>
  );
};

export default RootLayout;
