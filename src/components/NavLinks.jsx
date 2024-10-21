import { Link } from "react-router-dom";

const navLinks = [
  {
    path: "/resume",
    text: "Resume",
  },
  {
    path: "/projects",
    text: "Projects",
  },
  {
    path: "/contact",
    text: "Contact",
  },
];
function NavLinks() {
  return (
    <>
      {navLinks.map((navLink) => {
        return (
          <li key={navLink.path}>
            <Link className="poppins  font-medium " to={navLink.path}>
              {navLink.text}
            </Link>
          </li>
        );
      })}
    </>
  );
}

export default NavLinks;
