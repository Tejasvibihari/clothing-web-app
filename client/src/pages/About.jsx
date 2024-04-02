import AboutSection from "../components/AboutSection";
import BasicBreadcrumbs from "../components/Breadcrumbs";
import MissionVision from "../components/MissionVision";


export default function About() {
    return (
        <>
            <div className="bg-gray-300">
                <BasicBreadcrumbs
                    first="Home"
                    last="About"
                />
            </div>
            <AboutSection />
            <MissionVision />
        </>
    )
}
