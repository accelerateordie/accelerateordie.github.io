"use client"
export default function Sections() {
    return (
        <>
           <div className="row position-relative overflow-hidden">
                <div className="col-md-3">
                    <div className="row">
                        <div className="col-12 white-border br-half bb-half p-0 overflow-hidden">
                            <img src="./img/bg-journey-header.png" alt="My Journey" />
                        </div>
                    </div>
                </div>
                <div className="col-md-9 d-flex flex-column justify-content-center ps-4 white-border bl-half bb-half position-relative overflow-hidden">
                    <div className=" text-uppercase font-goodtimes text-xxlarge text-narrow-height "
                        data-query="my-journey.header.title">
                        <h1 className="text-uppercase font-goodtimes text-xxlarge text-narrow-height">
                            My Journey of <span className="text-blue">Accelerating</span>
                        </h1>
                    </div>
                    <div className="text-thin text-medium my-5 text-narrow-height w-60 text-n100"
                        data-query="my-journey.header.subtitle">
                        Learn more about my background, mindset, and the
                        experiences that led to the creation of ACCEL.
                    </div>
                    <div className="bg-blue-gradient br-gradient-medium"></div>
                </div>
            </div>
            {/* <!-- Key Concepts --> */}
            <div className="row white-border bt-half bb-half position-relative overflow-hidden">
                <div className="p-5 m-0">
                    <h4 className="font-goodtimes text-large text-narrow-height text-center mt-high"
                        data-query="my-journey.segment-1.title">From
                        Homeschooling to <br /> Founding <span className="text-blue">ACCEL</span>
                    </h4>
                </div>
                <div className="row justify-content-center">

                    <div className="col-md-1"> <img src="./img/journey-timeline.svg" alt="Timeline" /></div>
                    <div className="col-md-6 ps-4 mb-high">
                        {/* <!-- 1 --> */}
                        <div>
                            <h4 className="font-goodtimes text-medium mt-4" data-query="my-journey.segment-1.items.0.title">
                                Early Life <br />
                                and <span className="text-blue">Education</span> </h4>
                            <p className="text-small text-n300 mt-4" data-query="my-journey.segment-1.items.0.description">I
                                was born in Darwin, Australia, as the third child
                                in
                                a
                                family of ten. My education was
                                entirely through homeschooling, and I viewed it as a series of levels in a game. The
                                faster I completed these levels, the faster I could progress through life. I quickly
                                realized that math was the most crucial subject, so I focused on accelerating
                                through
                                it. By the age of 15, I had completed Grade 12, two years ahead of schedule.
                                However, my
                                parents held me back for an additional year because I was too young for tertiary
                                education. During that year, I took twice as many subjects as required, including
                                advanced math, English, physics, chemistry, biology, geography, and an elective.
                                Despite
                                being self-taught, I finished in the top six in my state.</p>
                        </div>
                        {/* <!-- 2 --> */}
                        <div>
                            <h4 className="font-goodtimes text-medium mt-4" data-query="my-journey.segment-1.items.1.title">
                                Early Academic <br />
                                <span className="text-blue">Achievements</span>
                            </h4>
                            <p className="text-small text-n300 mt-4" data-query="my-journey.segment-1.items.1.description">
                                My passion for learning and self-discipline allowed me
                                to excel in my studies. Being homeschooled meant that my education was my
                                responsibility, with my mother providing regular assessments and guidance. Our home
                                library included the Encyclopaedia Britannica, and I spent countless hours exploring its
                                volumes, fascinated by the world. This early exposure to a broad range of knowledge laid
                                the foundation for my future pursuits.</p>
                        </div>
                        {/* <!-- 3 --> */}
                        <div>
                            <h4 className="font-goodtimes text-medium mt-4" data-query="my-journey.segment-1.items.2.title">
                                Passion <br />
                                <span className="text-blue"> for Flight</span>
                            </h4>
                            <p className="text-small text-n300 mt-4" data-query="my-journey.segment-1.items.2.description">
                                From a young age, I was captivated by flight and the
                                freedom of birds. At 14, I earned a scholarship to fly, obtaining my Private Pilot's
                                Licence before I even had a driver's license. My goal was to fly the most advanced
                                aircraft in Australia, the F/A-18 Hornet, for the Royal Australian Air Force. Despite my
                                enthusiasm, I was deemed too young for pilot training and was sent to the Academy
                                instead. There, I studied Aeronautical Engineering and graduated top of my class.</p>
                        </div>
                        {/* <!-- 4 --> */}
                        <div>
                            <h4 className="font-goodtimes text-medium mt-4" data-query="my-journey.segment-1.items.3.title">
                                Air Force
                                <br />
                                <span className="text-blue"> Pilot Training </span>
                            </h4>
                            <p className="text-small text-n300 mt-4" data-query="my-journey.segment-1.items.3.description">
                                Pilot training in the Air Force was intense, with high
                                stress and a constant risk of being dropped from the course. My long-term goal was to
                                become a Test Pilot and potentially an Astronaut. However, my tendency to push the
                                aircraft to its limits and experiment with untrained maneuvers led to concerns from my
                                instructors. Although I excelled in the flying aspect, I was seen as risky and
                                uncontrollable. This led to my reassignment from fighter jets to a more stable role
                                flying maritime bombers, with a promise of returning to fighters if I conformed.
                                Ultimately, I found the environment incompatible with my ambitions and decided to leave
                                the Air Force after 11 years.</p>
                        </div>
                        {/* <!-- 5 --> */}
                        <div>
                            <h4 className="font-goodtimes text-medium mt-4" data-query="my-journey.segment-1.items.4.title">
                                Transition to
                                <br />
                                <span className="text-blue"> Technology </span>
                            </h4>
                            <p className="text-small text-n300 mt-4" data-query="my-journey.segment-1.items.4.description">
                                Leaving the Air Force was a significant challenge,
                                marked by a difficult and painful transition. However, I was determined to pursue new
                                dreams. I dived into the financial technology sector to learn about money, technology,
                                and human behavior. The first year was a deep exploration, peeling back layers to
                                understand the industry. Over the next four years, I faced pain, progress, iteration,
                                and discovery. Despite the hardships, I stayed true to my vision and eventually
                                succeeded, gaining financial independence.</p>
                        </div>
                        {/* <!-- 6 --> */}
                        <div>
                            <h4 className="font-goodtimes text-medium" style={{marginTop: "2.5rem"}}
                                data-query="my-journey.segment-1.items.5.title">Facing New

                                <br />
                                <span className="text-blue"> Challenges</span>
                            </h4>
                            <p className="text-small text-n300 mt-4" data-query="my-journey.segment-1.items.5.description">
                                Success brought new challenges. I found myself in a
                                consumption loop, wealthy but unproductive. I missed the sense of productivity and
                                purpose. During this time, I discovered the effective accelerationism (e/acc) movement.
                                It resonated with me deeply, rekindling my motivation. I started engaging with the e/acc
                                community on social media, learning and integrating into the ecosystem.</p>
                        </div>
                        {/* <!-- 7 --> */}
                        <div>
                            <h4 className="font-goodtimes text-medium mt-4" data-query="my-journey.segment-1.items.6.title">
                                Discovering
                                <br />
                                <span className="text-blue"> Accelerationism</span>
                            </h4>
                            <p className="text-small text-n300 mt-4" data-query="my-journey.segment-1.items.6.description">
                                During a helicopter trip from Australia to Japan, I
                                pitched the idea of accelerationism to a friend, who was instantly captivated. This
                                encouraged me to share the concept with more people. It was also during this trip that I
                                committed to filming my Pole2Pole journey, a personal goal and reward planned for the
                                future. A film director joined me, and we began integrating the accelerationism
                                narrative into the project.</p>
                        </div>
                        {/* <!-- 8 --> */}
                        <div>
                            <h4 className="font-goodtimes text-medium " style={{marginTop: "2.5rem"}}
                                data-query="my-journey.segment-1.items.7.title">Launching
                                <br />
                                <span className="text-blue"> ACCEL</span>
                            </h4>
                            <p className="text-small text-n300 mt-4" data-query="my-journey.segment-1.items.7.description">
                                As I shared the accelerationism idea, it gained
                                traction and validation. Motivated and inspired by the positive response, I decided to
                                go all-in on the ACCEL brand, representing the accelerationist movement. I publicly
                                committed to this cause, revealing my crypto identity and embracing my purpose. The
                                support and enthusiasm I received reinforced my belief that I had found my destiny.
                                Thus, ACCEL was born, with a mission to drive humanity forward through acceleration.</p>
                        </div>
                    </div>


                </div>
                <div className="bg-blue-gradient br-gradient-medium"></div>
                <div className="bg-blue-gradient tl-gradient-medium"></div>
                {/* <!-- TOP RIGHT SQUARES --> */}
                <div id="right-sq-main">
                    <div className="small-square white-border br-half bt-half"></div>
                    <div className="big-square white-border br-half" ></div>
                    <div className="small-square small-square-l white-border br-half bt-half" ></div>
                </div>
                {/* <!-- BOTTOM RIGHT SQUARES --> */}
                <div id="right-sq-bottom-main">
                    <div className="small-square white-border br-half bb-half"></div>
                    <div className="small-square small-square-r white-border bb-half br-half"></div>
                    <div className="big-square white-border bb-half br-half"></div>

                </div>
            </div>
        </>
    )
}