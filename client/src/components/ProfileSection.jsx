import ProfileCard from "./ProfileCard"

export default function ProfileSection() {
    return (
        <>
            <div className="max-w-7xl mx-auto my-20">
                <div className="my-12">
                    <div className="text-center text-md my-7 text-[#ff6f61]">
                        MAKING EVERYDAY SPECIAL
                    </div>
                    <div className="text-center text-4xl font-[montserrat]">
                        Meet Our Team
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <ProfileCard
                        img="./img/team-1.jpg"
                        name="John Doe"
                        role="CEO"
                        instLink="/"
                        fbLink="/"
                        pinLink="/"
                        xLink="/"
                    />
                    <ProfileCard
                        img="./img/team-2.jpg"
                        name="Jane Doe"
                        role="Designer"
                        instLink="/"
                        fbLink="/"
                        pinLink="/"
                        xLink="/" />
                    <ProfileCard
                        img="./img/team-3.jpg"
                        name="John Doe"
                        role="Manager"
                        instLink="/"
                        fbLink="/"
                        pinLink="/"
                        xLink="/" />
                </div>
            </div>
        </>
    )
}
