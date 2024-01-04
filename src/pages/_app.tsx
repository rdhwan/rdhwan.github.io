import { Outlet, ScrollRestoration } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen w-screen justify-center items-center bg-background text-primary font-montserrat">
      <div className="w-full max-w-4xl p-8 flex flex-col items-center">
        <Outlet />
        <ScrollRestoration />
      </div>
    </div>
  );
};

export default Layout;
