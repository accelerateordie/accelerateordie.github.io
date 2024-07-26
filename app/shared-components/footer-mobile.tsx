"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FooterMobile() {
    const pathname = usePathname();
    return (
        <footer className="container px-4" id="footer-mobile">
            <div id="footer-mob" className="col-12 white-border-mob br-half bb-half Box-padding">
                <div className="AccelText text-left mt-5">
                    <ul>
                        <li className="text-thin text-medium"><strong>Quick Links</strong></li>
                        <li className="text-thin text-small"><a href="#" target="_blank"
                            className="nav-link text-small text-thin my-2"
                            data-query="footer.quick-links-mob.0.name" data-attribute="href"
                            data-target="target">Home</a>
                        </li>
                        <li className="text-thin text-small"><a href="#" target="_blank"
                            className="nav-link text-small text-thin my-2"
                            data-query="footer.quick-links-mob.1.name" data-attribute="href"
                            data-target="target">How to
                            Accelerate</a>
                        </li>
                        <li className="text-thin text-small"><a href="#" target="_blank"
                            className="nav-link text-small text-thin my-2"
                            data-query="footer.quick-links-mob.2.name" data-attribute="href"
                            data-target="target">School
                            of ACCEL</a></li>
                        <li className="text-thin text-small"> <a href="#" target="_blank"
                            className="nav-link text-small text-thin my-2"
                            data-query="footer.quick-links-mob.3.name" data-attribute="href"
                            data-target="target">My
                            Journey</a></li>
                        <li className="text-thin text-small"><a href="#" target="_blank"
                            className="nav-link text-small text-thin my-2"
                            data-query="footer.quick-links-mob.4.name" data-attribute="href"
                            data-target="target">ACCEL
                            Tunnel
                        </a></li>
                    </ul>
                    <ul className="mt-5">
                        <li className="text-thin text-medium"><strong>Resources</strong></li>
                        <li className="text-thin text-small"><a href="#" target="_blank"
                            className="nav-link text-small text-thin my-2" data-query="footer.resources.0.name"
                            data-attribute="href" data-target="target">Resources</a></li>
                        <li className="text-thin text-small"><a href="#" target="_blank"
                            className="nav-link text-small text-thin my-2" data-query="footer.resources.1.name"
                            data-attribute="href" data-target="target">Media &
                            Press</a></li>
                        <li className="text-thin text-small"><a href="#" target="_blank"
                            className="nav-link text-small text-thin my-2" data-query="footer.resources.2.name"
                            data-attribute="href" data-target="target">FAQ</a>
                        </li>
                    </ul>
                    <ul className="mt-5">
                        <li className="text-thin text-medium"><strong>Legal</strong></li>
                        <li className="text-thin text-small"><a href="#" target="_blank"
                            className="nav-link text-small text-thin my-2" data-query="footer.legal.0.name"
                            data-attribute="href" data-target="target">Terms
                            of Service</a></li>
                        <li className="text-thin text-small"><a href="#" target="_blank"
                            className="nav-link text-small text-thin my-2" data-query="footer.legal.1.name"
                            data-attribute="href" data-target="target">Privacy
                            Policy</a></li>
                    </ul>
                    <p className="font-goodtimes text-medium-mob mt-4">ACCEL</p>
                    {/* <!-- Social Links --> */}
                    <div id="SocialLinks" className="col-12 mt-5 mb-5 ">
                        <ul>
                            <li>
                                <a href="https://x.com/accel_co" target="_blank"
                                    data-query="footer.social-links.x._" data-attribute="href"
                                    data-target="target"><img src="./img/icon-x.svg" alt="X" /></a>
                            </li>
                            <li> <a href="https://instagram.com/accel_co" target="_blank"
                                data-query="footer.social-links.instagram._" data-attribute="href"
                                data-target="target"><img src="./img/icon-instagram.svg"
                                    alt="Instagram" /></a>
                            </li>
                            <li> <a href="https://github.com/accelerateordie" target="_blank"
                                data-query="footer.social-links.github._" data-attribute="href"
                                data-target="target"><img src="./img/icon-github.svg" alt="Github" /></a>
                            </li>

                            <li> <a href="https://discord.com/invite/XJWWptTH" target="_blank"
                                data-query="footer.social-links.discord._" data-attribute="href"
                                data-target="target"><img src="./img/icon-discord.svg"
                                    alt="Discord" /></a>
                            </li>
                            <li className="p-social"> <a href="https://tiktok.com/accel_co" target="_blank"
                                data-query="footer.social-links.tiktok._" data-attribute="href"
                                data-target="target"><img src="./img/icon-tiktok.svg" alt="TikTok" /></a>
                            </li>
                            <li className="p-social"> <a href="https://www.youtube.com/@accel_company" target="_blank"
                                data-query="footer.social-links.youtube._" data-attribute="href"
                                data-target="target"><img src="./img/icon-youtube.png" alt="Youtube"
                                    style={{width: "26px", height: "36px"}} /></a>
                            </li>
                            <li className="p-social"> <a href="https://www.linkedin.com/company/accel-co/"
                                target="_blank" data-query="footer.social-links.linkedin._"
                                data-attribute="href" data-target="target"><img
                                    src="./img/icon-linkedin.svg" alt="Linked-in" /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-xsmall col-12" data-query="footer.copyright"> <span>© Copyright ACCELERATE OR DIE. All
                        rights
                        reserved</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}