import React, { useState } from 'react';
//import './Accordion.scss'; // Import your CSS/SCSS file here

interface AccordionProps {
    items: {
        title: string;
        "title-mob": string,
        description: string,
        img:string
    }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const togglePanel = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="jurneyTimeLine mt-5">
            {items.map((item, index) => (
                <div key={index} className="">
                     <div     onClick={() => togglePanel(index)}
                     className={`timeLineHeader ${activeIndex === index ? 'active' : ''}`}>
                        <div className="timeLineIcon">
                            <img src={item.img} />
                        </div>
                        <div className="timeLineTitle font-goodtimes text-small"
                        dangerouslySetInnerHTML={{ __html: item['title-mob'] }}
                         data-query="my-journey.segment-1.items.6.title-mob">
                          
                        </div>
                        <div className="arrow-icon">
                            <img src="./img/icon-arrow-down.svg"
                            style={{ transform: activeIndex === index ? 'rotate(-180deg)' : 'rotate(0deg)' }}
                            alt="Arrow Down" />
                        </div>
                    </div>
                    <div className="timeLineDescription">
                        <div
                            style={{
                                height: activeIndex === index ? '100%' : '0px',
                                 transition: activeIndex === index ? 'all ease 0.4s' : 'all ease 0.4s',
                            }}
                        className={`timelineBorder  text-thin text-small Box-padding timelineBorderGradient${index + 1} ${index == 7 ? 'timelineBorderLastItem' : ''}`}>
                            <span  style={{
                            height: activeIndex === index ? '100%' : '0px',
                            visibility: activeIndex === index ? 'visible' : 'hidden',
                            opacity: activeIndex === index ? '1' : '0',
                            transition: activeIndex === index ? 'all ease 0.4s' : 'all ease 0.4s',
                        }} dangerouslySetInnerHTML={{__html:item.description}}
                             data-query="my-journey.segment-1.items.6.description">
                              </span>
                        </div>
                    </div>
                    {/* <div className="timelineBorder">
                        <div className="timeLineDescription" >
                            <div className="timelineBorder  text-thin text-small Box-padding">

                                <span className="timelineText" dangerouslySetInnerHTML={{__html:item.description}}></span>
                            </div>
                        </div>


                    </div> */}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
