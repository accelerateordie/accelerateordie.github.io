"use client"
import Lottie from 'react-lottie-player'
import lottieFile from '@/public/img/gradient-dots.json'
import { homeCopy } from '@/app/copy/home'
import { useEffect, useRef } from 'react';

export default function Sections(this: any) {
    const images = [
        ["./img/horizontal-lines-2.svg", "./img/horizontal-lines-3.svg", "./img/horizontal-lines-4.svg"],
        ["./img/horizontal-lines-2.svg", "./img/horizontal-lines-3.svg", "./img/horizontal-lines-4.svg"],
        ["./img/horizontal-lines-2.svg", "./img/horizontal-lines-3.svg", "./img/horizontal-lines-4.svg"]
    ];
    let currentIndex = 0;
    const imageInterval = useRef<any>(null);

    const startImageLoop = (wrapper: HTMLElement, index: number) => {
        imageInterval.current = setInterval(() => changeImage(wrapper, index), 200);
    };

    const changeImage = (wrapper: HTMLElement, index: number) => {
        const mainImage = wrapper.querySelector(".main-image") as HTMLImageElement;
        if (mainImage) {
            mainImage.src = images[0][currentIndex];
            currentIndex = (currentIndex + 1) % images[currentIndex].length;
            if (currentIndex === 0) {
                clearInterval(imageInterval.current);
            }
        }
    };

    const resetImage = (wrapper: HTMLElement) => {
        clearInterval(imageInterval.current);
        currentIndex = 0;
        const mainImage = wrapper.querySelector(".main-image") as HTMLImageElement;
        if (mainImage) {
            mainImage.src = "./img/horizontal-lines.svg";
        }
    };

    useEffect(() => {
        return () => clearInterval(imageInterval.current);
    }, []);



    return (
        <>
            <div className="row">
                <div className="w-80 p-0">
                    <div className="row m-0">
                        <div id="bg-gradient-dots" className="col-3 white-border br-half bb-half p-0 overflow-hidden">
                            <div id="bg-gradient-dots-img">
                            </div>
                        </div>
                        <div className="col-9 white-border bb-half p-5 ps-6 position-relative overflow-hidden bl-half br-half ">
                            <div className=" mt-high text-uppercase font-goodtimes text-xxlarge text-narrow-height "
                                data-query="home.header.title">
                                <h1 dangerouslySetInnerHTML={{ __html: homeCopy.header.title }}
                                    className="text-uppercase font-goodtimes text-xxlarge text-narrow-height"></h1>
                            </div>
                            <div className="text-thin text-medium my-5 text-narrow-height"
                                dangerouslySetInnerHTML={{ __html: homeCopy.header.subtitle }}></div>
                            <a className='box btn font-goodtimes text-medium text-thin bg-blue btn-xpadding mb-high'
                                target={homeCopy.header.button.target} href={homeCopy.header.button.url}>
                                {homeCopy.header.button.name}

                            </a>
                            <div className="bg-blue-gradient br-gradient"></div>
                        </div>
                    </div>

                    <div className="row m-0 py-5 white-border bt-half br-half bb-half">
                        {[0, 1, 2, 3].map((index) => (
                            <div key={index} className="col-3 d-flex align-items-center cursor-pointer">
                                <a href={`#seg-${index}`} className='d-flex align-items-center text-white text-decoration-none'
                                    onMouseEnter={(e) => startImageLoop(e.currentTarget as HTMLElement, index)}
                                    onMouseLeave={(e) => resetImage(e.currentTarget as HTMLElement)}>
                                    <div
                                        className="lines-wrapper"

                                    >
                                        <img src="/img/horizontal-lines.svg" className="main-image" alt="Horizontal Lines" />
                                    </div>
                                    <span className="text-uppercase font-goodtimes text-medium d-flex align-items-center"
                                        dangerouslySetInnerHTML={{ __html: homeCopy.header['sub-items'][index].name }}></span>
                                </a>
                            </div>
                        ))}
                    </div>

                </div>
                <div className="w-20 p-0">
                    <div id="bg-dots" className="white-border bl-half bb-half h-65">
                    </div>
                    <div className="white-border py-5 px-3 bt-half bl-half bb-half h-35">
                        {/* onmouseenter="startImageLoop(this)"
                    onmouseleave="resetImage(this)" */}
                        <div className=' align-items-center text-white text-decoration-none'>

                            <div className="lines-wrapper-r90" >
                                <img src="/img/horizontal-lines.svg" className="main-image r-90 px-3" alt="Horizontal Lines" />
                            </div>

                            <p className="text-thin text-small" data-query="home.header.paragraph"
                                dangerouslySetInnerHTML={{ __html: homeCopy.header.paragraph }}></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Accelerationism Movement --> */}
            <div id="seg-0" className=" row white-border bt-half bb-half position-relative overflow-hidden">
                <div className="p-5 m-0">
                    <h2 className="font-goodtimes text-xlarge text-narrow-height text-center mt-high"
                        data-query="home.segment-1.title" dangerouslySetInnerHTML={{ __html: homeCopy['segment-1'].title }}></h2>
                    <p className="text-thin text-small text-center mt-5"
                        data-query="home.segment-1.subtitle" dangerouslySetInnerHTML={{ __html: homeCopy['segment-1'].subtitle }}></p>
                </div>
                <div className="row align-center justify-content-center mb-high pb-3">
                    <div className="col-lg-3">
                        <h3 className="font-goodtimes text-large text-narrow-height text-center"
                            data-query="home.segment-1.cards.0.title"
                            dangerouslySetInnerHTML={{ __html: homeCopy['segment-1'].cards[0].title }}></h3>
                        <p className="text-xsmall text-thin text-center text-n300"
                            data-query="home.segment-1.cards.0.description" dangerouslySetInnerHTML={{ __html: homeCopy['segment-1'].cards[0].description }}></p>
                    </div>
                    <div className="col-lg-3">
                        <div className="image-wrapper">
                            <img src="/img/human.svg" alt="Human" className="original" />
                            <img src="/img/human-2.svg" alt="Human" className="hover" />
                        </div>

                    </div>
                    <div className="col-lg-3">
                        <h3 className="font-goodtimes text-large text-narrow-height text-center"
                            data-query="home.segment-1.cards.1.title" dangerouslySetInnerHTML={{ __html: homeCopy['segment-1'].cards[1].title }}></h3>
                        <p className="text-xsmall text-thin text-center text-n300"
                            data-query="home.segment-1.cards.1.description" dangerouslySetInnerHTML={{ __html: homeCopy['segment-1'].cards[1].description }}></p>
                    </div>
                </div>
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
            {/* <!-- THE MACHINES --> */}
            <div id="seg-1" className=" row white-border bt-half bb-half">
                <div>
                    <h2 className="font-goodtimes text-xlarge text-narrow-height text-center mt-high text-uppercase"
                        data-query="home.segment-2.title" dangerouslySetInnerHTML={{ __html: homeCopy['segment-2'].title }}></h2>
                    <p className="text-thin text-small text-center my-5 w-50 mx-auto " data-query="home.segment-2.subtitle"
                        dangerouslySetInnerHTML={{ __html: homeCopy['segment-2'].subtitle }}></p>
                </div>
                <div className="row p-0 mx-0 mt-high">
                    <div
                        className="col-lg-4 white-border text-center p-5 bl-half bb-half br-half position-relative overflow-hidden hover-bb">
                        <img src="/img/icon-machines.svg" alt="THE SILICON MACHINES" style={{ height: "180px" }} />
                        <div>
                            <h5 className="text-uppercase font-goodtimes text-medium text-narrow-height my-3"
                                data-query="home.segment-2.cards.0.title"
                                dangerouslySetInnerHTML={{ __html: homeCopy['segment-2'].cards[0].title }}></h5>
                        </div>
                        <div style={{ height: "12rem" }}>
                            <p className="text-thin text-n300 text-small text-narrow-height mt-4"
                                data-query="home.segment-2.cards.0.description" dangerouslySetInnerHTML={{ __html: homeCopy['segment-2'].cards[0].description }}></p>
                        </div>
                        <div className="my-3 pt-3">
                            <a className="text-decoration-none d-flex justify-content-center align-items-center"
                                href={homeCopy['segment-2'].cards[0].button.url} target={homeCopy['segment-2'].cards[0].button.target}
                                onMouseEnter={(e) => startImageLoop(e.currentTarget as HTMLElement, 0)}
                                onMouseLeave={(e) => resetImage(e.currentTarget as HTMLElement)}>
                                {/* onmouseenter="startImageLoop(this)" onmouseleave="resetImage(this)" */}
                                <div className="lines-wrapper-r90  d-flex justify-content-center align-items-center">
                                    <img src="/img/horizontal-lines.svg" className="main-image r-90 px-3"
                                        alt="Horizontal Lines" />
                                </div>
                                <span className="text-blue font-goodtimes text-medium text-uppercase"
                                    data-query="home.segment-2.cards.0.button.name">{homeCopy['segment-2'].cards[0].button.name}</span>
                            </a>
                        </div>
                        <div className="bb-gradient bg-blue-gradient"></div>
                    </div>
                    <div
                        className="col-lg-4 white-border text-center p-5 bl-half bb-half br-half position-relative overflow-hidden  hover-bb">
                        <img src="/img/icon-ai.svg" alt="THE PURPOSE OF AI" style={{ height: "180px" }} />
                        <div>
                            <h5 className="text-uppercase font-goodtimes text-medium text-narrow-height my-3"
                                data-query="home.segment-2.cards.1.title" dangerouslySetInnerHTML={{ __html: homeCopy['segment-2'].cards[1].title }}></h5>
                        </div>
                        <div style={{ height: "12rem" }}>
                            <p className="text-thin text-n300 text-small text-narrow-height mt-4"
                                data-query="home.segment-2.cards.1.description" dangerouslySetInnerHTML={{ __html: homeCopy['segment-2'].cards[1].description }}></p>
                        </div>
                        <div className="my-3 pt-3">
                            <a className="text-decoration-none d-flex justify-content-center align-items-center" href={homeCopy['segment-2'].cards[1].button.url}
                                target={homeCopy['segment-2'].cards[1].button.target}


                                onMouseEnter={(e) => startImageLoop(e.currentTarget as HTMLElement, 1)}
                                onMouseLeave={(e) => resetImage(e.currentTarget as HTMLElement)}>
                                {/* onmouseenter="startImageLoop(this)" onmouseleave="resetImage(this)" */}
                                <div className="lines-wrapper-r90 d-flex justify-content-center align-items-center">
                                    <img src="/img/horizontal-lines.svg" className="main-image r-90 px-3"
                                        alt="Horizontal Lines" />
                                </div>
                                <span className="text-blue font-goodtimes text-medium text-uppercase"
                                    data-query="home.segment-2.cards.1.button.name">{homeCopy['segment-2'].cards[1].button.name}</span>
                            </a>
                        </div>
                        <div className="bb-gradient bg-blue-gradient"></div>
                    </div>
                    <div
                        className="col-lg-4 white-border text-center p-5 bl-half bb-half br-half position-relative overflow-hidden  hover-bb">
                        <img src="/img/icon-energy.svg" alt="THE ENERGY MACHINES" style={{ height: "180px" }} />
                        <div>
                            <h5 className="text-uppercase font-goodtimes text-medium text-narrow-height my-3"
                                data-query="home.segment-2.cards.2.title" dangerouslySetInnerHTML={{ __html: homeCopy['segment-2'].cards[2].title }}></h5>
                        </div>
                        <div style={{ height: "12rem" }}>
                            <p className="text-thin text-n300 text-small text-narrow-height mt-4"
                                data-query="home.segment-2.cards.2.description" dangerouslySetInnerHTML={{ __html: homeCopy['segment-2'].cards[2].description }}></p>
                        </div>
                        <div className="my-3 pt-3">
                            <a className="text-decoration-none d-flex justify-content-center align-items-center"
                                href={homeCopy['segment-2'].cards[2].button.url} target={homeCopy['segment-2'].cards[2].button.target}
                                onMouseEnter={(e) => startImageLoop(e.currentTarget as HTMLElement, 2)}
                                onMouseLeave={(e) => resetImage(e.currentTarget as HTMLElement)} >
                                {/* onmouseenter="startImageLoop(this)" onmouseleave="resetImage(this)" */}
                                <div className="lines-wrapper-r90 d-flex justify-content-center align-items-center">
                                    <img src="/img/horizontal-lines.svg" className="main-image r-90 px-3"
                                        alt="Horizontal Lines" />
                                </div>
                                <span className="text-blue font-goodtimes text-medium text-uppercase"
                                    data-query="home.segment-2.cards.2.button.name">{homeCopy['segment-2'].cards[2].button.name}</span>
                            </a>
                        </div>
                        <div className="bb-gradient bg-blue-gradient"></div>
                    </div>
                </div>

            </div>
            {/* <!-- THE UNIVERSE --> */}
            <div id="seg-2" className=" row white-border bt-half bb-half position-relative overflow-hidden">
                <div>
                    <h2 className="font-goodtimes text-xlarge text-narrow-height text-center mt-high text-uppercase"
                        data-query="home.segment-3.title" dangerouslySetInnerHTML={{ __html: homeCopy['segment-3'].title }}></h2>
                    <p className="text-thin text-small text-center mt-4 w-50 mx-auto " data-query="home.segment-3.subtitle"
                        dangerouslySetInnerHTML={{ __html: homeCopy['segment-3'].subtitle }}></p>
                </div>
                <div id="planet-img"><img className="planet-img"
                    src="/img/planet.png" alt="Planet" /></div>
                {/* <!-- CARD 1 --> */}
                <div className="ms-auto d-flex w-80 me-5 mt-high">
                    <div className="h-75 w-100 bottom-line position-relative">
                        <img src="/img/green-point.svg" id="point-img" alt="Point" />
                    </div>
                    <div className="white-border p-3 w-50">
                        <h5 className="font-goodtimes text-medium text-narrow-height text-start text-uppercase"
                            data-query="home.segment-3.cards.0.title" dangerouslySetInnerHTML={{ __html: homeCopy['segment-3'].cards[0].title }}></h5>
                        <p className="text-thin text-n300 text-small text-narrow-height mt-4 text-justify"
                            data-query="home.segment-3.cards.0.description" dangerouslySetInnerHTML={{ __html: homeCopy['segment-3'].cards[0].description }}></p>
                    </div>
                </div>
                {/* <!-- CARD 2 --> */}
                <div className="ms-auto d-flex w-70 mt-high me-5">
                    <div className="h-75 w-100 bottom-line position-relative">
                        <img src="/img/green-point.svg"
                            className="point-green" alt="Point" />
                    </div>
                    <div className="white-border p-3 w-75">
                        <h5 className="font-goodtimes text-medium text-narrow-height text-start text-uppercase"
                            data-query="home.segment-3.cards.1.title" dangerouslySetInnerHTML={{ __html: homeCopy['segment-3'].cards[1].title }}></h5>
                        <p className="text-thin text-n300 text-small text-narrow-height mt-4 text-justify"
                            data-query="home.segment-3.cards.1.description" dangerouslySetInnerHTML={{ __html: homeCopy['segment-3'].cards[1].description }}></p>
                    </div>
                </div>
                {/* <!-- CARD 3 --> */}
                <div className="ms-auto d-flex w-90 mt-high me-5 mb-high">
                    <div className="h-75 w-100 bottom-line position-relative">
                        <img src="/img/green-point.svg" className="point-green" alt="Point" />
                    </div>
                    <div className="white-border p-3 w-50">
                        <h5 className="font-goodtimes text-medium text-narrow-height text-start text-uppercase"
                            data-query="home.segment-3.cards.2.title" dangerouslySetInnerHTML={{ __html: homeCopy['segment-3'].cards[2].title }}></h5>
                        <p className="text-thin text-n300 text-small text-narrow-height mt-4 text-justify"
                            data-query=" home.segment-3.cards.2.description" dangerouslySetInnerHTML={{ __html: homeCopy['segment-3'].cards[2].description }}></p>
                    </div>
                </div>
                <div style={{ height: "100px" }}></div>
                <div className="tr-gradient bg-green-gradient"></div>
            </div>
            {/* <!--THE DECELS --> */}
            <div id="seg-3" className=" row white-border bt-half bb-half ">
                <div>
                    <h2 className="font-goodtimes text-xlarge text-narrow-height text-center mt-high text-uppercase"
                        data-query="home.segment-4.title" dangerouslySetInnerHTML={{ __html: homeCopy['segment-4'].title }}></h2>
                    <p className="text-thin text-small text-center mt-4 w-50 mx-auto " data-query="home.segment-4.subtitle"
                        dangerouslySetInnerHTML={{ __html: homeCopy['segment-4'].subtitle }}></p>
                </div>

                <div className="row p-0 mx-0 mt-high">

                    <div
                        className="col-lg-4 white-border text-start p-5 bl-half bb-half br-half position-relative overflow-hidden hover-tr">
                        <div className="image-wrapper">
                            <img src="/img/icon-motives.svg" alt="THEIR MOTIVES"
                                className="original motive-ico" />
                            <img src="/img/icon-motives-2.svg" alt="THEIR MOTIVES"
                                className="hover motive-ico" />
                        </div>
                        <div>
                            <h5 className="text-uppercase font-goodtimes text-medium text-narrow-height my-3"
                                data-query="home.segment-4.cards.0.title" dangerouslySetInnerHTML={{ __html: homeCopy['segment-4'].cards[0].title }}></h5>
                        </div>
                        <div className="card-text-height">
                            <p className="text-thin text-n300 text-small text-narrow-height mt-4"
                                data-query="home.segment-4.cards.0.description" dangerouslySetInnerHTML={{ __html: homeCopy['segment-4'].cards[0].description }}></p>
                        </div>

                        <div className="tr-gradient bg-yellow-gradient"></div>
                    </div>

                    <div
                        className="col-lg-4 white-border text-start p-5 bl-half bb-half br-half position-relative overflow-hidden hover-tr">
                        <div className="image-wrapper">
                            <img src="/img/icon-ideology.svg" alt="WOKE IDEOLOGY"
                                className="original motive-ico" />
                            <img src="/img/icon-ideology-2.svg" alt="WOKE IDEOLOGY"
                                className="hover motive-ico" />
                        </div>
                        <div>
                            <h5 className="text-uppercase font-goodtimes text-medium text-narrow-height my-3"
                                data-query="home.segment-4.cards.1.title" dangerouslySetInnerHTML={{ __html: homeCopy['segment-4'].cards[1].title }}></h5>
                        </div>
                        <div className="card-text-height">
                            <p className="text-thin text-n300 text-small text-narrow-height mt-4"
                                data-query="home.segment-4.cards.1.description" dangerouslySetInnerHTML={{ __html: homeCopy['segment-4'].cards[1].description }}></p>
                        </div>

                        <div className="tr-gradient bg-yellow-gradient"></div>
                    </div>

                    <div
                        className="col-lg-4 white-border text-start p-5 bl-half bb-half br-half position-relative overflow-hidden hover-tr">
                        <div className="image-wrapper">
                            <img src="/img/icon-stop-ai.svg" alt="STOP AI BY DECELS"
                                className="original motive-ico" />
                            <img src="/img/icon-stop-ai-2.svg" alt="STOP AI BY DECELS"
                                className="hover motive-ico" />
                        </div>
                        <div>
                            <h5 className="text-uppercase font-goodtimes text-medium text-narrow-height my-3"
                                data-query="home.segment-4.cards.2.title" dangerouslySetInnerHTML={{ __html: homeCopy['segment-4'].cards[2].title }}></h5>
                        </div>
                        <div className="card-text-height">
                            <p className="text-thin text-n300 text-small text-narrow-height mt-4"
                                data-query="home.segment-4.cards.2.description" dangerouslySetInnerHTML={{ __html: homeCopy['segment-4'].cards[2].description }}></p>
                        </div>

                        <div className="tr-gradient bg-yellow-gradient"></div>
                    </div>
                </div>
            </div>

        </>
    );
}