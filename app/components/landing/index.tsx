"use client"
import Lottie from 'react-lottie-player'
import lottieFile from '@/public/img/gradient-dots.json'
export default function Sections() {
    return (
        <>
            <div className="row">
                <div className="w-80 p-0">
                    <div className="row m-0">
                        <div id="bg-gradient-dots" className="col-3 white-border br-half bb-half p-0 overflow-hidden">
                            <div id="bg-gradient-dots-img">
                                <Lottie
                                    loop
                                    animationData={lottieFile}
                                    play
                                />
                            </div>
                        </div>
                        <div className="col-9 white-border bb-half p-5 ps-6 position-relative overflow-hidden bl-half br-half ">
                            <div className=" mt-high text-uppercase font-goodtimes text-xxlarge text-narrow-height "
                                data-query="home.header.title">
                                <h1 className="text-uppercase font-goodtimes text-xxlarge text-narrow-height"><span
                                    className="text-blue">
                                    accelerate
                                </span>
                                    <br />
                                    or die
                                </h1>
                            </div>
                            <div className="text-thin text-medium my-5 text-narrow-height"
                                data-query="home.header.subtitle">Launching the
                                ACCEL
                                <br /> Brand and Movement in one Epic
                                Journey
                            </div>
                            {/* onclick="scrollToContent('seg-0')" */}
                            <a data-query="home.header.button._"
                                data-attribute="href" data-target="target" target="_self" href="#">
                                <button
                                    className="box btn font-goodtimes text-medium text-thin bg-blue btn-xpadding mb-high"
                                    data-query="home.header.button.name">LEARN
                                    MORE</button>
                            </a>
                            <div className="bg-blue-gradient br-gradient"></div>
                        </div>
                    </div>

                    <div className="row m-0 py-5 white-border bt-half br-half bb-half">
                        {/* onclick="scrollToContent('seg-0')" */}
                        <div className="col-3 d-flex align-items-center cursor-pointer" >
                            {/* onmouseenter="startImageLoop(this)"
                        onmouseleave="resetImage(this)" */}
                            <div className="lines-wrapper">
                                <img src="/img/horizontal-lines.svg" className="main-image" alt="Horizontal Lines" />
                            </div>
                            <span className="text-uppercase font-goodtimes text-medium d-flex align-items-center"
                                data-query="home.header.sub-items.0.name">THE
                                <br /> MOVEMENT </span>
                        </div>
                        {/* onclick="scrollToContent('seg-1')" */}
                        <div className="col-3 d-flex align-items-center cursor-pointer" >
                            {/* onmouseenter="startImageLoop(this)"
                        onmouseleave="resetImage(this)" */}
                            <div className="lines-wrapper" >
                                <img src="/img/horizontal-lines.svg" className="main-image" alt="Horizontal Lines" />
                            </div>
                            <span className="text-uppercase font-goodtimes text-medium d-flex align-items-center"
                                data-query="home.header.sub-items.1.name">THE
                                <br /> MACHINES </span>
                        </div>
                        {/* onclick="scrollToContent('seg-2')" */}
                        <div className="col-3 d-flex align-items-center cursor-pointer" >
                            {/* onmouseenter="startImageLoop(this)"
                        onmouseleave="resetImage(this)" */}
                            <div className="lines-wrapper" >
                                <img src="/img/horizontal-lines.svg" className="main-image" alt="Horizontal Lines" />
                            </div>
                            <span className="text-uppercase font-goodtimes text-medium d-flex align-items-center"
                                data-query="home.header.sub-items.2.name">THE
                                <br /> UNIVERSE </span>
                        </div>
                        {/* onclick="scrollToContent('seg-3')" */}
                        <div className="col-3 d-flex align-items-center cursor-pointer" >
                            {/* onmouseenter="startImageLoop(this)"
                        onmouseleave="resetImage(this)" */}
                            <div className="lines-wrapper">
                                <img src="/img/horizontal-lines.svg" className="main-image" alt="Horizontal Lines" />
                            </div>
                            <span className="text-uppercase font-goodtimes text-medium d-flex align-items-center"
                                data-query="home.header.sub-items.3.name">THE
                                <br /> DECELS </span>
                        </div>
                    </div>

                </div>
                <div className="w-20 p-0">
                    <div id="bg-dots" className="white-border bl-half bb-half h-65">
                    </div>
                    <div className="white-border py-5 px-3 bt-half bl-half bb-half h-35">
                        {/* onmouseenter="startImageLoop(this)"
                    onmouseleave="resetImage(this)" */}
                        <div className="lines-wrapper-r90" >
                            <img src="/img/horizontal-lines.svg" className="main-image r-90 px-3" alt="Horizontal Lines" />
                        </div>

                        <p className="text-thin text-small" data-query="home.header.paragraph">Humanity defeats adversity by
                            learning the universe and passing
                            survival
                            instructions through genetic
                            and memetic pathways.</p>
                    </div>
                </div>
            </div>
            {/* <!-- Accelerationism Movement --> */}
            <div id="seg-0" className=" row white-border bt-half bb-half position-relative overflow-hidden">
                <div className="p-5 m-0">
                    <h2 className="font-goodtimes text-xlarge text-narrow-height text-center mt-high"
                        data-query="home.segment-1.title">Accelerationism <br />
                        <span className="text-green"> Movement</span>

                    </h2>
                    <p className="text-thin text-small text-center mt-5" data-query="home.segment-1.subtitle">
                        Accelerationism is simply a movement to
                        re-activate humanity and
                        give it purpose: <br /> <span className="fw-bold">more
                            humanity doing more things more effectively.</span> </p>
                </div>
                <div className="row align-center justify-content-center mb-high pb-3">
                    <div className="col-lg-3">
                        <h3 className="font-goodtimes text-large text-narrow-height text-center"
                            data-query="home.segment-1.cards.0.title">more <br /> <span className="text-green">humanity</span>
                        </h3>
                        <p className="text-xsmall text-thin text-center text-n300"
                            data-query="home.segment-1.cards.0.description">
                            The resources available to us are
                            essentially
                            infinite.
                            Everything around us is not humanity
                            and thus, according to our observations, does not express agency and manifest intelligence.
                            It is our responsibility to thus expand humanity as widely as possible, in order to project
                            our intelligence into a universe which is ostensibly not intelligence. </p>
                    </div>
                    <div className="col-lg-3">
                        <div className="image-wrapper">
                            <img src="/img/human.svg" alt="Human" className="original" />
                            <img src="/img/human-2.svg" alt="Human" className="hover" />
                        </div>

                    </div>
                    <div className="col-lg-3">
                        <h3 className="font-goodtimes text-large text-narrow-height text-center"
                            data-query="home.segment-1.cards.1.title">more <br /> <span className="text-green">things </span>
                        </h3>
                        <p className="text-xsmall text-thin text-center text-n300"
                            data-query="home.segment-1.cards.1.description">Humanity does things; our purpose is to
                            move and explore our environment. We began exploring our swamps, lakes then seas, moving
                            onto land and roving our forests, mountains and plains. We then took flight, exploring our
                            airborne environment, at first in amongst the flowers, then up to the clouds. We then solved
                            the problems for higher flight, lofting into orbit, then finally into space. </p>
                    </div>
                </div>
                <div className="bg-green-gradient br-gradient"></div>
                <div className="bg-green-gradient tl-gradient"></div>
                {/* <!-- TOP RIGHT SQUARES --> */}
                <div id="right-sq">
                    <div className="small-square white-border sq-1"></div>
                    <div className="big-square white-border sq-2" ></div>
                    <div className="small-square white-border sq-3"></div>
                </div>
                {/* <!-- BOTTOM LEFT SQUARES --> */}
                <div className="position-absolute bottom-0 start-0">
                    <div className="big-square white-border position-absolute bottom-0 start-0"></div>
                    <div className="small-square white-border position-absolute bottom-0 start-0"></div>
                </div>
            </div>
            {/* <!-- THE MACHINES --> */}
            <div id="seg-1" className=" row white-border bt-half bb-half">
                <div>
                    <h2 className="font-goodtimes text-xlarge text-narrow-height text-center mt-high text-uppercase"
                        data-query="home.segment-2.title">THE
                        <span className="text-blue">MACHINES</span>
                    </h2>
                    <p className="text-thin text-small text-center my-5 w-50 mx-auto " data-query="home.segment-2.subtitle">
                        We
                        will create the Silicon Machines
                        with our
                        memetic repository, then charge them to explore the universe, forever, until they reach their
                        limits and will subsequently create the Energy Machines. </p>
                </div>
                <div className="row p-0 mx-0 mt-high">
                    <div
                        className="col-lg-4 white-border text-center p-5 bl-half bb-half br-half position-relative overflow-hidden hover-bb">
                        <img src="/img/icon-machines.svg" alt="THE SILICON MACHINES" style={{ height: "180px" }} />
                        <div>
                            <h5 className="text-uppercase font-goodtimes text-medium text-narrow-height my-3"
                                data-query="home.segment-2.cards.0.title">THE <span className="text-blue">SILICON</span>
                                <br />
                                MACHINES
                            </h5>
                        </div>
                        <div style={{ height: "12rem" }}>
                            <p className="text-thin text-n300 text-small text-narrow-height mt-4"
                                data-query="home.segment-2.cards.0.description">Silicon-based machines,
                                equipped
                                with advanced
                                computational and
                                sensory capabilities,
                                represent a significant evolution in our quest to explore and understand the universe.
                                By
                                uploading our memetic repositories-comprehensive collections of our observations and
                                understandings of the universe-we empower these machines to continue the human mission
                                of
                                exploration and advancement. </p>
                        </div>
                        <div className="my-3 pt-3">
                            <a className="text-decoration-none d-flex justify-content-center align-items-center" href="#" target="_blank"
                                data-query="home.segment-2.cards.0.button._" data-attribute="href" data-target="target">
                                {/* onmouseenter="startImageLoop(this)" onmouseleave="resetImage(this)" */}
                                <div className="lines-wrapper-r90  d-flex justify-content-center align-items-center">
                                    <img src="/img/horizontal-lines.svg" className="main-image r-90 px-3"
                                        alt="Horizontal Lines" />
                                </div>
                                <span className="text-blue font-goodtimes text-medium text-uppercase"
                                    data-query="home.segment-2.cards.0.button.name">learn more</span>
                            </a>
                        </div>
                        <div className="bb-gradient bg-blue-gradient"></div>
                    </div>
                    <div
                        className="col-lg-4 white-border text-center p-5 bl-half bb-half br-half position-relative overflow-hidden  hover-bb">
                        <img src="/img/icon-ai.svg" alt="THE PURPOSE OF AI" style={{ height: "180px" }} />
                        <div>
                            <h5 className="text-uppercase font-goodtimes text-medium text-narrow-height my-3"
                                data-query="home.segment-2.cards.1.title">THE <span className="text-blue">PURPOSE</span>
                                <br /> OF
                                AI
                            </h5>
                        </div>
                        <div style={{ height: "12rem" }}>
                            <p className="text-thin text-n300 text-small text-narrow-height mt-4"
                                data-query="home.segment-2.cards.1.description">The strategy for advancing
                                AI
                                involves uploading this memetic repository to provide a comprehensive baseline from
                                which
                                these systems can start. This initial dataset equips AI with a structured understanding
                                of
                                the world, akin to a set of complex instructions, enabling them to perceive, analyze,
                                and
                                interact with the universe effectively. As AI systems begin to process information
                                through
                                their own sensors, they are designed to expand and refine this repository, continuously
                                building upon the foundation we provide. </p>
                        </div>
                        <div className="my-3 pt-3">
                            <a className="text-decoration-none d-flex justify-content-center align-items-center" href="#" target="_blank"
                                data-query="home.segment-2.cards.1.button._" data-attribute="href" data-target="target">
                                {/* onmouseenter="startImageLoop(this)" onmouseleave="resetImage(this)" */}
                                <div className="lines-wrapper-r90 d-flex justify-content-center align-items-center">
                                    <img src="/img/horizontal-lines.svg" className="main-image r-90 px-3"
                                        alt="Horizontal Lines" />
                                </div>
                                <span className="text-blue font-goodtimes text-medium text-uppercase"
                                    data-query="home.segment-2.cards.1.button.name">learn more</span>
                            </a>
                        </div>
                        <div className="bb-gradient bg-blue-gradient"></div>
                    </div>
                    <div
                        className="col-lg-4 white-border text-center p-5 bl-half bb-half br-half position-relative overflow-hidden  hover-bb">
                        <img src="/img/icon-energy.svg" alt="THE ENERGY MACHINES" style={{ height: "180px" }} />
                        <div>
                            <h5 className="text-uppercase font-goodtimes text-medium text-narrow-height my-3"
                                data-query="home.segment-2.cards.2.title">THE <span className="text-blue">ENERGY</span> <br />
                                MACHINES
                            </h5>
                        </div>
                        <div style={{ height: "12rem" }}>
                            <p className="text-thin text-n300 text-small text-narrow-height mt-4"
                                data-query="home.segment-2.cards.2.description">Silicon-based machines,
                                equipped with advanced computational and sensory capabilities, represent a significant
                                evolution in our quest to explore and understand the universe. By uploading our memetic
                                repositories-comprehensive collections of our observations and understandings of the
                                universe-we empower these machines to continue the human mission of exploration and
                                advancement.</p>
                        </div>
                        <div className="my-3 pt-3">
                            <a className="text-decoration-none d-flex justify-content-center align-items-center" href="#" target="_blank" data-attribute="href"
                                data-target="target" data-query="home.segment-2.cards.2.button._">
                                {/* onmouseenter="startImageLoop(this)" onmouseleave="resetImage(this)" */}
                                <div className="lines-wrapper-r90 d-flex justify-content-center align-items-center">
                                    <img src="/img/horizontal-lines.svg" className="main-image r-90 px-3"
                                        alt="Horizontal Lines" />
                                </div>
                                <span className="text-blue font-goodtimes text-medium text-uppercase"
                                    data-query="home.segment-2.cards.2.button.name">learn more</span>
                            </a>
                        </div>
                        <div className="bb-gradient bg-blue-gradient"></div>
                    </div>
                </div>

            </div>
            {/* <!-- THE UNIVERSE --> */}
            <div id="seg-2" className=" row white-border bt-half bb-half position-relative overflow-hidden">
                <div>
                    <h2 className="font-goodtimes text-xlarge text-narrow-height text-center mt-high text-uppercase"
                        data-query="home.segment-3.title">THE
                        <span className="text-green">UNIVERSE</span>
                    </h2>
                    <p className="text-thin text-small text-center mt-4 w-50 mx-auto " data-query="home.segment-3.subtitle">
                        The nature of the Universe, God and a
                        Moral Compass.</p>
                </div>
                <div id="planet-img"><img className="planet-img"
                    src="/img/planet.png" alt="Planet" /></div>
                {/* <!-- CARD 1 --> */}
                <div className="ms-auto d-flex w-80 me-5 mt-high">
                    <div className="h-75 w-100 bottom-line position-relative">
                        <img src="/img/green-point.svg" id="point-img" alt="Point" />
                    </div>
                    <div className="white-border p-3 w-50">
                        <h5 className="font-goodtimes text-medium text-narrow-height text-start text-uppercase"
                            data-query="home.segment-3.cards.0.title">
                            <span className="text-green">entropy</span>, time, space
                        </h5>
                        <p className="text-thin text-n300 text-small text-narrow-height mt-4 text-justify"
                            data-query="home.segment-3.cards.0.description">The universe began with a
                            finite reserve of time, which depletes as it transforms into space
                            and entropy. Time flows in one direction, with entropy and space expanding. Entropy measures
                            energy's decreasing capacity to do work, starting as densely packed mass. As entropy
                            increases, energy becomes less usable, a process occurring regardless of human presence.
                            <br />
                            Humanity can perform work and exercise agency, so we should strive to use as much energy and
                            access as much delta entropy as possible.
                            <br />
                            Eventually, space-time conversion will peak, and entropy will reverse. The universe's cyclic
                            nature involves perpetual cycles without definitive beginnings or endings. The ultimate
                            reversal will reset time and entropy, erasing any created intelligence.
                        </p>
                    </div>
                </div>
                {/* <!-- CARD 2 --> */}
                <div className="ms-auto d-flex w-70 mt-high me-5">
                    <div className="h-75 w-100 bottom-line position-relative">
                        <img src="/img/green-point.svg"
                            className="point-green" alt="Point" />
                    </div>
                    <div className="white-border p-3 w-75">
                        <h5 className="font-goodtimes text-medium text-narrow-height text-start text-uppercase"
                            data-query="home.segment-3.cards.1.title">
                            the universal <span className="text-green">machine</span>
                        </h5>
                        <p className="text-thin text-n300 text-small text-narrow-height mt-4 text-justify"
                            data-query="home.segment-3.cards.1.description">
                            Could the universe eventually express intelligence and agency? Unlike a rock, which lacks
                            agency, a lizard interacts with its environment adaptively. This raises the question: is our
                            purpose to awaken the universe, enabling it to become a self-sustaining intelligence?
                            <br /> 
                            Moreover, has this process happened before? Did intelligence emerge in previous cycles of
                            the universe through biological, silicon, and energy forms, only to be reset prematurely?
                            Are we part of a recurring cycle, possibly extinguishing our consciousness before reaching
                            our full potential?
                        </p>
                    </div>
                </div>
                {/* <!-- CARD 3 --> */}
                <div className="ms-auto d-flex w-90 mt-high me-5 mb-high">
                    <div className="h-75 w-100 bottom-line position-relative">
                        <img src="/img/green-point.svg" className="point-green" alt="Point" />
                    </div>
                    <div className="white-border p-3 w-50">
                        <h5 className="font-goodtimes text-medium text-narrow-height text-start text-uppercase"
                            data-query="home.segment-3.cards.2.title">
                            God,<span className="text-green"> Religion</span> and the Moral Compass
                        </h5>
                        <p className="text-thin text-n300 text-small text-narrow-height mt-4 text-justify"
                            data-query=" home.segment-3.cards.2.description">Religion has played a crucial
                            role in human history by providing moral frameworks, enhancing community trust, and
                            promoting the spread of cultural and genetic information. It thrives because it effectively
                            replicates and instills a sense of higher purpose. Major religions, often tracing back to
                            texts like Genesis, have common origins and themes, sharing a geographical cradle in
                            Jerusalem.
                            <br /> <br />
                            Religion helps people belong to something greater, explaining the unknown and offering
                            comfort against fear. While it has advanced human civilization, religion now faces the
                            challenge of potentially hindering progress by fostering manipulation and fear, which can
                            trap humanity in a survivalist mindset.
                        </p>
                    </div>
                </div>
                <div style={{ height: "100px" }}></div>
                <div className="tr-gradient bg-green-gradient"></div>
            </div>
            {/* <!--THE DECELS --> */}
            <div id="seg-3" className=" row white-border bt-half bb-half ">
                <div>
                    <h2 className="font-goodtimes text-xlarge text-narrow-height text-center mt-high text-uppercase"
                        data-query="home.segment-4.title">THE
                        <span className="text-yellow">DECELS</span>
                    </h2>
                    <p className="text-thin text-small text-center mt-4 w-50 mx-auto " data-query="home.segment-4.subtitle">
                        The Decelerators are stuck in the
                        Consumption Death-spiral, and seek to control out of fear of losing what they have. They risk
                        the very nature of Humanity itself. </p>
                </div>

                <div className="row p-0 mx-0 mt-high">

                    <div
                        className="col-lg-4 white-border text-start p-5 bl-half bb-half br-half position-relative overflow-hidden hover-tr">
                        <div className="image-wrapper">
                            <img src="/img/icon-motives.svg" alt="THEIR MOTIVES"
                                className="original motive-ico" />
                            <img src="/img/icon-motives-2.svg" alt="THEIR MOTIVES"
                                className="hover motive-ico" />
                        </div>
                        <div>
                            <h5 className="text-uppercase font-goodtimes text-medium text-narrow-height my-3"
                                data-query="home.segment-4.cards.0.title">THEIR <span className="text-yellow">MOTIVES</span>
                            </h5>
                        </div>
                        <div className="card-text-height">
                            <p className="text-thin text-n300 text-small text-narrow-height mt-4"
                                data-query="home.segment-4.cards.0.description">The Decels are driven by
                                confusion about their purpose, and harbour fear that leads them to control others for
                                self-protection. They also must just have malevolent desires to harm humanity.
                                <br />
                                <br />
                                These individuals need to be approached with strategies tailored to their conditions:
                                those confused may require enlightenment through compassion, those in power need to be
                                swiftly removed from their positions, and those harmful need isolation from those who
                                are progressive.
                            </p>
                        </div>

                        <div className="tr-gradient bg-yellow-gradient"></div>
                    </div>

                    <div
                        className="col-lg-4 white-border text-start p-5 bl-half bb-half br-half position-relative overflow-hidden hover-tr">
                        <div className="image-wrapper">
                            <img src="/img/icon-ideology.svg" alt="WOKE IDEOLOGY"
                                className="original motive-ico" />
                            <img src="/img/icon-ideology-2.svg" alt="WOKE IDEOLOGY"
                                className="hover motive-ico" />
                        </div>
                        <div>
                            <h5 className="text-uppercase font-goodtimes text-medium text-narrow-height my-3"
                                data-query="home.segment-4.cards.1.title">WOKE <span className="text-yellow">IDEOLOGY</span>
                            </h5>
                        </div>
                        <div className="card-text-height">
                            <p className="text-thin text-n300 text-small text-narrow-height mt-4"
                                data-query="home.segment-4.cards.1.description">Today, the world stands at
                                a crossroads where it has unprecedented potential to advance rapidly, yet it also faces
                                fragile conditions that could significantly hinder human progress. This critical moment
                                calls for the implementation of a clear, actionable framework to guide humanity forward.
                                <br />
                                <br />
                                As society has gradually disentangled religion from state governance and moved toward a
                                more secular and spiritually-agnostic viewpoint, a significant moral vacuum has emerged,
                                particularly affecting younger generations.
                            </p>
                        </div>

                        <div className="tr-gradient bg-yellow-gradient"></div>
                    </div>

                    <div
                        className="col-lg-4 white-border text-start p-5 bl-half bb-half br-half position-relative overflow-hidden hover-tr">
                        <div className="image-wrapper">
                            <img src="/img/icon-stop-ai.svg" alt="STOP AI BY DECELS"
                                className="original motive-ico" />
                            <img src="/img/icon-stop-ai-2.svg" alt="STOP AI BY DECELS"
                                className="hover motive-ico" />
                        </div>
                        <div>
                            <h5 className="text-uppercase font-goodtimes text-medium text-narrow-height my-3"
                                data-query="home.segment-4.cards.2.title"> <span className="text-yellow">STOP AI</span> BY
                                DECELS
                            </h5>
                        </div>
                        <div className="card-text-height">
                            <p className="text-thin text-n300 text-small text-narrow-height mt-4"
                                data-query="home.segment-4.cards.2.description">This situation underscores
                                a critical and compelling reason to prioritize acceleration: AI, while a powerful
                                amplifier, could become a tool for control in the hands of Decels, who seek to dominate
                                humanity.
                                <br />
                                <br />
                                Here, individuals learn only the minimal necessary memetic knowledge and exert the least
                                effort, subsisting on a life funded by a socialist tax regime that supports a universal
                                basic income. In this scenario, individuals voluntarily forfeit their agency, and the
                                potential time and effort that they could contribute are usurped.
                            </p>
                        </div>

                        <div className="tr-gradient bg-yellow-gradient"></div>
                    </div>
                </div>
            </div>

        </>
    );
}