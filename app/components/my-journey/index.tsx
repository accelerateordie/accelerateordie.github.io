"use client"

import { myJournyCopy } from "@/app/copy/my-journy"


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
                        data-query="my-journey.header.title" >
                        <h1 className="text-uppercase font-goodtimes text-xxlarge text-narrow-height"
                         dangerouslySetInnerHTML={{ __html: myJournyCopy.header.title }}></h1>
                    </div>
                    <div className="text-thin text-medium my-5 text-narrow-height w-60 text-n100"
                        data-query="my-journey.header.subtitle" dangerouslySetInnerHTML={{ __html: myJournyCopy.header.subtitle }}></div>
                    <div className="bg-blue-gradient br-gradient-medium"></div>
                </div>
            </div>
            {/* <!-- Key Concepts --> */}
            <div className="row white-border bt-half bb-half position-relative overflow-hidden">
                <div className="p-5 m-0">
                    <h4 className="font-goodtimes text-large text-narrow-height text-center mt-high"
                        data-query="my-journey.segment-1.title" dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].title}}></h4>
                </div>
                <div className="row justify-content-center">

                    <div className="col-md-1"> <img src="./img/journey-timeline.svg" alt="Timeline" /></div>
                    <div className="col-md-6 ps-4 mb-high">
                        {/* <!-- 1 --> */}
                        <div style={{height:"280px"}}>
                            <h4 className="font-goodtimes text-medium" data-query="my-journey.segment-1.items.0.title" 
                                dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].items[0].title }}></h4>
                            <p className="text-small text-n300"
                                dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].items[0].description }}
                            data-query="my-journey.segment-1.items.0.description"></p>
                        </div>
                        {/* <!-- 2 --> */}
                        <div style={{ height: "210px" }}>
                            <h4 className="font-goodtimes text-medium" data-query="my-journey.segment-1.items.1.title"
                                dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].items[1].title }}></h4>
                            <p className="text-small text-n300" data-query="my-journey.segment-1.items.1.description" 
                                dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].items[1].description }}></p>
                        </div>
                        {/* <!-- 3 --> */}
                        <div>
                            <h4 className="font-goodtimes text-medium" data-query="my-journey.segment-1.items.2.title" 
                                dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].items[2].title }}></h4>
                            <p className="text-small text-n300" data-query="my-journey.segment-1.items.2.description" 
                                dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].items[2].description }}></p>
                        </div>
                        {/* <!-- 4 --> */}
                        <div>
                            <h4 className="font-goodtimes text-medium mt-5" data-query="my-journey.segment-1.items.3.title" 
                                dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].items[3].title }}></h4>
                            <p className="text-small text-n300" data-query="my-journey.segment-1.items.3.description" 
                                dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].items[3].description }}></p>
                        </div>
                        {/* <!-- 5 --> */}
                        <div>
                            <h4 className="font-goodtimes text-medium mt-4" data-query="my-journey.segment-1.items.4.title" 
                                dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].items[4].title }}></h4>
                            <p className="text-small text-n300" data-query="my-journey.segment-1.items.4.description"
                                dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].items[4].description }}></p>
                        </div>
                        {/* <!-- 6 --> */}
                        <div>
                            <h4 className="font-goodtimes text-medium mt-4" 
                                data-query="my-journey.segment-1.items.5.title"
                                 dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].items[5].title }}></h4>
                            <p className="text-small text-n300" data-query="my-journey.segment-1.items.5.description" 
                                dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].items[5].description }}></p>
                        </div>
                        {/* <!-- 7 --> */}
                        <div>
                            <h4 className="font-goodtimes text-medium mt-5" data-query="my-journey.segment-1.items.6.title" 
                                dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].items[6].title }}></h4>
                            <p className="text-small text-n300" data-query="my-journey.segment-1.items.6.description" 
                                dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].items[6].description }}></p>
                        </div>
                        {/* <!-- 8 --> */}
                        <div>
                            <h4 className="font-goodtimes text-medium mt-4" 
                                data-query="my-journey.segment-1.items.7.title" 
                                dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].items[7].title }}></h4>
                            <p className="text-small text-n300" data-query="my-journey.segment-1.items.7.description" 
                                dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].items[7].description }}></p>
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