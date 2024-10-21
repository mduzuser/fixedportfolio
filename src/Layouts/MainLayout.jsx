//rrd imports
import { Outlet } from "react-router-dom";

//components
import { Navbar, Footer, TextScroll } from "../components";

function MainLayout() {
  return (
    <>
      <Navbar />
      <TextScroll />
      <main>
        <Outlet />
      </main>
      <TextScroll />
      <Footer />
    </>
  );
}

export default MainLayout;
