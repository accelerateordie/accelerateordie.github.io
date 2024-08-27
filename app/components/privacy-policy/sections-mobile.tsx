"use client"
import { privacyPolicyCopy } from '@/app/copy/privacy-policy'

export default function Sections() {
    return (
        <>
            <div className="container">
                <div id="seg-0" className=" row white-border bt-half bb-half position-relative overflow-hidden">
                    {/* <!-- TOP RIGHT SQUARES --> */}
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
                    <div className="w-80 m-auto">

                        <div className="p-2 m-0">
                            <h2 className="font-goodtimes text-large text-narrow-height text-left"
                                dangerouslySetInnerHTML={{ __html: privacyPolicyCopy.title_mobile }}></h2>
                            <p className="text-thin text-small text-left mt-5"
                                dangerouslySetInnerHTML={{ __html: privacyPolicyCopy.description }}></p>
                        </div>


                        {
                            privacyPolicyCopy.items.map((item,index) => (
                                <div className="p-2 m-0">
                                    <p className="font-goodtimes text-xmedium text-narrow-height text-left"
                                        dangerouslySetInnerHTML={{ __html: item.title }}></p>
                                    <p className="text-thin text-small text-left mt-3"
                                        dangerouslySetInnerHTML={{ __html: item.description }}></p>
                                </div>
                            ))
                        }

                        <div className="mt-high"></div>
                        <div className="bg-green-gradient br-gradient"></div>
                        <div className="bg-green-gradient tl-gradient"></div>

                        {/* <!-- BOTTOM LEFT SQUARES --> */}
                        <div className="bl-squareContainer">
                            <div className="bigSqu white-border">
                                <div className="InsideSqu white-border"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}