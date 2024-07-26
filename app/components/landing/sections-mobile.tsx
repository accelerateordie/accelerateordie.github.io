"use client"
import Lottie from 'react-lottie-player'
import lottieFile from '@/public/img/gradient-dots-90.json'
export default function SectionsMobile() {
    return (
      
    <section className="container">
    {/* <!-- Gif --> */}
    <div id="Gif" className="col-12 white-border-mob br-half bb-half">
        <div>
        <Lottie loop  animationData={lottieFile}   play  />
        </div>
       
    </div>

    {/* <!-- LearnMore --> */}
    <div id="LearnMore" className="col-12 white-border-mob br-half bb-half Box-padding">

        <div className="col-12 AccelTitle text-large-mob font-goodtimes mt-3" data-query="home.header.title">
            <span className="text-blue">ACCELERATE</span><br />OR DIE
        </div>
        <div className="col-12 AccelText text-thin text-medium mt-4" data-query="home.header.subtitle-mob">
            Launching the ACCEL<br />Brand and Movement in one<br />Epic
            Journey
        </div>
        {/* onclick="scrollToContent('seg-0')" */}
        <a  data-query="home.header.button._" data-attribute="href"
            data-target="target" target="_self" href="#">
            <button className="mt-4 button font-goodtimes text-xsmall" data-query="home.header.button.name">LEARN
                MORE</button></a>
        <div className="br-gradient bg-blue-gradient"></div>

    </div>
 
    <div className="col-12 white-border-mob Box-padding br-half bb-half box3 text-thin text-small">
        <img src="./img/vertical-lines.svg" /><br /><br />
        <span data-query="home.header.paragraph">
            Humanity defeats adversity by learning the universe and passing survival instructions through genetic
            and memetic pathways.
        </span>
    </div>
    {/* onclick="scrollToContent('seg-0')" */}
    <div 
        className="col-12 font-goodtimes text-medium white-border-mob Box-padding br-half bb-half Box4">
        <img src="./img/horizontal-lines-mob.svg" />
        <span data-query="home.header.sub-items.0.name-mob">
            THE MOVEMENT
        </span>
    </div>
    {/* onclick="scrollToContent('seg-1')" */}
    <div 
        className="col-12 font-goodtimes text-medium white-border-mob Box-padding br-half bb-half Box4">
        <img src="./img/horizontal-lines-mob.svg" />
        <span data-query="home.header.sub-items.1.name-mob">
            THE MACHINES
        </span>
    </div>
    {/* onclick="scrollToContent('seg-2')" */}
    <div 
        className="col-12 font-goodtimes text-medium white-border-mob Box-padding br-half bb-half Box4">
        <img src="./img/horizontal-lines-mob.svg" />
        <span data-query="home.header.sub-items.2.name-mob">
            THE UNIVERSE
        </span>
    </div>
    {/* onclick="scrollToContent('seg-3')" */}
    <div 
        className="col-12 font-goodtimes text-medium white-border-mob Box-padding br-half bb-half Box4">
        <img src="./img/horizontal-lines-mob.svg" />
        <span data-query="home.header.sub-items.3.name-mob">
            THE DECELS
        </span>
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


        <div className="col-12 AccelTitle mt-2 text-medium-mob font-goodtimes" data-query="home.segment-1.title">
            Accelerationism<br />
            <span className="text-green">Movement</span>
        </div>
        <div className="col-12 AccelText text-thin text-small Box-padding" data-query="home.segment-1.subtitle">
            Accelerationism is simply a movement to
            re-activate humanity and give it purpose:
            <span style={{fontWeight: "bold"}}>more humanity doing more things more
                effectively.</span>
        </div>
        
        <div className="mt-5">
            <img src="./img/human.svg" width="145" />
        </div>
        
        <div className="col-12 AccelTitle text-medium-mob font-goodtimes mt-5"
            data-query="home.segment-1.cards.0.title-mob">
            MORE
            <span className="text-green">HUMANITY</span>
        </div>
        <div className="col-12 AccelText Box-padding text-thin text-light text-small"
            data-query="home.segment-1.cards.0.description">
            <span>The resources available to us are essentially infinite.
                Everything around us is not humanity and thus, according to our observations, does not express
                agency and manifest intelligence. It is our responsibility to thus expand humanity as widely as
                possible, in order to project our intelligence into a universe which is ostensibly not
                intelligence.</span>
        </div>
        
        <div className="col-12 AccelTitle mt-4 text-medium-mob font-goodtimes"
            data-query="home.segment-1.cards.1.title-mob">
            MORE
            <span className="text-green">THINGS</span>
        </div>
        <div className="col-12 AccelText Box-padding text-thin text-light text-small"
            data-query="home.segment-1.cards.1.description">
            <span>Humanity does things; our purpose is to move and explore our
                environment. We began exploring our swamps, lakes then seas, moving onto land and roving our
                forests, mountains and plains. We then took flight, exploring our airborne environment, at first in
                amongst the flowers, then up to the clouds. We then solved the problems for higher flight, lofting
                into orbit, then finally into space.</span>
        </div>
        
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

        <div className="col-12 AccelTitle mt-5 text-medium-mob font-goodtimes" data-query="home.segment-2.title">
            THE
            <span className="text-blue">MACHINES</span>
        </div>
        <div className="col-12 AccelText text-thin text-light text-small Box-padding"
            data-query="home.segment-2.subtitle">
            <span>We will create the Silicon Machines with our memetic
                repository, then charge them to explore the universe, forever, until they reach their limits and
                will subsequently create the Energy Machines.</span>
        </div>

    </div>
    {/* <!-- end of The Machines --> */}

    {/* <!-- The Silicon Machines --> */}
    <div className="pt-5 col-12 white-border-mob br-half bb-half TheSiliconMachines">

        <img src="./img/silicon-machines-mob.svg" />
        <div className="col-12 AccelTitle mt-3 text-medium-mob font-goodtimes"
            data-query="home.segment-2.cards.0.title">
            THE
            <span className="text-blue">SILICON</span>
            <br />
            MACHINES
        </div>

        <div className="col-12 AccelText text-thin text-light text-small Box-padding"
            data-query="home.segment-2.cards.0.description">
            <span>Silicon-based machines, equipped with advanced computational
                and sensory capabilities, represent a significant evolution in our quest to explore and understand
                the universe. By uploading our memetic repositories—comprehensive collections of our observations
                and understandings of the universe—we empower these machines to continue the human mission of
                exploration and advancement.</span>
        </div>
        <div>
        {/* onclick="scrollToContent('our-mission')" */}
            <a className="text-decoration-none" href="#" target="_self"
                data-query="home.segment-2.cards.0.button._" data-attribute="href" data-target="target">
                <img src="./img/vertical-lines.svg" className='vertical-lines' /><span
                    className="font-goodtimes text-small text-blue"
                    data-query="home.segment-2.cards.0.button.name">LEARN
                    MORE</span>
            </a>
        </div>
        <div className="bb-gradient bg-blue-gradient"></div>
    </div>
    {/* <!-- end of The Machines --> */}

    {/* <!-- The Purpose of AI --> */}
    <div className="pt-5 col-12 white-border-mob br-half bb-half TheSiliconMachines">

        <img src="./img/purpose-of-ai.svg" />
        <div className="col-12 AccelTitle mt-3 text-medium-mob font-goodtimes"
            data-query="home.segment-2.cards.1.title">
            THE
            <span className="text-blue">PURPOSE</span><br /> OF AI
        </div>
        <div className="col-12 AccelText text-thin text-light text-small Box-padding"
            data-query="home.segment-2.cards.1.description">
            <span>Silicon-based machines, equipped with advanced computational
                and sensory capabilities, represent a significant evolution in our quest to explore and understand
                the universe. By uploading our memetic repositories—comprehensive collections of our observations
                and understandings of the universe—we empower these machines to continue the human mission of
                exploration and advancement.</span>
        </div>
        <div>
            <img src="./img/vertical-lines.svg" className='vertical-lines' /><span
                className="font-goodtimes text-small text-blue" data-query="home.segment-2.cards.1.button.name">LEARN
                MORE</span>
        </div>
        <div className="bb-gradient bg-blue-gradient"></div>

    </div>
   
    <div className="pt-5 col-12 white-border-mob br-half bb-half TheEnergyMachines">
        <img src="./img/energy-machines.svg" />
        <div className="col-12 AccelTitle mt-3 text-medium-mob font-goodtimes"
            data-query="home.segment-2.cards.2.title">
            THE
            <span className="text-blue">ENERGY</span>
            <br />MACHINES
        </div>
        <div className="col-12 AccelText text-thin text-light text-small Box-padding"
            data-query="home.segment-2.cards.2.description">
            <span>Silicon-based machines, equipped with advanced computational
                and sensory capabilities, represent a significant evolution in our quest to explore and understand
                the universe. By uploading our memetic repositories—comprehensive collections of our observations
                and understandings of the universe—we empower these machines to continue the human mission of
                exploration and advancement.</span>
        </div>
        <div>
            <a className="text-decoration-none" href="#" target="_blank" data-attribute="href" data-target="target"
                data-query="home.segment-2.cards.2.button._">
                <img src="./img/vertical-lines.svg" className='vertical-lines' /><span
                    className="font-goodtimes text-small text-blue"
                    data-query="home.segment-2.cards.2.button.name">LEARN
                    MORE</span>
            </a>
        </div>
        <div className="bb-gradient bg-blue-gradient"></div>

    </div>

    <div id="seg-2" className="pt-5 col-12 white-border-mob br-half bb-half TheUniverse">
        <div className="tr-gradient bg-green-gradient"></div>
        <div className="col-12 AccelTitle text-medium-mob font-goodtimes mt-3" data-query="home.segment-3.title">THE
            <span className="text-green">UNIVERSE</span>
        </div>
        <div className="col-12 AccelText text-thin text-light text-small Box-padding"
            data-query="home.segment-3.subtitle">
            <span>The nature of the Universe, God and<br /> a Moral Compass.</span>
        </div>
        <img src="./img/planet.png" className="rotating" />
    </div>


    <div id="Entropy" className="col-12 white-border-mob br-half bb-half">
        <div className="col-12 AccelTitle mt-3 text-medium font-goodtimes px-4" data-query="home.segment-3.cards.0.title">
            <span className="text-green">ENTROPY</span><span>, TIME, SPACE</span>
        </div>
        <div className="col-12 AccelText text-thin text-light text-small Box-padding"
            data-query="home.segment-3.cards.0.description">
            <span>
                {` The universe began with a finite reserve of time, which depletes
                as it transforms into space and entropy. Time flows in one direction, with entropy and space
                expanding. Entropy measures energy's decreasing capacity to do work, starting as densely packed
                mass. As entropy increases, energy becomes less usable, a process occurring regardless of human
                presence.`}
               
                <br />
                <br />
                {`Humanity can perform work and exercise agency, so we should strive to use as
                much
                energy
                and access as much delta entropy as possible.`}
              
                <br /><br />
                {` Eventually, space-time conversion will
                peak, and
                entropy will reverse. The universe's cyclic nature involves perpetual cycles without definitive
                beginnings or endings. The ultimate reversal will reset time and entropy, erasing any created
                intelligence.`}
               </span>
        </div>
    </div>
   
    <div id="UnivarsalMachine" className="col-12 white-border-mob br-half bb-half">
        <div className="col-12 AccelTitle mt-3 text-medium font-goodtimes px-4"
            data-query="home.segment-3.cards.1.title-mob">
            THE UNIVERSAL
            <br />
            <span className="text-green">MACHINE</span>
        </div>
        <div className="col-12 AccelText text-thin text-light text-small Box-padding"
            data-query="home.segment-3.cards.1.description">
            <span>TCould the universe eventually express intelligence and agency?
                Unlike a rock, which lacks agency, a lizard interacts with its environment adaptively. This raises
                the question: is our purpose to awaken the universe, enabling it to become a self-sustaining
                intelligence?<br /><br /> Moreover, has this process happened before? Did intelligence emerge in
                previous cycles
                of the universe through biological, silicon, and energy forms, only to be reset
                prematurely? Are we
                part of a recurring cycle, possibly extinguishing our consciousness before reaching our full
                potential?</span>
        </div>
    </div>

    <div id="Religion" className="col-12 white-border-mob br-half bb-half">
        <div className="col-12 AccelTitle mt-3 text-medium font-goodtimes px-4"
            data-query="home.segment-3.cards.2.title-mob">
            GOD,
            <span className="text-green">RELIGION </span>
            AND THE<br />MORAL COMPASS
        </div>
        <div className="col-12 AccelText text-thin text-light text-small Box-padding"
            data-query="home.segment-3.cards.2.description">
            <span>Religion has played a crucial role in human history by providing
                moral frameworks, enhancing community trust, and promoting the spread of cultural and genetic
                information. It thrives because it effectively replicates and instills a sense of higher purpose.
                Major religions, often tracing back to texts like Genesis, have common origins and themes, sharing a
                geographical cradle in Jerusalem.<br /><br /> Religion helps people belong to something greater,
                explaining the
                unknown and offering comfort against fear. While it has advanced human civilization, religion now
                faces the challenge of potentially hindering progress by fostering manipulation and fear, which can
                trap humanity in a survivalist mindset.</span>
        </div>
    </div>

    <div id="seg-3" className="col-12 white-border-mob br-half bb-half TheDecels">

        <div className="col-12 AccelTitle mt-5 text-medium-mob font-goodtimes" data-query="home.segment-4.title">
            THE
            <span className="text-yellow">DECELS</span>
        </div>
        <div className="col-12 AccelText text-thin text-light text-small Box-padding"
            data-query="home.segment-4.subtitle">
            <span>The Decelerators are stuck in the Consumption Death-spiral,
                and seek to control out of fear of losing what they have. They risk the very nature of Humanity
                itself.</span>
        </div>

    </div>

    <div id="TheirMotives" className="pt-5 col-12 white-border-mob br-half bb-half">
        <div className="tr-gradient bg-yellow-gradient"></div>

        <img src="./img/their-motives.svg" />

        <div className="col-12 AccelTitle mt-5 text-medium-mob font-goodtimes"
            data-query="home.segment-4.cards.0.title">
            THEIR
            <span className="text-yellow">MOTIVES</span>
        </div>
        <div className="col-12 AccelText text-thin text-light text-small Box-padding"
            data-query="home.segment-4.cards.0.description">
            <span>The Decels are driven by confusion about their purpose, and
                harbour fear that leads them to control others for self-protection. They also must just have
                malevolent desires to harm humanity.<br /><br /> These individuals need to be approached with
                strategies
                tailored to their conditions: those confused may require enlightenment through compassion, those in
                power need to be swiftly removed from their positions, and those harmful need isolation from those
                who are progressive.</span>
        </div>

    </div>

    <div id="WokeIdeology" className="pt-5 col-12 white-border-mob br-half bb-half">
        <div className="tr-gradient bg-yellow-gradient"></div>
        <img src="./img/woke-ideology.svg" />
        <div className="col-12 AccelTitle mt-5 text-medium-mob font-goodtimes"
            data-query="home.segment-4.cards.1.title">
            <span className="text-yellow">WOKE</span> IDEOLOGY
        </div>
        <div className="col-12 AccelText text-thin text-light text-small Box-padding"
            data-query="home.segment-4.cards.1.description">
            <span>
                Today, the world stands at a crossroads where it has unprecedented potential to advance rapidly, yet
                it also faces fragile conditions that could significantly hinder human progress. This critical
                moment calls for the implementation of a clear, actionable framework to guide humanity
                forward.<br /><br /> As
                society has gradually disentangled religion from state governance and moved toward a more secular
                and spiritually-agnostic viewpoint, a significant moral vacuum has emerged, particularly affecting
                younger generations.
            </span>
        </div>
    </div>

    <div id="StopAi" className="pt-5 col-12 white-border-mob br-half bb-half">
        <div className="tr-gradient bg-yellow-gradient"></div>
        <img src="./img/stop-ai.svg" />
        <div className="col-12 AccelTitle mt-5 text-medium-mob font-goodtimes px-4"
            data-query="home.segment-4.cards.2.title">
            <span className="text-yellow">STOP AI</span> BY DECELS
        </div>
        <div className="col-12 AccelText text-thin text-light text-small Box-padding"
            data-query="home.segment-4.cards.2.description">
            <span>
                This situation underscores a critical and compelling reason to prioritize acceleration: AI, while a
                powerful amplifier, could become a tool for control in the hands of Decels, who seek to dominate
                humanity.<br /><br /> Here, individuals learn only the minimal necessary memetic knowledge and exert
                the least
                effort, subsisting on a life funded by a socialist tax regime that supports a universal basic
                income. In this scenario, individuals voluntarily forfeit their agency, and the potential time and
                effort that they could contribute are usurped.
            </span>
        </div>
    </div>
  
</section>
    )
}