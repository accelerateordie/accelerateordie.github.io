"use client"

import { myJournyCopy } from "@/app/copy/my-journey"
import { GoodTimes } from "@/app/fonts"

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
                <div className="col-md-6 d-flex flex-column justify-content-center ps-4 pt-5 white-border bl-half bb-half position-relative overflow-hidden">
                    <div className={`text-uppercase text-xxlarge text-narrow-height ${GoodTimes.className}`}
                        data-query="my-journey.header.title" >
                        <h1 className={`text-uppercase text-xlarge text-center text-narrow-height ${GoodTimes.className}`} dangerouslySetInnerHTML={{ __html: myJournyCopy.header.title }}></h1>
                    </div>
                    <div className="mx-5 my-2 p-5 text-center text-medium text-n100 text-narrow-height text-thin"
                        data-query="my-journey.header.subtitle" dangerouslySetInnerHTML={{ __html: myJournyCopy.header.subtitle }}></div>
                    <div className="bg-blue-gradient br-gradient-medium"></div>
                </div>
                <div className="col-md-3">
                    <div className="row">
                        <div className="col-12 white-border br-half bb-half p-0 overflow-hidden">
                            <img src="./img/bg-journey-header.png" alt="My Journey" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Key Concepts --> */}
            <div className="row white-border bt-half bb-half position-relative overflow-hidden">
                <div className="p-5 m-0">
                    <h4 className={`text-large text-narrow-height text-center mt-high ${GoodTimes.className}`}
                        data-query="my-journey.segment-1.title" dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].title }}></h4>
                </div>
                <div className="row justify-content-center">

                    <div className="TimeLineContainer">
                        <div className="myJourneyTimeLine"></div>
                    </div>
                    <div className="col-md-6 ps-4 mb-high">
                        {/* <!-- 1 --> */}
                        <div className="myJourneyItems">
                            <img className="myJourneyicon" src={myJournyCopy["segment-1"].items[0].img} />
                            <h4 className={`text-medium" data-query="my-journey.segment-1.items.0.title ${GoodTimes.className}`}
                                dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].items[0].title }}></h4>
                            <p className="text-small text-n300"
                                dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].items[0].description }}
                                data-query="my-journey.segment-1.items.0.description"></p>
                        </div>
                        {/* <!-- 2 --> */}
                        <div className="myJourneyItems">
                            <img className="myJourneyicon" src={myJournyCopy["segment-1"].items[1].img} />
                            <h4 className={`text-medium" data-query="my-journey.segment-1.items.1.title ${GoodTimes.className}`}
                                dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].items[1].title }}></h4>
                            <p className="text-small text-n300" data-query="my-journey.segment-1.items.1.description"
                                dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].items[1].description }}></p>
                        </div>
                        {/* <!-- 3 --> */}
                        <div className="myJourneyItems">
                            <img className="myJourneyicon" src={myJournyCopy["segment-1"].items[2].img} />
                            <h4 className={`text-medium" data-query="my-journey.segment-1.items.2.title ${GoodTimes.className}`}
                                dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].items[2].title }}></h4>
                            <p className="text-small text-n300" data-query="my-journey.segment-1.items.2.description"
                                dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].items[2].description }}></p>
                        </div>
                        {/* <!-- 4 --> */}
                        <div className="myJourneyItems">
                            <img className="myJourneyicon" src={myJournyCopy["segment-1"].items[3].img}/>
                            <h4 className={`text-medium mt-5" data-query="my-journey.segment-1.items.3.title ${GoodTimes.className}`}
                                dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].items[3].title }}></h4>
                            <p className="text-small text-n300" data-query="my-journey.segment-1.items.3.description"
                                dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].items[3].description }}></p>
                        </div>
                        {/* <!-- 5 --> */}
                        <div className="myJourneyItems">
                            <img className="myJourneyicon" src={myJournyCopy["segment-1"].items[4].img}/>
                            <h4 className={`text-medium mt-4" data-query="my-journey.segment-1.items.4.title ${GoodTimes.className}`}
                                dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].items[4].title }}></h4>
                            <p className="text-small text-n300" data-query="my-journey.segment-1.items.4.description"
                                dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].items[4].description }}></p>
                        </div>
                        {/* <!-- 6 --> */}
                        <div className="myJourneyItems">
                            <img className="myJourneyicon" src={myJournyCopy["segment-1"].items[5].img} />
                            <h4 className={`text-medium mt-4 ${GoodTimes.className}`}
                                data-query="my-journey.segment-1.items.5.title"
                                dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].items[5].title }}></h4>
                            <p className="text-small text-n300" data-query="my-journey.segment-1.items.5.description"
                                dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].items[5].description }}></p>
                        </div>
                        {/* <!-- 7 --> */}
                        <div className="myJourneyItems">
                            <img className="myJourneyicon" src={myJournyCopy["segment-1"].items[6].img} />
                            <h4 className={`text-medium mt-5" data-query="my-journey.segment-1.items.6.title ${GoodTimes.className}`}
                                dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].items[6].title }}></h4>
                            <p className="text-small text-n300" data-query="my-journey.segment-1.items.6.description"
                                dangerouslySetInnerHTML={{ __html: myJournyCopy["segment-1"].items[6].description }}></p>
                        </div>
                        {/* <!-- 8 --> */}
                        <div className="myJourneyItems">
                            <img className="myJourneyicon" src={myJournyCopy["segment-1"].items[7].img}/>
                            <h4 className={`text-medium mt-4 ${GoodTimes.className}`}
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