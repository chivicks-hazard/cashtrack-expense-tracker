import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body className="bg-background text-on-background font-body-md text-body-md flex min-h-screen">
      {/* <!-- SideNavBar --> */}
      <SideBar />
      {/* <!-- Main Content Area --> */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* <!-- TopNavBar --> */}
        <Header />
        {/* <!-- Page Content --> */}
        {children}
      </div>
    </body>
  );
};

export default DashboardLayout;
