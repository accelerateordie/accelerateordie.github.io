import Sections from "@/app/components/privacy-policy";
import SectionsMobile from "@/app/components/privacy-policy/sections-mobile";
import { headers } from "next/headers";

export default function PrivacyPolicy() {
    const headersList = headers();
    const userAgent = headersList.get('user-agent') || '';
    const isMobile = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    return (
        <div className="content mx-lg-5">
            <div className="container px-4 px-lg-0">
              {isMobile ? <SectionsMobile /> : <Sections /> } 
            </div>
        </div>
    );
}