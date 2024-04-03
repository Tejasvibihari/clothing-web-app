import AboutSection from "../components/AboutSection";
import BasicBreadcrumbs from "../components/Breadcrumbs";
import Features from "../components/Features";
import MissionVision from "../components/MissionVision";
import ProfileSection from "../components/ProfileSection";


export default function About() {
    return (
        <>

            <BasicBreadcrumbs
                first="Home"
                last="About"
            />
            <AboutSection />
            <MissionVision />
            <Features />
            <ProfileSection />
        </>
    )
}
