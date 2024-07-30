import Link from "next/link";
import { footerCopy } from "../copy/footer";

export default function Footer() {
    return (
        <div className="content mx-lg-5">
            <footer className="container px-0" id="footer">
                <div className="row white-border bt-half p-5 mb-5 mx-0">
                    <div className="row ">
                        <div className="col-lg-4 d-flex flex-column text-center">
                            <Link href="#" className="mb text-decoration-none">
                                <h3 className="font-goodtimes text-xlarge text-light">ACCEL</h3>
                            </Link>

                            <div className="my-2">
                                <ul className="navbar-nav footer-social list-group-horizontal justify-content-between">

                                    <li className="p-social">
                                        <Link href={footerCopy["social-links"].x.url}
                                            target={footerCopy["social-links"].x.target}>
                                            <img src="./img/icon-x.svg" alt="X" />
                                        </Link>
                                    </li>
                                    <li className="p-social">
                                        <Link href={footerCopy["social-links"].instagram.url}
                                            target={footerCopy["social-links"].instagram.target}>
                                            <img src="./img/icon-instagram.svg" alt="Instagram" />
                                        </Link>
                                    </li>
                                    <li className="p-social"> <Link href={footerCopy["social-links"].github.url} target={footerCopy["social-links"].github.target}>
                                        <img src="./img/icon-github.svg" alt="Github" />
                                    </Link>
                                    </li>

                                    <li className="p-social"> <Link href={footerCopy["social-links"].discord.url} target={footerCopy["social-links"].discord.target}
                                        data-query="footer.social-links.discord._" data-attribute="href" data-target="target"><img
                                            src="./img/icon-discord.svg" alt="Discord" /></Link>
                                    </li>
                                    <li className="p-social"> <Link href={footerCopy["social-links"].tiktok.url} target={footerCopy["social-links"].tiktok.target}
                                        data-query="footer.social-links.tiktok._" data-attribute="href" data-target="target"><img
                                            src="./img/icon-tiktok.svg" alt="TikTok" /></Link>
                                    </li>
                                    <li className="p-social"> <Link href={footerCopy["social-links"].youtube.url} target={footerCopy["social-links"].youtube.target}
                                        data-query="footer.social-links.youtube._" data-attribute="href" data-target="target"><img
                                            src="./img/icon-youtube.png" alt="Youtube" style={{ width: "26px", height: "36px" }} /></Link>
                                    </li>
                                    <li className="p-social"> <Link href={footerCopy["social-links"].linkedin.url} target={footerCopy["social-links"].linkedin.target}
                                        data-query="footer.social-links.linkedin._" data-attribute="href" data-target="target"><img
                                            src="./img/icon-linkedin.svg" alt="Linked-in" /></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="my-4 text-thin" data-query="footer.copyright"> <span>© Copyright ACCELERATE OR DIE. All rights
                                reserved</span>
                            </div>
                        </div>
                        <div className="col-lg-6 ms-auto row mt-lg-0 mt-3 justify-content-end">
                            <div className="col-lg-4 col-6">
                                <ul className="list-unstyled">
                                    <li className="mb-4">
                                        <h3 className="text-medium" style={{ color: "#57B3E6" }}>Quick Links</h3>
                                    </li>
                                    {footerCopy["quick-links"].map(item =>
                                    (
                                        <li> <Link href={item.url} target={item.target} className="nav-link text-small text-thin my-2">
                                            {item.name}
                                        </Link>
                                        </li>
                                    )

                                    )}

                                </ul>
                            </div>
                            <div className="col-lg-4 col-6">
                                <ul className="list-unstyled">
                                    <li className="mb-4">
                                        <h3 className="text-medium" style={{ color: "#57B3E6" }}>Resources</h3>
                                    </li>
                                    {footerCopy.resources.map(item =>
                                    (
                                        <li> <Link href={item.url} target={item.target} className="nav-link text-small text-thin my-2">
                                            {item.name}
                                        </Link>
                                        </li>
                                    )

                                    )}
                                </ul>
                            </div>
                            <div className="col-lg-4 col-6">
                                <ul className="list-unstyled">
                                    <li className="mb-4">
                                        <h3 className="text-medium" style={{ color: "#57B3E6" }}>Legal</h3>
                                    </li>
                                    {footerCopy.legal.map(item =>
                                    (
                                        <li> <Link href={item.url} target={item.target} className="nav-link text-small text-thin my-2">
                                            {item.name}
                                        </Link>
                                        </li>
                                    )

                                    )}

                                </ul>
                            </div>

                        </div>
                    </div>


                </div>
            </footer>
        </div>
    );
}