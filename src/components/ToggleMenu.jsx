import NavLinks from "./NavLinks";

function ToggleMenu() {
  return (
    <div className=" bg-[#fff248] fixed top-16 p-5 z-50 w-full h-screen transform transition-all duration-300 ease-out  animate-modal backdrop-opacity-30 ">
      <div className=" bg-yellow-600 w-full h-full grid place-content-center">
        <NavLinks />
      </div>
    </div>
  );
}

export default ToggleMenu;
