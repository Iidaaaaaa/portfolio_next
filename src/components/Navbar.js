import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="header__global global">
      <div id="page-link" className="global__all">
        {["TOP", "PROFILE", "SKILL", "WORK", "CONTACT"].map((text, index) => (
          <ul key={index} className="global__one">
            <li className="select">
              <Image
                width={20}
                height={20}
                className="global__select"
                src="/image/triangle.svg"
                alt="select"
              />
              <a className="global__maintext" href={`#${text.toLowerCase()}`}>
                {text}
              </a>
            </li>
          </ul>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
