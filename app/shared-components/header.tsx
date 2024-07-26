"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    return (
        <nav className="container" id="navbar">
            <div className="navbar navbar-expand-lg navbar-dark  mb-3 mt-1">
                <button id="navbar-toggle-btn" className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarToggleMain" aria-controls="navbarToggleMain" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand mx-auto d-flex align-items-center text-large "
                    href="/">
                    ACCEL
                </Link>
                <div id="navbarToggleMain" className="collapse navbar-collapse light-text ">
                    <ul className="navbar-nav align-items-center col-8 justify-content-center mx-auto text-thin">
                        <li className="nav-item my-sm-3 mx-lg-4 mx-auto">
                            {/* active-nav */}
                            <Link href="/how-to-accelerate" className={`nav-link text-light text-small ${pathname == '/how-to-accelerate' ? 'active-nav' : ''}`} data-query="navbar.navbar-links.0.name" data-attribute="href"
                                data-target="target">How to Accelerate</Link>
                        </li>
                        <li className="nav-item my-sm-2 mx-4">
                            <Link href="/school-of-accel" className={`nav-link text-light text-small ${pathname == '/school-of-accel' ? 'active-nav' : ''}`} data-query="navbar.navbar-links.1.name"
                                data-attribute="href">School of ACCEL</Link>
                        </li>
                        <li className="nav-item my-sm-2 mx-4">
                            <Link href="/my-journey" className={`nav-link text-light text-small ${pathname == '/my-journey' ? 'active-nav' : ''}`} data-query="navbar.navbar-links.2.name" data-attribute="href">My
                                Journey</Link>
                        </li>
                        <li className="nav-item my-sm-2 mx-4">
                            <Link href="https://accel.io/" target="_blank" className="nav-link text-light text-small" data-query="navbar.navbar-links.3.name"
                                data-attribute="href">The ACCEL Tunnel</Link>
                        </li>
                    </ul>
                    {/* navbar.button.name */}
                    <Link href="#footer" className="box btn bg-blue text-oxford btn-padding fw-bold" data-query="navbar.button._" data-attribute="href" target="_self">
                        Ask a
                        Question
                    </Link>
                </div>


            </div>
        </nav>
    );
}