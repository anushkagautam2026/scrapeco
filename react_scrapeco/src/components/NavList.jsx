// import React from "react";

// const Header = (props) => {
//     return (
//       <Navbar className="fixed top-0 left-0 right-0 h-16 flex bg-green-600 justify-between items-center px-8 z-30">
//         Navbar
//       </Navbar>
//     );
//   };

// export default Header;

//import React from "react";
//import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import styled from "styled-components";

function NavList() {
  return (
  <ul>
  <li><a href="default.asp">Home</a></li>
  <li><a href="news.asp">News</a></li>
  <li><a href="contact.asp">Contact</a></li>
  <li><a href="about.asp">About</a></li>
  </ul>
  );
}

const ul = styled.div`
  list-style-type: none;
  font-family: "poppins",sans-serif;
  margin: 0;
  padding: 0;
`;



export default NavList;
