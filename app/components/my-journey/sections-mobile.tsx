"use client"

import { myJournyCopy } from "@/app/copy/my-journey";
import { useEffect } from "react";
import Accordion from "./accordion";

export default function SectionsMobile() {

    return (
        <>


            {/* <!-- img --> */}
            <div className="col-12 white-border-mob br-half bb-half">
                <img src="./img/journey.png" className="w-100" />
            </div>
            {/* <!-- end of img --> */}


            <div id="journeyOfAccelerating" className="col-12 white-border-mob br-half bb-half Box-padding">

                <div className="col-12 AccelTitle text-medium-mob font-goodtimes mt-3 text-uppercase"
                    data-query="my-journey.header.title-mob"
                    dangerouslySetInnerHTML={{ __html: myJournyCopy.header["title-mob"] }}></div>
                <div className="col-12 AccelText text-thin text-medium mt-5"
                    dangerouslySetInnerHTML={{ __html: myJournyCopy.header.subtitle }}
                    data-query="my-journey.header.subtitle"></div>
                <div className="br-gradient bg-blue-gradient"></div>

            </div>



            <div id="HomeSchooling" className="col-12 white-border-mob br-half bb-half">
                <div className="bg-blue-gradient tl-gradient"></div>


                <div className="tr-squareContainer col-12 p-0">
                    <div className="SquRow">
                        <div className="bigSqu white-border-mob br-half bb-half">
                        </div>
                        <div className="smallSqu white-border-mob br-half bb-half">
                        </div>
                    </div>
                    <div className="smallSqu white-border-mob SquPosition br-half bb-half">
                    </div>
                </div>


                <div className="Box-padding">
                    <div className="col-12 AccelTitle my-2 text-medium font-goodtimes"
                        dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"]["title-mob"] }}
                        data-query="my-journey.segment-1.title-mob"></div>

                    <Accordion items={myJournyCopy["segment-1"].items} />

                </div>


                <div className="bl-squareContainer">
                    <div className="bigSqu white-border">
                        <div className="InsideSqu white-border"></div>
                    </div>
                </div>


            </div>



        </>
    )
}