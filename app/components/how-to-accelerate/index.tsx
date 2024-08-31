"use client"

import { howToAccelerateCopy } from "@/app/copy/how-to-accelerate"
import {GoodTimes} from "@/app/fonts"

export default function Sections() {
    return (
        <div className="container">

            <div className="row white-border bb-half p-5 position-relative overflow-hidden">
                <div className="col-md-5 py-5">
                    <img src="./img/vertical-lines-rectangle.png" className="w-90" alt="Vertical Gradient Lines" />
                </div>
                <div className="col-md-7 ps-4">
                    <div className={`mt-high text-uppercase text-xxlarge text-narrow-height ${GoodTimes.className}`}
                        data-query="how-to-accelerate.header.title">
                        <h1 className={`text-uppercase text-xxlarge text-narrow-height ${GoodTimes.className}`}
                         dangerouslySetInnerHTML={{ __html: howToAccelerateCopy.header.title }}></h1>
                    </div>
                    <div className="text-thin text-medium my-5 text-narrow-height"
                        data-query="how-to-accelerate.header.subtitle" dangerouslySetInnerHTML={{ __html: howToAccelerateCopy.header.subtitle }}></div>
                    <a data-query="how-to-accelerate.header.button._" data-attribute="href" data-target="target"
                        href={howToAccelerateCopy.header.button.url} target={howToAccelerateCopy.header.button.target}>
                        <button className={`btn text-medium text-thin bg-blue btn-xpadding mb-high box ${GoodTimes.className}`}
                            data-query="how-to-accelerate.header.button.name">{howToAccelerateCopy.header.button.name}</button>
                    </a>
                </div>
                {/* <!-- TOP RIGHT SQUARES --> */}
                <div className="position-absolute top-0 end-0" style={{visibility:"hidden"}}>
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

                    <h5 className={`text-uppercase text-medium text-narrow-height my-3 text-blue ${GoodTimes.className}`}
                        data-query="how-to-accelerate.cards.0.step" 
                        dangerouslySetInnerHTML={{ __html: howToAccelerateCopy.cards[0].step }}></h5>
                    <h5 className={`text-uppercase text-medium text-narrow-height my-3 ${GoodTimes.className}`}
                        style={{ height: "3rem" }}
                        data-query="how-to-accelerate.cards.0.title" dangerouslySetInnerHTML={{ __html: howToAccelerateCopy.cards[0]["title-mob"] }}></h5>
                    <div style={{ height: "8rem" }}>
                        <p className="text-thin text-n300 text-small text-narrow-height mt-4"
                            data-query="how-to-accelerate.cards.0.description" dangerouslySetInnerHTML={{ __html: howToAccelerateCopy.cards[0].description }}></p></div>
                    <div className="bb-gradient bg-blue-gradient"></div>
                </div>
                {/* <!-- CARD 2 --> */}
                <div
                    className="col-md-3  white-border text-center p-5 bb-half br-half bt-half bl-half position-relative overflow-hidden  hover-bb">
                    <div className="image-wrapper">
                        <img src="./img/icon-influence.svg" alt="Influence" className="original  w-50" />
                        <img src="./img/icon-influence-2.svg" alt="Influence" className="hover  w-50" />
                    </div>

                    <h5 className={`text-uppercase text-medium text-narrow-height my-3 text-blue ${GoodTimes.className}`}
                        data-query="how-to-accelerate.cards.1.step" dangerouslySetInnerHTML={{ __html: howToAccelerateCopy.cards[1].step }}></h5>
                    <h5 className={`text-uppercase text-medium text-narrow-height my-3 ${GoodTimes.className}`}
                        data-query="how-to-accelerate.cards.1.title" dangerouslySetInnerHTML={{ __html: howToAccelerateCopy.cards[1]["title-mob"] }}></h5>
                    <div style={{ height: "8rem" }}>
                        <p className="text-thin text-n300 text-small text-narrow-height mt-4"
                            data-query="how-to-accelerate.cards.1.description" dangerouslySetInnerHTML={{ __html: howToAccelerateCopy.cards[1].description }}></p>
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
                    <h5 className={`text-uppercase text-medium text-narrow-height my-3 text-blue ${GoodTimes.className}`}
                        data-query="how-to-accelerate.cards.2.step" dangerouslySetInnerHTML={{ __html: howToAccelerateCopy.cards[2].step }}></h5>
                    <h5 className={`text-uppercase text-medium text-narrow-height my-3 ${GoodTimes.className}`}
                        data-query="how-to-accelerate.cards.2.title" dangerouslySetInnerHTML={{ __html: howToAccelerateCopy.cards[2]["title-mob"] }}></h5>
                    <div style={{ height: "8rem" }}>
                        <p className="text-thin text-n300 text-small text-narrow-height mt-4"
                            data-query="how-to-accelerate.cards.2.description" dangerouslySetInnerHTML={{ __html: howToAccelerateCopy.cards[2].description }}></p>
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
                    <h5 className={`text-uppercase text-medium text-narrow-height my-3 text-blue ${GoodTimes.className}`}
                        data-query="how-to-accelerate.cards.3.step" dangerouslySetInnerHTML={{ __html: howToAccelerateCopy.cards[3].step }}></h5>
                    <h5 className={`text-uppercase text-medium text-narrow-height my-3 ${GoodTimes.className}`}
                        data-query="how-to-accelerate.cards.3.title" style={{ height: "3rem" }} dangerouslySetInnerHTML={{ __html: howToAccelerateCopy.cards[3]["title-mob"] }}></h5>
                    <div style={{ height: "8rem" }}>
                        <p className="text-thin text-n300 text-small text-narrow-height mt-4"
                            data-query="how-to-accelerate.cards.3.description" dangerouslySetInnerHTML={{ __html: howToAccelerateCopy.cards[3].description }}></p>
                    </div>
                    <div className="bb-gradient bg-blue-gradient"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 white-border bt-half bb-half p-5" id="bg-space">
                    <h3 className={`text-medium ms-5 mt-high mb-high w-60 ${GoodTimes.className}`}
                        data-query="how-to-accelerate.quote.text" dangerouslySetInnerHTML={{ __html: howToAccelerateCopy.quote.text }}></h3>
                </div>
            </div>
        </div>
    )
}