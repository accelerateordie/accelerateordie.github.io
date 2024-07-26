"use client"

export default function SectionsMobile() {
    return (
        <>

        {/* <!-- How To Accelerate --> */}
        <div id="HowToAccelerate" className="col-12 mobile white-border-mob br-half bb-half Box-padding">

            <div className="col-12 AccelTitle text-large-mob font-goodtimes mt-3" data-query="home.how-to-accelerate.header.title">
                HOW TO <br /><span className="text-blue">ACCELERATE</span>
            </div>
            <div className="col-12 AccelText text-thin text-medium mt-4" data-query="how-to-accelerate.header.subtitle">
                <span>To accelerate means adopting a mindset of agency and
                    intelligence, aiming to expand consciousness throughout the universe.<br /><br /> This involves
                    unwavering
                    self-belief, optimism, and commitment to purpose. As an accelerationist, you strive to understand
                    the universe from first principles, advancing humanity’s intelligence and spreading memes and
                    genes.</span>
            </div>
            <a data-query="how-to-accelerate.header.button._" data-attribute="href" data-target="target" target="_blank"
                href="https://discord.com/invite/XJWWptTH">
                <button className="mt-4 button font-goodtimes text-xsmall" data-query="how-to-accelerate.header.button.name">JOIN
                    THE MOVEMENT</button></a>
            <div className="br-gradient bg-blue-gradient"></div>
        </div>
        {/* <!-- end of How To Accelerate --> */}

        {/* <!-- step 1 --> */}
        <div id="Step1" className="col-12 white-border-mob br-half bb-hal Box-padding">

            <img src="./img/step1.svg" className="mt-4" />

            <p className="mt-5 text-blue font-goodtimes text-medium" data-query="how-to-accelerate.cards.0.step">STEP 1:</p>
            <div className="col-12 AccelTitle mt-4 text-medium-mob font-goodtimes" data-query="how-to-accelerate.cards.0.title-mob">
                <span>AFFIRM YOUR<br />ROLE</span>
            </div>
            <div className="col-12 AccelText text-thin text-light text-small Box-padding"
                data-query="how-to-accelerate.cards.0.description">
                <span>Recognize your purpose in acceleration. Break away from
                    consumption and focus on creation, enhancing humanity’s genetic and memetic repositories. Inspire
                    others to join the cause.</span>
            </div>
            <div className="bb-gradient bg-blue-gradient"></div>
        </div>
        {/* <!-- end of step 1 --> */}

        {/* <!-- step 2 --> */}
        <div id="Step2" className="col-12 white-border-mob br-half bb-half">

            <img src="./img/step2.svg" className="mt-4" />
            <p className="mt-5 text-blue font-goodtimes text-medium" data-query="how-to-accelerate.cards.1.step">STEP 2:</p>
            <div className="col-12 AccelTitle mt-4 text-medium-mob font-goodtimes" data-query="how-to-accelerate.cards.1.title">
                <span>EXTEND YOUR<br /> INFLUENCE</span>
            </div>
            <div className="col-12 AccelText text-thin text-light text-small Box-padding"
                data-query="how-to-accelerate.cards.1.description">
                <span>Find a stable partner and have children to exceed replacement
                    level. Nurture their acceleration, fostering their understanding of the universe so they can
                    contribute effectively.</span>
            </div>
            <div className="bb-gradient bg-blue-gradient"></div>
        </div>
        {/* <!-- end of step 2 --> */}

        {/* <!-- step 3 --> */}
        <div id="Step3" className="col-12 white-border-mob br-half bb-half">

            <img src="./img/step3.svg" className="mt-4" />
            <p className="mt-5 text-blue font-goodtimes text-medium" data-query="how-to-accelerate.cards.2.step">STEP 3:</p>
            <div className="col-12 AccelTitle mt-4 text-medium-mob font-goodtimes" data-query="how-to-accelerate.cards.2.title-mob">
                <span>SOLVE KEY<br />PROBLEMS</span>
            </div>
            <div className="col-12 AccelText text-thin text-light text-small Box-padding"
                data-query="how-to-accelerate.cards.2.description">
                <span>Invest in understanding the environment and universe.
                    Identify and solve problems to propel humanity forward. Share your goals and progress transparently,
                    demonstrating pure motives.</span>
            </div>
            <div className="bb-gradient bg-blue-gradient"></div>
        </div>
        {/* <!-- end of step 3 --> */}

        {/* <!-- step 4 --> */}
        <div id="Step4" className="col-12 white-border-mob br-half bb-half">

            <img src="./img/step4.svg" className="mt-4" />
            <p className="mt-5 text-blue font-goodtimes text-medium" data-query="how-to-accelerate.cards.3.step">STEP 4:</p>
            <div className="col-12 AccelTitle mt-4 text-medium-mob font-goodtimes" data-query="how-to-accelerate.cards.3.title-mob">
                <span>BUILD IN<br />PUBLIC</span>
            </div>
            <div className="col-12 AccelText text-thin text-light text-small Box-padding"
                data-query="how-to-accelerate.cards.3.description">
                <span>Avoid secrecy; it risks being seen as hoarding value for
                    personal gain. Building openly inspires others and shows commitment to collective
                    advancement.</span>
            </div>
            <div className="bb-gradient bg-blue-gradient"></div>
        </div>
        {/* <!-- end of step 4 --> */}

        {/* <!-- Acceleration --> */}
        <div id="Acceleration" className="col-12 white-border-mob br-half bb-half">
            <div className="col-12 mt-4 font-goodtimes text-medium  Box-padding" data-query="how-to-accelerate.quote.text-mob">
                <span>"Acceleration acknowledges that efforts snowball and effects
                    compound. Humanity only needs one person to start a movement, and then anything is possible."</span>
            </div>
        </div>
        {/* <!-- end of Acceleration --> */}

    </>
    )
}