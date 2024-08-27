"use client"
import { privacyPolicyCopy } from '@/app/copy/privacy-policy'

export default function Sections() {
    return (
        <>
            <div className="container">
                <div id="seg-0" className=" row white-border bt-half bb-half position-relative overflow-hidden">
                    <div className="w-80 m-auto">
                        <div className="py-5 p-2 m-0">
                            <h2 className="font-goodtimes text-xlarge text-narrow-height text-center mt-high"
                                dangerouslySetInnerHTML={{ __html: privacyPolicyCopy.title }}></h2>
                            <p className="text-thin text-small text-left mt-5"
                                dangerouslySetInnerHTML={{ __html: privacyPolicyCopy.description }}></p>
                        </div>


                        {
                            privacyPolicyCopy.items.map((item,index) => (
                                <div className="p-2 m-0">
                                    <h5 className="font-goodtimes text-narrow-height text-left"
                                        dangerouslySetInnerHTML={{ __html: item.title }}></h5>
                                    <p className="text-thin text-small text-left mt-3"
                                        dangerouslySetInnerHTML={{ __html: item.description }}></p>
                                </div>
                            ))
                        }

                        <div className="mt-high p-5"></div>
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
                </div>
            </div >
        </>
    )
}