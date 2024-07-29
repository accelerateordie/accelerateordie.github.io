"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { OffcanvasProvider } from "./OffCanvas/Context";
import { Trigger } from "./OffCanvas/Trigger";
import { Offcanvas } from "./OffCanvas/OffCanvas";

export default function HeaderMobile() {
    const handleOpen = () => console.log("");
    const handleClose = () => console.log("");
    const pathname = usePathname();
    return (
        <header className="header mb-2 ">
            <nav className="container px-4" id="navbar-mobile">
            <div className="navbar mt-3">

                <a className="navbar-brand text-light d-flex align-items-left text-medium" 
                style={{fontFamily: "GoodTimes',sans-serif"}}
                    href="/">
                    ACCEL
                </a>
                    <OffcanvasProvider onOpen={handleOpen} onClose={handleClose}>
                        <Trigger />
                        <Offcanvas />
                    </OffcanvasProvider>
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