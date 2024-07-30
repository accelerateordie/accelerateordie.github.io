import Sections from "@/app/components/school-of-accel";
import SectionsMobile from "@/app/components/school-of-accel/sections-mobile";
import { headers } from "next/headers";

export default function SchoolOfAccel() {
    const headersList = headers();
    const userAgent = headersList.get('user-agent') || '';
    const isMobile = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    return (
        <div className="content mx-lg-5">
            <div className="container">
            {isMobile ? <SectionsMobile /> : <Sections />}
            </div>
        </div>
    );
}