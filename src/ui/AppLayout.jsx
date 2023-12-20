import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <h1>App layout</h1>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
