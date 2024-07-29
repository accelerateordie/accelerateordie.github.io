"use client"
import Lottie from 'react-lottie-player'
import lottieFile from '@/public/img/gradient-dots-90.json'
import { homeCopy } from '@/app/copy/home'

export default function SectionsMobile() {
    return (

        <section className="container">
            {/* <!-- Gif --> */}
            <div id="Gif" className="col-12 white-border-mob br-half bb-half">
                <div>
                    <Lottie loop animationData={lottieFile} play />
                </div>

            </div>

            {/* <!-- LearnMore --> */}
            <div id="LearnMore" className="col-12 white-border-mob br-half bb-half Box-padding">

                <div className="col-12 AccelTitle text-large-mob font-goodtimes mt-3" data-query="home.header.title" dangerouslySetInnerHTML={{ __html: homeCopy.header.title }}></div>
                <div className="col-12 AccelText text-thin text-medium mt-4" data-query="home.header.subtitle-mob"
                    dangerouslySetInnerHTML={{ __html: homeCopy.header['subtitle-mob'] }}></div>
                {/* onclick="scrollToContent('seg-0')" */}
                <a target={homeCopy.header.button.target} href={homeCopy.header.button.url} className="mt-4 button font-goodtimes text-xsmall text-dark float-start text-decoration-none">
                    {homeCopy.header.button.name}</a>
                <div className="br-gradient bg-blue-gradient"></div>

            </div>

            <div className="col-12 white-border-mob Box-padding br-half bb-half box3 text-thin text-small">
                <img src="./img/vertical-lines.svg" /><br /><br />
                <span data-query="home.header.paragraph" dangerouslySetInnerHTML={{ __html: homeCopy.header.paragraph }}></span>
            </div>
            {/* onclick="scrollToContent('seg-0')" */}
            <div
                className="col-12 font-goodtimes text-medium white-border-mob Box-padding br-half bb-half Box4">
                <a href="#seg-0" className='text-white text-decoration-none'>
                    <img src="./img/horizontal-lines-mob.svg" />
                    <span data-query="home.header.sub-items.0.name-mob" dangerouslySetInnerHTML={{ __html: homeCopy.header['sub-items'][0]['name-mob'] }}></span>
                </a>
            </div>
            {/* onclick="scrollToContent('seg-1')" */}
            <div
                className="col-12 font-goodtimes text-medium white-border-mob Box-padding br-half bb-half Box4">
                <a href="#seg-1" className='text-white text-decoration-none'>
                    <img src="./img/horizontal-lines-mob.svg" />
                    <span data-query="home.header.sub-items.1.name-mob" dangerouslySetInnerHTML={{ __html: homeCopy.header['sub-items'][1]['name-mob'] }}></span>
                </a>
            </div>
            {/* onclick="scrollToContent('seg-2')" */}
            <div
                className="col-12 font-goodtimes text-medium white-border-mob Box-padding br-half bb-half Box4">
                <a href="#seg-2" className='text-white text-decoration-none'>
                    <img src="./img/horizontal-lines-mob.svg" />
                    <span data-query="home.header.sub-items.2.name-mob" dangerouslySetInnerHTML={{ __html: homeCopy.header['sub-items'][2]['name-mob'] }}></span>
                </a>
            </div>
            {/* onclick="scrollToContent('seg-3')" */}
            <div
                className="col-12 font-goodtimes text-medium white-border-mob Box-padding br-half bb-half Box4">
                <a href="#seg-3" className='text-white text-decoration-none'>
                    <img src="./img/horizontal-lines-mob.svg" />
                    <span data-query="home.header.sub-items.3.name-mob" dangerouslySetInnerHTML={{ __html: homeCopy.header['sub-items'][3]['name-mob'] }}></span>
                </a>
            </div>

            <div id="seg-0" className="p-0 col-12 white-border-mob br-half bb-half Accelerationism">
                <div className="bg-green-gradient tl-gradient"></div>

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


                <div className="col-12 AccelTitle mt-2 text-medium-mob font-goodtimes" data-query="home.segment-1.title"
                    dangerouslySetInnerHTML={{ __html: homeCopy['segment-1'].title }}></div>
                <div className="col-12 AccelText text-thin text-small Box-padding" data-query="home.segment-1.subtitle"
                    dangerouslySetInnerHTML={{ __html: homeCopy['segment-1'].subtitle }}></div>

                <div className="mt-5">
                    <img src="./img/human.svg" width="145" />
                </div>

                <div className="col-12 AccelTitle text-medium-mob font-goodtimes mt-5"
                    data-query="home.segment-1.cards.0.title-mob" dangerouslySetInnerHTML={{ __html: homeCopy['segment-1'].cards[0]['title-mob'] }}></div>
                <div className="col-12 AccelText Box-padding text-thin text-light text-small"
                    data-query="home.segment-1.cards.0.description" dangerouslySetInnerHTML={{ __html: homeCopy['segment-1'].cards[0].description }}></div>

                <div className="col-12 AccelTitle mt-4 text-medium-mob font-goodtimes"
                    data-query="home.segment-1.cards.1.title-mob" dangerouslySetInnerHTML={{ __html: homeCopy['segment-1'].cards[1]['title-mob'] }}></div>
                <div className="col-12 AccelText Box-padding text-thin text-light text-small"
                    data-query="home.segment-1.cards.1.description" dangerouslySetInnerHTML={{ __html: homeCopy['segment-1'].cards[1].description }}></div>

                <div className="br-gradient bg-green-gradient"></div>

                {/* <!-- 2square --> */}
                <div className="bl-squareContainer">
                    <div className="bigSqu white-border">
                        <div className="InsideSqu white-border"></div>
                    </div>

                </div>
                {/* <!-- end of 2square --> */}

            </div>
            {/* <!-- end of Accelerationism Movement --> */}


            <div id="seg-1" className="p-0 col-12 white-border-mob br-half bb-half TheMachines">

                <div className="col-12 AccelTitle mt-5 text-medium-mob font-goodtimes"
                    dangerouslySetInnerHTML={{ __html: homeCopy['segment-2'].title }}
                    data-query="home.segment-2.title"></div>
                <div className="col-12 AccelText text-thin text-light text-small Box-padding"
                    data-query="home.segment-2.subtitle" dangerouslySetInnerHTML={{ __html: homeCopy['segment-2'].subtitle }}></div>

            </div>
            {/* <!-- end of The Machines --> */}

            {/* <!-- The Silicon Machines --> */}
            <div className="pt-5 col-12 white-border-mob br-half bb-half TheSiliconMachines">

                <img src="./img/silicon-machines-mob.svg" />
                <div className="col-12 AccelTitle mt-3 text-medium-mob font-goodtimes"
                    data-query="home.segment-2.cards.0.title" dangerouslySetInnerHTML={{ __html: homeCopy['segment-2'].cards[0].title }}></div>

                <div className="col-12 AccelText text-thin text-light text-small Box-padding"
                    data-query="home.segment-2.cards.0.description" dangerouslySetInnerHTML={{ __html: homeCopy['segment-2'].cards[0].description }}></div>
                <div>
                    {/* onclick="scrollToContent('our-mission')" */}
                    <a className="text-decoration-none" href={homeCopy['segment-2'].cards[0].button.url} target={homeCopy['segment-2'].cards[0].button.target}>
                        <img src="./img/vertical-lines.svg" className='vertical-lines' /><span
                            className="font-goodtimes text-small text-blue"
                            data-query="home.segment-2.cards.0.button.name">{homeCopy['segment-2'].cards[0].button.name}</span>
                    </a>
                </div>
                <div className="bb-gradient bg-blue-gradient"></div>
            </div>
            {/* <!-- end of The Machines --> */}

            {/* <!-- The Purpose of AI --> */}
            <div className="pt-5 col-12 white-border-mob br-half bb-half TheSiliconMachines">

                <img src="./img/purpose-of-ai.svg" />
                <div className="col-12 AccelTitle mt-3 text-medium-mob font-goodtimes"
                    data-query="home.segment-2.cards.1.title" dangerouslySetInnerHTML={{ __html: homeCopy['segment-2'].cards[1].title }}></div>
                <div className="col-12 AccelText text-thin text-light text-small Box-padding"
                    data-query="home.segment-2.cards.1.description" dangerouslySetInnerHTML={{ __html: homeCopy['segment-2'].cards[1].description }}></div>
                <div>
                    <img src="./img/vertical-lines.svg" className='vertical-lines' />
                    <span
                        className="font-goodtimes text-small text-blue" data-query="home.segment-2.cards.1.button.name"
                        dangerouslySetInnerHTML={{ __html: homeCopy['segment-2'].cards[1].button.name }}></span>
                </div>
                <div className="bb-gradient bg-blue-gradient"></div>

            </div>

            <div className="pt-5 col-12 white-border-mob br-half bb-half TheEnergyMachines">
                <img src="./img/energy-machines.svg" />
                <div className="col-12 AccelTitle mt-3 text-medium-mob font-goodtimes"
                    data-query="home.segment-2.cards.2.title" dangerouslySetInnerHTML={{ __html: homeCopy['segment-2'].cards[2].title }}></div>
                <div className="col-12 AccelText text-thin text-light text-small Box-padding"
                    data-query="home.segment-2.cards.2.description" dangerouslySetInnerHTML={{ __html: homeCopy['segment-2'].cards[2].description }}></div>
                <div>
                    <a className="text-decoration-none"
                        href={homeCopy['segment-2'].cards[2].button.url}
                        target={homeCopy['segment-2'].cards[2].button.target} data-attribute="href" data-target="target"
                        data-query="home.segment-2.cards.2.button._" >
                        <img src="./img/vertical-lines.svg" className='vertical-lines' /><span
                            className="font-goodtimes text-small text-blue"
                            data-query="home.segment-2.cards.2.button.name">{homeCopy['segment-2'].cards[2].button.name}</span>
                    </a>
                </div>
                <div className="bb-gradient bg-blue-gradient"></div>

            </div>

            <div id="seg-2" className="pt-5 col-12 white-border-mob br-half bb-half TheUniverse">
                <div className="tr-gradient bg-green-gradient"></div>
                <div className="col-12 AccelTitle text-medium-mob font-goodtimes mt-3" data-query="home.segment-3.title"
                    dangerouslySetInnerHTML={{ __html: homeCopy['segment-3'].title }}></div>
                <div className="col-12 AccelText text-thin text-light text-small Box-padding"
                    data-query="home.segment-3.subtitle" dangerouslySetInnerHTML={{ __html: homeCopy['segment-3'].subtitle }}></div>
                <img src="./img/planet.png" className="rotating" />
            </div>


            <div id="Entropy" className="col-12 white-border-mob br-half bb-half">
                <div className="col-12 AccelTitle mt-3 text-medium font-goodtimes px-4"
                    dangerouslySetInnerHTML={{ __html: homeCopy['segment-3'].cards[0]['title-mob'] }}
                    data-query="home.segment-3.cards.0.title"></div>
                <div className="col-12 AccelText text-thin text-light text-small Box-padding"
                    data-query="home.segment-3.cards.0.description" dangerouslySetInnerHTML={{ __html: homeCopy['segment-3'].cards[0].description }}></div>
            </div>

            <div id="UnivarsalMachine" className="col-12 white-border-mob br-half bb-half">
                <div className="col-12 AccelTitle mt-3 text-medium font-goodtimes px-4"
                    data-query="home.segment-3.cards.1.title-mob" dangerouslySetInnerHTML={{ __html: homeCopy['segment-3'].cards[1]['title-mob'] }}></div>
                <div className="col-12 AccelText text-thin text-light text-small Box-padding"
                    data-query="home.segment-3.cards.1.description" dangerouslySetInnerHTML={{ __html: homeCopy['segment-3'].cards[1].description }}></div>
            </div>

            <div id="Religion" className="col-12 white-border-mob br-half bb-half">
                <div className="col-12 AccelTitle mt-3 text-medium font-goodtimes px-4"
                    data-query="home.segment-3.cards.2.title-mob" dangerouslySetInnerHTML={{ __html: homeCopy['segment-3'].cards[2]['title-mob'] }}></div>
                <div className="col-12 AccelText text-thin text-light text-small Box-padding"
                    data-query="home.segment-3.cards.2.description" dangerouslySetInnerHTML={{ __html: homeCopy['segment-3'].cards[2].description }}></div>
            </div>

            <div id="seg-3" className="col-12 white-border-mob br-half bb-half TheDecels">

                <div className="col-12 AccelTitle mt-5 text-medium-mob font-goodtimes" data-query="home.segment-4.title"
                    dangerouslySetInnerHTML={{ __html: homeCopy['segment-4'].title }}></div>
                <div className="col-12 AccelText text-thin text-light text-small Box-padding"
                    data-query="home.segment-4.subtitle" dangerouslySetInnerHTML={{ __html: homeCopy['segment-4'].subtitle }}></div>

            </div>

            <div id="TheirMotives" className="pt-5 col-12 white-border-mob br-half bb-half">
                <div className="tr-gradient bg-yellow-gradient"></div>

                <img src="./img/their-motives.svg" />

                <div className="col-12 AccelTitle mt-5 text-medium-mob font-goodtimes"
                    data-query="home.segment-4.cards.0.title" dangerouslySetInnerHTML={{ __html: homeCopy['segment-4'].cards[0].title }}></div>
                <div className="col-12 AccelText text-thin text-light text-small Box-padding"
                    data-query="home.segment-4.cards.0.description" dangerouslySetInnerHTML={{ __html: homeCopy['segment-4'].cards[0].description }}></div>

            </div>

            <div id="WokeIdeology" className="pt-5 col-12 white-border-mob br-half bb-half">
                <div className="tr-gradient bg-yellow-gradient"></div>
                <img src="./img/woke-ideology.svg" />
                <div className="col-12 AccelTitle mt-5 text-medium-mob font-goodtimes"
                    data-query="home.segment-4.cards.1.title" dangerouslySetInnerHTML={{ __html: homeCopy['segment-4'].cards[1].title }}></div>
                <div className="col-12 AccelText text-thin text-light text-small Box-padding"
                    data-query="home.segment-4.cards.1.description" dangerouslySetInnerHTML={{ __html: homeCopy['segment-4'].cards[1].description }}></div>
            </div>

            <div id="StopAi" className="pt-5 col-12 white-border-mob br-half bb-half">
                <div className="tr-gradient bg-yellow-gradient"></div>
                <img src="./img/stop-ai.svg" />
                <div className="col-12 AccelTitle mt-5 text-medium-mob font-goodtimes px-4"
                    data-query="home.segment-4.cards.2.title" dangerouslySetInnerHTML={{ __html: homeCopy['segment-4'].cards[2].title }}></div>
                <div className="col-12 AccelText text-thin text-light text-small Box-padding"
                    data-query="home.segment-4.cards.2.description" dangerouslySetInnerHTML={{ __html: homeCopy['segment-4'].cards[2].description }}></div>
            </div>

        </section>
    )
}