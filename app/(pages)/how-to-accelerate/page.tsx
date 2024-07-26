import Sections from "@/app/components/how-to-accelerate";
import SectionsMobile from "@/app/components/how-to-accelerate/sections-mobile";
import { headers } from "next/headers";

export default function HowToAccelerate() {
    const headersList = headers();
    const userAgent = headersList.get('user-agent') || '';
    const isMobile = /Mobi|Android/i.test(userAgent);
    return (
        <div className="content mx-lg-5">
            <div className="container">
              {isMobile ? <SectionsMobile /> : <Sections /> } 
            </div>
        </div>
    );
}