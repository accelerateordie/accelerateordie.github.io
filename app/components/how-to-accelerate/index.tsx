"use client"
export default function Sections() {
    return (
        <div className="container">

            <div className="row white-border bb-half p-5 position-relative overflow-hidden">
                <div className="col-md-5 py-5">
                    <img src="./img/vertical-lines-rectangle.svg" className="w-90" alt="Vertical Gradient Lines" />
                </div>
                <div className="col-md-7 ps-4">
                    <div className=" mt-high text-uppercase font-goodtimes text-xxlarge text-narrow-height "
                        data-query="how-to-accelerate.header.title">
                        <h1 className="text-uppercase font-goodtimes text-xxlarge text-narrow-height">
                            HOW TO
                            <br />
                            <span className="text-blue">ACCELERATE</span>
                        </h1>
                    </div>
                    <div className="text-thin text-medium my-5 text-narrow-height"
                        data-query="how-to-accelerate.header.subtitle">
                        To accelerate means adopting a mindset of agency and intelligence, aiming to expand
                        consciousness throughout the universe.
                        <br /> <br />
                        This involves unwavering self-belief, optimism, and commitment to purpose. As an
                        accelerationist, you strive to understand the universe from first principles, advancing
                        humanity's intelligence and spreading memes and genes.
                    </div>
                    <a data-query="how-to-accelerate.header.button._" data-attribute="href" data-target="target"
                        target="_blank" href="https://discord.com/invite/XJWWptTH">
                        <button className="btn font-goodtimes text-medium text-thin bg-blue btn-xpadding mb-high box"
                            data-query="how-to-accelerate.header.button.name">JOIN THE MOVEMENT</button>
                    </a>
                </div>
                {/* <!-- TOP RIGHT SQUARES --> */}
                <div className="position-absolute top-0 end-0" >
                    <div className="big-square white-border position-absolute top-0 end-0"></div>
                    <div className="small-square white-border position-absolute top-0 end-0"></div>
                </div>
            </div>
            <div className="row">
                {/* <!-- CARD 1 --> */}
                <div
                    className="col-md-3  white-border text-center p-5 bb-half br-half bt-half position-relative overflow-hidden  hover-bb">
                    <div className="image-wrapper">
                        <img src="./img/icon-role.svg" alt="AFFIRM YOUR ROLE" className="original  w-50" />
                        <img src="./img/icon-role-2.svg" alt="AFFIRM YOUR ROLE" className="hover  w-50" />
                    </div>

                    <h5 className="text-uppercase font-goodtimes text-medium text-narrow-height my-3 text-blue"
                        data-query="how-to-accelerate.cards.0.step">STEP 1:
                    </h5>
                    <h5 className="text-uppercase font-goodtimes text-medium text-narrow-height my-3"
                        style={{ height: "3rem" }}
                        data-query="how-to-accelerate.cards.0.title">AFFIRM YOUR ROLE
                    </h5>
                    <div style={{ height: "8rem" }}>
                        <p className="text-thin text-n300 text-small text-narrow-height mt-4"
                            data-query="how-to-accelerate.cards.0.description">Recognize your
                            purpose in acceleration. Break
                            away from consumption and focus on creation, enhancing humanity's genetic and memetic
                            repositories. Inspire others to join the cause.</p>
                    </div>
                    <div className="bb-gradient bg-blue-gradient"></div>
                </div>
                {/* <!-- CARD 2 --> */}
                <div
                    className="col-md-3  white-border text-center p-5 bb-half br-half bt-half bl-half position-relative overflow-hidden  hover-bb">
                    <div className="image-wrapper">
                        <img src="./img/icon-influence.svg" alt="Influence" className="original  w-50" />
                        <img src="./img/icon-influence-2.svg" alt="Influence" className="hover  w-50" />
                    </div>

                    <h5 className="text-uppercase font-goodtimes text-medium text-narrow-height my-3 text-blue"
                        data-query="how-to-accelerate.cards.1.step">STEP 2:
                    </h5>
                    <h5 className="text-uppercase font-goodtimes text-medium text-narrow-height my-3"
                        data-query="how-to-accelerate.cards.1.title">EXTEND
                        YOUR INFLUENCE
                    </h5>
                    <div style={{ height: "8rem" }}>
                        <p className="text-thin text-n300 text-small text-narrow-height mt-4"
                            data-query="how-to-accelerate.cards.1.description">Find a stable
                            partner and have children to exceed replacement level. Nurture their acceleration, fostering
                            their understanding of the universe so they can contribute effectively.</p>
                    </div>
                    <div className="bb-gradient bg-blue-gradient"></div>
                </div>
                {/* <!-- CARD 3 --> */}
                <div
                    className="col-md-3  white-border text-center p-5 bb-half br-half bt-half bl-half position-relative overflow-hidden  hover-bb">
                    <div className="image-wrapper">
                        <img src="./img/icon-problems.svg" alt="Problems" className="original  w-50" />
                        <img src="./img/icon-problems-2.svg" alt="Problems" className="hover  w-50" />
                    </div>
                    <h5 className="text-uppercase font-goodtimes text-medium text-narrow-height my-3 text-blue"
                        data-query="how-to-accelerate.cards.2.step">STEP 3:
                    </h5>
                    <h5 className="text-uppercase font-goodtimes text-medium text-narrow-height my-3"
                        data-query="how-to-accelerate.cards.2.title">SOLVE
                        KEY PROBLEMS
                    </h5>
                    <div style={{ height: "8rem" }}>
                        <p className="text-thin text-n300 text-small text-narrow-height mt-4"
                            data-query="how-to-accelerate.cards.2.description">Invest in
                            understanding the environment and universe. Identify and solve problems to propel humanity
                            forward. Share your goals and progress transparently, demonstrating pure motives.</p>
                    </div>
                    <div className="bb-gradient bg-blue-gradient"></div>
                </div>
                {/* <!-- CARD 4 --> */}
                <div
                    className="col-md-3  white-border text-center p-5 bb-half br-half bt-half bl-half position-relative overflow-hidden  hover-bb">
                    <div className="image-wrapper">
                        <img src="./img/icon-public.svg" alt="Public" className="original w-50" />
                        <img src="./img/icon-public-2.svg" alt="Public" className="hover w-50" />
                    </div>
                    <h5 className="text-uppercase font-goodtimes text-medium text-narrow-height my-3 text-blue"
                        data-query="how-to-accelerate.cards.3.step">STEP 4:
                    </h5>
                    <h5 className="text-uppercase font-goodtimes text-medium text-narrow-height my-3"
                        data-query="how-to-accelerate.cards.3.title" style={{ height: "3rem" }}>BUILD IN
                        PUBLIC
                    </h5>
                    <div style={{ height: "8rem" }}>
                        <p className="text-thin text-n300 text-small text-narrow-height mt-4"
                            data-query="how-to-accelerate.cards.3.description">Avoid secrecy;
                            it risks being seen as hoarding value for personal gain. Building openly inspires others and
                            shows commitment to collective advancement.</p>
                    </div>
                    <div className="bb-gradient bg-blue-gradient"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 white-border bt-half bb-half p-5" id="bg-space">
                    <h3 className="text-medium font-goodtimes ms-5 mt-high mb-high w-60"
                        data-query="how-to-accelerate.quote.text">
                        <span className="text-xlarge">"</span>Acceleration acknowledges that efforts snowball and effects
                        compound. Humanity only needs one
                        person to start a movement,<br /><br />
                        and then anything is possible.<span className="text-xlarge">"</span>
                    </h3>
                </div>
            </div>
        </div>
    )
}