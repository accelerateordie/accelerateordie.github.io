"use client"
export default function Sections() {
    return (
        <>
         <div className="row position-relative overflow-hidden">
                <div className="col-md-7 ps-4 white-border br-half bb-half position-relative overflow-hidden">
                    <div className=" mt-high text-uppercase font-goodtimes text-xxlarge text-narrow-height ">
                        <h1 className="text-uppercase font-goodtimes text-xxlarge text-narrow-height"
                            data-query="school-of-accel.header.title">
                            SCHOOL OF
                            <br />
                            <span className="text-blue">ACCEL</span>
                        </h1>
                    </div>
                    <div className="text-thin text-medium my-5 text-narrow-height mb-high"
                        data-query="school-of-accel.header.subtitle">
                        Humans evolve through memetic channels, requiring substantial learning to navigate modern
                        environments.
                        <br /> <br />
                        This page introduces the School of ACCEL, designed to expedite the transfer of foundational
                        knowledge to youth, equipping them to contribute to humanity's acceleration.
                    </div>
                    <div className="bg-blue-gradient br-gradient-medium"></div>
                </div>
                <div className="col-md-5">
                    <div className="row">
                        <div className="col-12 white-border bl-half bb-half p-0 overflow-hidden">
                            <img src="./img/bg-school-header.png" alt="School of ACCEL" />
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col-6 white-border border-half p-5 text-center text-n100 position-relative overflow-hidden">
                            <h5 className="font-goodtimes text-medium text-thin"
                                data-query="school-of-accel.header.time-box.0.title">
                                20 minutes
                            </h5>
                            <div className="text-thin" data-query="school-of-accel.header.time-box.0.subtitle">educational
                                session
                            </div>
                            <div className="bg-blue-gradient br-gradient-small"></div>
                        </div>
                        <div
                            className="col-6 white-border bt-half bl-half bb-half p-5 text-center text-n100 position-relative overflow-hidden">
                            <h5 className="font-goodtimes text-medium text-thin"
                                data-query="school-of-accel.header.time-box.1.title">
                                10 minutes
                            </h5>
                            <div className="text-thin" data-query="school-of-accel.header.time-box.1.subtitle">testing</div>
                            <div className="bg-blue-gradient br-gradient-small"></div>
                        </div>
                    </div>

                </div>


            </div>
            
            <div className="row text-center">
                <div className="col-12 white-border bt-half bb-half p-5 d-flex justify-content-center " id="bg-dots-school">
                    <h3 className="text-medium font-goodtimes mt-high mb-high w-60" data-query="school-of-accel.quote.text">
                        "The <span className="text-blue">School of ACCEL</span> aims to not
                        just educate but to ignite a
                        transformative movement, shifting how we approach learning and human potential."
                    </h3>
                </div>
            </div>
            {/* <!-- Key Concepts --> */}
            <div className="row white-border bt-half bb-half position-relative overflow-hidden">
                <div className="p-5 m-0">
                    <h2 className="font-goodtimes text-xlarge text-narrow-height text-center mt-high"
                        data-query="school-of-accel.segment-1.title">KEY
                        CONCEPTS
                    </h2>
                </div>
                <div id="key-concept-main" className="row align-center justify-content-center  pb-3 mt-5">
                    {/* <!-- 1 --> */}
                    <div className="col-lg-3 px-4">
                        <h4 className="font-goodtimes text-medium  text-center"
                            data-query="school-of-accel.segment-1.items.0.title" style={{height: "4rem"}}>The Need
                            for <br /> <span className="text-blue">Accelerated
                                Learning</span>
                        </h4>
                        <p className="text-xsmall text-thin text-center text-n300 mt-4"
                            data-query="school-of-accel.segment-1.items.0.description">
                            Children in complex environments need more time to acquire essential knowledge. Traditional
                            schooling takes 12-16 years, but can we do better?</p>
                    </div>
                    {/* <!-- 2 --> */}
                    <div className="col-lg-3 px-4">
                        <h4 className="font-goodtimes text-medium  text-center"
                            data-query="school-of-accel.segment-1.items.1.title" style={{height: "4rem"}}>
                            Innovative <br /> <span className="text-blue">Learning <br /> Model</span>
                        </h4>
                        <p className="text-xsmall text-thin text-center text-n300 mt-4"
                            data-query="school-of-accel.segment-1.items.1.description">
                            Students rotate through subjects in 20-minute sessions, followed by 10 minutes of testing,
                            ensuring engagement and personalized learning.</p>
                    </div>
                    {/* <!-- 3 --> */}
                    <div className="col-lg-3 px-4">
                        <h4 className="font-goodtimes text-medium  text-center"
                            data-query="school-of-accel.segment-1.items.2.title" style={{height: "4rem"}}>
                            Maximizing <span className="text-blue">Youth <br /> Potential</span>
                        </h4>
                        <p className="text-xsmall text-thin text-center text-n300 mt-4"
                            data-query="school-of-accel.segment-1.items.2.description">
                            Instead of waiting until 18-21 for full agency, this system maximizes memetic content
                            upload, preparing graduates to contribute to humanity's acceleration.</p>
                    </div>
                    {/* <!-- 4 --> */}
                    <div className="col-lg-3 px-4">
                        <h4 className="font-goodtimes text-medium  text-center"
                            data-query="school-of-accel.segment-1.items.3.title" style={{height: "4rem"}}>Scalable
                            <br />
                            <span className="text-blue">and Efficient</span>
                        </h4>
                        <p className="text-xsmall text-thin text-center text-n300 mt-4"
                            data-query="school-of-accel.segment-1.items.3.description">
                            A single site with audio-visual tech, individual booths, and AI instructors could deliver
                            education efficiently, connected globally for consistent access.</p>
                    </div>
                </div>
                <div className="bg-blue-gradient br-gradient-medium"></div>
                <div className="bg-blue-gradient tl-gradient-medium"></div>
                {/* <!-- TOP RIGHT SQUARES --> */}
                <div id="right-sq-main">
                    <div className="small-square white-border"></div>
                    <div className="big-square white-border"></div>
                    <div className="small-square-l small-square white-border"></div>
                </div>
                {/* <!-- BOTTOM LEFT SQUARES --> */}
                <div className="position-absolute bottom-0 start-0">
                    <div className="big-square white-border position-absolute bottom-0 start-0"></div>
                    <div className="small-square white-border position-absolute bottom-0 start-0"></div>
                </div>
            </div>
        </>
    )
}