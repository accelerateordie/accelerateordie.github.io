"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderMobile() {
    const pathname = usePathname();
    return (
        <header className="header mb-2 px-4">
   <nav className="container" id="navbar-mobile">
            <div className="navbar mt-3">

                <a className="navbar-brand text-light d-flex align-items-left text-medium" 
                style={{fontFamily: "GoodTimes',sans-serif"}}
                    href="./index.html">
                    ACCEL
                </a>
                {/* onclick="scrollToContent('footer-mobile')" */}
                <button id="navbar-toggle-btn" className="navbar-toggler" type="button" >
                    <img src="./img/mobileHamburgerMenu.png" alt="menu" className="navbar-toggler-icon" />
                </button>
            </div>
            <div id="navbarToggle-back" className="sidenav-back"></div>
            <div id="navbarToggleMain" className="sidenav justify-content-between">
                {/* onclick="closeNav()" */}
                <a href="#" className="closebtn" >&times;</a>
                <ul>
                    <li><a href="index-mobile.html" className="text-small text-light">Home</a></li>
                    <li>
                        <a href="#" className="nav-link text-light" data-query="navbar.navbar-links-mob.0.name" data-attribute="href"
                            data-target="target">How to Accelerate</a>
                    </li>
                    <li> <a href="#" className="nav-link text-light" data-query="navbar.navbar-links-mob.1.name"
                        data-attribute="href">School of ACCEL</a></li>
                    <li> <a href="#" className="nav-link text-light" data-query="navbar.navbar-links-mob.2.name"
                        data-attribute="href">My
                        Journey</a></li>
                    <li> <a href="#" className="nav-link text-light" data-query="navbar.navbar-links-mob.3.name"
                        data-attribute="href">The
                        ACCEL Tunnel</a></li>
                </ul>
                {/* onclick="scrollToContent('footer-mobile')" */}
                <a data-query="navbar.button._" data-attribute="href" target="_self">
                    <button className="QuestionButton button text-xsmal" data-query="navbar.button.name">Ask a Question</button>
                </a>
            </div>

        
        </nav >
        </header>
     
    )
}