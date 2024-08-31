"use client";
import { OffcanvasProvider } from "./OffCanvas/Context";
import { Trigger } from "./OffCanvas/Trigger";
import { Offcanvas } from "./OffCanvas/OffCanvas";
import { navbarCopy } from "../copy/navbar";
import {GoodTimes} from "@/app/fonts"

export default function HeaderMobile() {
  const handleOpen = () => console.log("");
  const handleClose = () => console.log("");
  return (
    <header className="header mb-2 ">
      <nav className="container px-4" id="navbar-mobile">
        <div className="navbar mt-3">
          <a
            className={`navbar-brand text-light d-flex align-items-left text-medium ${GoodTimes.className}`}
            href="/"
          >
            {navbarCopy.title}
          </a>
          <OffcanvasProvider onOpen={handleOpen} onClose={handleClose}>
            <Trigger />
            <Offcanvas />
          </OffcanvasProvider>
        </div>
        <div id="navbarToggle-back" className="sidenav-back"></div>
        <div id="navbarToggleMain" className="sidenav justify-content-between">
          {/* onclick="closeNav()" */}
          <a href="#" className="closebtn">
            &times;
          </a>
          <ul>
            <li>
              <a href="/" className="text-small text-light">
                Home
              </a>
            </li>
            {navbarCopy.navbarLinks.map((link, index) => (
              <li>
                <a
                  href={link.url}
                  target={link.target}
                  className="nav-link text-light"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          {/* onclick="scrollToContent('footer-mobile')" */}
          <a href={navbarCopy.button.url} target={navbarCopy.button.target}>
            <button className="QuestionButton button text-xsmal">
              {navbarCopy.button.name}
            </button>
          </a>
        </div>
      </nav>
    </header>
  );
}
