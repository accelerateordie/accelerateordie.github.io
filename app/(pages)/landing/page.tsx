import Sections from "@/app/components/landing";
import SectionsMobile from "@/app/components/landing/sections-mobile";

interface LandingProps {
    isMobile: boolean;
  }
const Landing: React.FC<LandingProps> = ({ isMobile }) => {
   
    return (
        <div className="content mx-lg-5">
        <div className="container">
            {isMobile ? <SectionsMobile /> : <Sections />}
        </div>
        </div>
    );
}
export default Landing;
