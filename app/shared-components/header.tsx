"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarCopy } from "../copy/navbar";
import {GoodTimes} from "@/app/fonts"

export default function Header() {
  const pathname = usePathname();
  return (
    <nav className="container" id="navbar">
      <div className="navbar navbar-expand-lg navbar-dark  mb-3 mt-1">
        <button
          id="navbar-toggle-btn"
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleMain"
          aria-controls="navbarToggleMain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link
          className={`navbar-brand mx-auto d-flex align-items-center text-large ${GoodTimes.className}`}
          href="/"
        >
          {navbarCopy.title}
        </Link>
        <div
          id="navbarToggleMain"
          className="collapse navbar-collapse light-text "
        >
          <ul className="navbar-nav align-items-center col-8 justify-content-center mx-auto text-thin">
            {navbarCopy.navbarLinks.map((item, index) => (
              <li className="nav-item my-sm-3 mx-lg-4 mx-auto" key={index}>
                <Link
                  href={item.url}
                  className={`nav-link text-light text-small ${
                    pathname == item.url ? "active-nav" : ""
                  }`}
                  target={item.target}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={navbarCopy.button.url}
            className="box btn bg-blue text-oxford btn-padding fw-bold"
            target={navbarCopy.button.target}
          >
            {navbarCopy.button.name}
          </Link>
        </div>
      </div>
    </nav>
  );
}
