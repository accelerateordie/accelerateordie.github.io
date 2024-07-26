import Link from "next/link";

export default function Footer() {
    return (
        <div className="content mx-lg-5">
        <footer className="container" id="footer">
            <div className="row white-border bt-half p-5 mb-5">
                <div className="row mt-high">
                    <div className="col-lg-6 d-flex flex-column justify-content-between">
                        <Link href="#" className="mb-5 text-decoration-none">
                            <h3 className="font-goodtimes text-xlarge text-light">ACCEL</h3>
                        </Link>

                        <div className="my-4">
                            <ul className="navbar-nav footer-social list-group-horizontal">
                                <li className="p-social">
                                    <Link href="https://x.com/accel_co" target="_blank" data-query="footer.social-links.x._"
                                        data-attribute="href" data-target="target"><img src="./img/icon-x.svg" alt="X" /></Link>
                                </li>
                                <li className="p-social"> <Link href="https://instagram.com/accel_co" target="_blank"
                                    data-query="footer.social-links.instagram._" data-attribute="href" data-target="target"><img
                                        src="./img/icon-instagram.svg" alt="Instagram" /></Link>
                                </li>
                                <li className="p-social"> <Link href="https://github.com/accelerateordie" target="_blank"
                                    data-query="footer.social-links.github._" data-attribute="href" data-target="target"><img
                                        src="./img/icon-github.svg" alt="Github" /></Link>
                                </li>

                                <li className="p-social"> <Link href="https://discord.com/invite/XJWWptTH" target="_blank"
                                    data-query="footer.social-links.discord._" data-attribute="href" data-target="target"><img
                                        src="./img/icon-discord.svg" alt="Discord" /></Link>
                                </li>
                                <li className="p-social"> <Link href="https://tiktok.com/accel_co" target="_blank"
                                    data-query="footer.social-links.tiktok._" data-attribute="href" data-target="target"><img
                                        src="./img/icon-tiktok.svg" alt="TikTok" /></Link>
                                </li>
                                <li className="p-social"> <Link href="https://www.youtube.com/@accel_company" target="_blank"
                                    data-query="footer.social-links.youtube._" data-attribute="href" data-target="target"><img
                                        src="./img/icon-youtube.png" alt="Youtube" style={{ width: "26px", height: "36px" }} /></Link>
                                </li>
                                <li className="p-social"> <Link href="https://www.linkedin.com/company/accel-co/" target="_blank"
                                    data-query="footer.social-links.linkedin._" data-attribute="href" data-target="target"><img
                                        src="./img/icon-linkedin.svg" alt="Linked-in" /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 row mt-lg-0 mt-3 justify-content-end">
                        <div className="col-lg-4 col-6">
                            <ul className="list-unstyled">
                                <li className="mb-4">
                                    <h3 className="text-medium">Quick Links</h3>
                                </li>
                                <li> <Link href="#" target="_blank" className="nav-link text-small text-thin my-2"
                                    data-query="footer.quick-links.0.name" data-attribute="href" data-target="target">Home</Link>
                                </li>
                                <li> <Link href="#" target="_blank" className="nav-link text-small text-thin my-2"
                                    data-query="footer.quick-links.1.name" data-attribute="href" data-target="target">How to
                                    Accelerate</Link>
                                </li>
                                <li> <Link href="#" target="_blank" className="nav-link text-small text-thin my-2"
                                    data-query="footer.quick-links.2.name" data-attribute="href" data-target="target">School
                                    of ACCEL</Link>
                                </li>
                                <li> <Link href="#" target="_blank" className="nav-link text-small text-thin my-2"
                                    data-query="footer.quick-links.3.name" data-attribute="href" data-target="target">My
                                    Journey</Link>
                                </li>
                                <li> <Link href="#" target="_blank" className="nav-link text-small text-thin my-2"
                                    data-query="footer.quick-links.4.name" data-attribute="href" data-target="target">ACCEL
                                    Tunnel
                                </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-6">
                            <ul className="list-unstyled">
                                <li className="mb-4">
                                    <h3 className="text-medium">Resources</h3>
                                </li>
                                <li> <Link href="#" target="_blank" className="nav-link text-small text-thin my-2"
                                    data-query="footer.resources.0.name" data-attribute="href"
                                    data-target="target">Resources</Link>
                                </li>
                                <li> <Link href="#" target="_blank" className="nav-link text-small text-thin my-2"
                                    data-query="footer.resources.1.name" data-attribute="href" data-target="target">Media &
                                    Press</Link>
                                </li>
                                <li> <Link href="#" target="_blank" className="nav-link text-small text-thin my-2"
                                    data-query="footer.resources.2.name" data-attribute="href" data-target="target">FAQ</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-6 mt-lg-0 mt-3">
                            <ul className="list-unstyled">
                                <li className="mb-4">
                                    <h3 className="text-medium">Legal</h3>
                                </li>
                                <li> <Link href="#" target="_blank" className="nav-link text-small text-thin my-2"
                                    data-query="footer.legal.0.name" data-attribute="href" data-target="target">Terms
                                    of Service</Link>
                                </li>
                                <li> <Link href="#" target="_blank" className="nav-link text-small text-thin my-2"
                                    data-query="footer.legal.1.name" data-attribute="href" data-target="target">Privacy
                                    Policy</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="my-5 text-thin" data-query="footer.copyright"> <span>© Copyright ACCELERATE OR DIE. All rights
                    reserved</span>
                </div>
            </div>
        </footer>
        </div>
    );
}