import Sections from "@/app/components/my-journey";
import SectionsMobile from "@/app/components/my-journey/sections-mobile";
import { headers } from "next/headers";

export default function MyJourney() {
    const headersList = headers();
    const userAgent = headersList.get('user-agent') || '';
    const isMobile = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    return (
        <div className="content mx-lg-5">
            <div className={`container px-4 px-lg-3`}>
            {isMobile ? <SectionsMobile /> : <Sections />}
            </div>
        </div>
    );
}