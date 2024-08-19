"use client"

import { howToAccelerateCopy } from "@/app/copy/how-to-accelerate"


export default function SectionsMobile() {
    return (
        <>

        {/* <!-- How To Accelerate --> */}
        <div id="HowToAccelerate" className="col-12 mobile white-border-mob br-half bb-half Box-padding">

            <div className="col-12 AccelTitle text-large-ob font-goodtimes mt-3"
            dangerouslySetInnerHTML={{ __html: howToAccelerateCopy.header.title }}
            data-query="home.how-to-accelerate.header.title"></div>
            <div className="col-12 AccelText text-thin text-medium mt-4"
                    dangerouslySetInnerHTML={{ __html: howToAccelerateCopy.header.subtitle }}
            data-query="how-to-accelerate.header.subtitle"></div>
                <a data-query="how-to-accelerate.header.button._"
                 data-attribute="href" data-target="target" 
                 href={howToAccelerateCopy.header.button.url} target={howToAccelerateCopy.header.button.target}>
                    <button className="mt-4 button font-goodtimes text-xsmall" data-query="how-to-accelerate.header.button.name">
                        {howToAccelerateCopy.header.button.name}
                        </button></a>
            <div className="br-gradient bg-blue-gradient"></div>
        </div>
        {/* <!-- end of How To Accelerate --> */}

        {/* <!-- step 1 --> */}
        <div id="Step1" className="col-12 white-border-mob br-half bb-hal Box-padding">

            <img src="./img/step1.svg" className="mt-4" />

            <p className="mt-5 text-blue font-goodtimes text-medium" 
                    dangerouslySetInnerHTML={{ __html: howToAccelerateCopy.cards[0].step }}
            data-query="how-to-accelerate.cards.0.step"></p>
            <div className="col-12 AccelTitle mt-4 text-medium-mob font-goodtimes" 
                    dangerouslySetInnerHTML={{ __html: howToAccelerateCopy.cards[0]["title-mob"] }}
            data-query="how-to-accelerate.cards.0.title-mob"></div>
            <div className="col-12 AccelText text-thin text-light text-small Box-padding"
                    data-query="how-to-accelerate.cards.0.description"
                     dangerouslySetInnerHTML={{ __html: howToAccelerateCopy.cards[0].description }}></div>
            <div className="bb-gradient bg-blue-gradient"></div>
        </div>
        {/* <!-- end of step 1 --> */}

        {/* <!-- step 2 --> */}
        <div id="Step2" className="col-12 white-border-mob br-half bb-half">

            <img src="./img/step2.svg" className="mt-4" />
                <p className="mt-5 text-blue font-goodtimes text-medium" data-query="how-to-accelerate.cards.1.step"
                 dangerouslySetInnerHTML={{ __html: howToAccelerateCopy.cards[1].step }}></p>
            <div className="col-12 AccelTitle mt-4 text-medium-mob font-goodtimes"
                    dangerouslySetInnerHTML={{ __html: howToAccelerateCopy.cards[1]["title-mob"] }}
            data-query="how-to-accelerate.cards.1.title"></div>
            <div className="col-12 AccelText text-thin text-light text-small Box-padding"
                data-query="how-to-accelerate.cards.1.description" 
                    dangerouslySetInnerHTML={{ __html: howToAccelerateCopy.cards[1].description }}></div>
            <div className="bb-gradient bg-blue-gradient"></div>
        </div>
        {/* <!-- end of step 2 --> */}

        {/* <!-- step 3 --> */}
        <div id="Step3" className="col-12 white-border-mob br-half bb-half">

            <img src="./img/step3.svg" className="mt-4" />
            <p className="mt-5 text-blue font-goodtimes text-medium" 
                    dangerouslySetInnerHTML={{ __html: howToAccelerateCopy.cards[2].step }}
            data-query="how-to-accelerate.cards.2.step"></p>
            <div className="col-12 AccelTitle mt-4 text-medium-mob font-goodtimes" 
            
            data-query="how-to-accelerate.cards.2.title-mob" 
                    dangerouslySetInnerHTML={{ __html: howToAccelerateCopy.cards[2]["title-mob"] }}></div>
            <div className="col-12 AccelText text-thin text-light text-small Box-padding"
                    data-query="how-to-accelerate.cards.2.description" dangerouslySetInnerHTML={{ __html: howToAccelerateCopy.cards[2].description }}></div>
            <div className="bb-gradient bg-blue-gradient"></div>
        </div>
        {/* <!-- end of step 3 --> */}

        {/* <!-- step 4 --> */}
        <div id="Step4" className="col-12 white-border-mob br-half bb-half">

            <img src="./img/step4.svg" className="mt-4" />
            <p className="mt-5 text-blue font-goodtimes text-medium" data-query="how-to-accelerate.cards.3.step">STEP 4:</p>
            <div className="col-12 AccelTitle mt-4 text-medium-mob font-goodtimes" 
                    dangerouslySetInnerHTML={{ __html: howToAccelerateCopy.cards[3]["title-mob"] }}
            data-query="how-to-accelerate.cards.3.title-mob"></div>
            <div className="col-12 AccelText text-thin text-light text-small Box-padding"
                    data-query="how-to-accelerate.cards.3.description" dangerouslySetInnerHTML={{ __html: howToAccelerateCopy.cards[3].description }}></div>
            <div className="bb-gradient bg-blue-gradient"></div>
        </div>
        {/* <!-- end of step 4 --> */}

        {/* <!-- Acceleration --> */}
        <div id="Acceleration" className="col-12 white-border-mob br-half bb-half">
            <div className="col-12 mt-4 font-goodtimes text-medium  Box-padding"
                    dangerouslySetInnerHTML={{ __html: howToAccelerateCopy.quote["text-mob"] }}
            data-query="how-to-accelerate.quote.text-mob"></div>
        </div>
        {/* <!-- end of Acceleration --> */}

    </>
    )
}